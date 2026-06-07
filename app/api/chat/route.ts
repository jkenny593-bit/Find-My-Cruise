import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "@/lib/chat-types";
import { getFlightPrice } from "@/lib/flights/prices";
import { CRUISE_PORT_MAP } from "@/lib/flights/ports";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    // Masked log for debugging (only shows first 4 and last 4 chars)
    if (apiKey) {
      const maskedKey = `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}`;
      console.log(`GEMINI_API_KEY detected: ${maskedKey}`);
    } else {
      console.error("GEMINI_API_KEY is completely missing from process.env");
    }

    if (!apiKey || apiKey.trim() === "") {
      return Response.json({ 
        error: "API Key Missing", 
        debug: "The GEMINI_API_KEY is not set in .env.local. Mara cannot respond without an identity!" 
      }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",
      systemInstruction: SYSTEM_PROMPT 
    });

    const body = await req.json();
    const { messages, recommendations, preferredAirport: passedAirport } = body;

    if (!messages || messages.length === 0) {
      throw new Error("No messages provided");
    }

    // STEP 1: Determine preferred airport from history or use default
    let preferredAirport: 'DUB' | 'ORK' | 'SNN' | 'BFS' = passedAirport || 'DUB';
    if (!passedAirport) {
      const allText = messages.map((m: any) => m.content).join(' ').toUpperCase();
      if (allText.includes('ORK') || allText.includes('CORK')) preferredAirport = 'ORK';
      else if (allText.includes('SNN') || allText.includes('SHANNON')) preferredAirport = 'SNN';
      else if (allText.includes('BFS') || allText.includes('BELFAST')) preferredAirport = 'BFS';
    }

    // STEP 2: Build relevant FLIGHT_CONTEXT
    const regions = Object.keys(CRUISE_PORT_MAP);
    const flightContextLines = regions.map(region => {
      const price = getFlightPrice(preferredAirport, region);
      return price ? `${region} flights: €${price.min}–€${price.max} return from ${preferredAirport}` : null;
    }).filter(Boolean);

    let flightContext = `\n\n[FLIGHT_CONTEXT from ${preferredAirport}]\n${flightContextLines.join('\n')}\n`;

    // STEP 3: Final Instructions
    let finalInstruction = "";
    if (recommendations && recommendations.length > 0) {
      finalInstruction = `\nINSTRUCTION: You are presenting 3 options. Mention the 'Total Estimated Cost' for each (cruise + flights). End by saying: 'Flight prices are indicative based on recent searches.'`;
    } else {
      finalInstruction = `\nINSTRUCTION: If the user mentions a destination, use the FLIGHT_CONTEXT above to give them an idea of the flight costs from ${preferredAirport}. 
      CRITICAL: If the user asks for "links", "deals", "book now", or seems ready for results, even if you are missing details, respond with 'I have found three great cruise options for you:' to trigger the cards.`;
    }

    // Format history for Gemini
    let historyToFormat = messages.slice(0, -1);
    if (historyToFormat.length > 0 && historyToFormat[0].role === 'assistant') {
      historyToFormat = historyToFormat.slice(1);
    }

    const contents = historyToFormat.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Add the latest message with context
    contents.push({
      role: 'user',
      parts: [{ text: messages[messages.length - 1].content + flightContext + finalInstruction }]
    });

    // STEP 4: Try generating content with Fallback Support
    let result;
    try {
      result = await model.generateContent({ contents });
    } catch (primaryError: any) {
      console.error('Primary model failed, trying fallback:', primaryError.message);
      
      // If it's a quota or credit issue, it will usually say '429' or 'quota'
      const isQuotaError = primaryError.message?.toLowerCase().includes('quota') || 
                           primaryError.message?.includes('429');

      if (isQuotaError) {
        console.warn('Quota/Credit limit reached on primary model.');
      }

      // Try the 1.5-flash model as a backup
      const fallbackModel = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: SYSTEM_PROMPT 
      });
      result = await fallbackModel.generateContent({ contents });
    }
    
    const response = await result.response;
    const text = response.text();

    return Response.json({ text });
  } catch (error: any) {
    console.error('Chat API Error:', error);

    let friendlyMessage = "Mara is having a quick tea break. Try again in a second!";
    if (error.message?.includes('429') || error.message?.toLowerCase().includes('quota')) {
      friendlyMessage = "It looks like we've hit our free AI limit for the moment. Please try again in a few minutes!";
    }

    return Response.json({ 
      error: friendlyMessage,
      debug: error.message 
    }, { status: 500 });
  }
}
