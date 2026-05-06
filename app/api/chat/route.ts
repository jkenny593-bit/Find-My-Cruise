import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "@/lib/chat-types";
import { getFlightPrice } from "@/lib/flights/prices";
import { CRUISE_PORT_MAP } from "@/lib/flights/ports";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ 
  model: "gemini-flash-latest",
  systemInstruction: SYSTEM_PROMPT 
});

export async function POST(req: Request) {
  try {
    const { messages, recommendations, preferredAirport: passedAirport } = await req.json();

    // STEP 1: Determine preferred airport from history or use default
    let preferredAirport: 'DUB' | 'ORK' | 'SNN' = passedAirport || 'DUB';
    if (!passedAirport) {
      const allText = messages.map((m: any) => m.content).join(' ').toUpperCase();
      if (allText.includes('ORK') || allText.includes('CORK')) preferredAirport = 'ORK';
      else if (allText.includes('SNN') || allText.includes('SHANNON')) preferredAirport = 'SNN';
    }

    // STEP 2: Always build FLIGHT_CONTEXT for the AI to have "early" access to prices
    // We'll generate a comprehensive context block of all 15 routes for the current origin
    const regions = Object.keys(CRUISE_PORT_MAP);
    const flightContextLines = regions.map(region => {
      const price = getFlightPrice(preferredAirport, region);
      if (price) {
        return `${region} flights: €${price.min}–€${price.max} return from ${preferredAirport}`;
      }
      return null;
    }).filter(Boolean);

    let flightContext = `\n\nFLIGHT_CONTEXT:\n${flightContextLines.join('\n')}\n\n`;

    // If we have final recommendations, add the specific instructions for the end-game
    if (recommendations && recommendations.length > 0) {
      flightContext += `INSTRUCTION: You have been given FLIGHT_CONTEXT showing indicative return flight prices. For each of the 3 cruise recommendations (Budget, Mid-range, Premium), add a 'Total Estimated Cost' line: cruise price per person + flight range per person. End with: 'Flight prices are indicative based on recent searches. Always check live fares before booking.'`;
    } else {
      flightContext += `INSTRUCTION: Use the FLIGHT_CONTEXT above to provide travel tips and indicative costs during the conversation. If the user mentions a destination, tell them the flight range from ${preferredAirport} immediately.`;
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

    // Add the latest message with the dynamic context
    const latestMessage = messages[messages.length - 1].content + flightContext;
    contents.push({
      role: 'user',
      parts: [{ text: latestMessage }]
    });

    const result = await model.generateContent({
      contents,
    });
    
    const response = await result.response;
    const text = response.text();

    return Response.json({ text });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return Response.json({ error: "Mara is having a quick tea break. Try again in a second!" }, { status: 500 });
  }
}
