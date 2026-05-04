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

    // STEP 2 & 3: Fetch flight prices and build FLIGHT_CONTEXT
    let flightContext = '';
    if (recommendations && recommendations.length > 0) {
      const flightContextLines = recommendations.map((rec: any) => {
        let cruiseRegion = "Mediterranean";
        const itinerary = rec.itinerary.toLowerCase();
        if (itinerary.includes('caribbean')) cruiseRegion = "Caribbean";
        else if (itinerary.includes('fjord')) cruiseRegion = "Norwegian Fjords";
        else if (itinerary.includes('greek')) cruiseRegion = "Greek Isles";
        else if (itinerary.includes('barbados')) cruiseRegion = "Caribbean (Barbados)";
        else if (itinerary.includes('canary')) cruiseRegion = "Canary Islands";
        else if (itinerary.includes('iberian')) cruiseRegion = "Iberian Peninsula";
        else if (itinerary.includes('dubai')) cruiseRegion = "Dubai / Middle East";

        const price = getFlightPrice(preferredAirport, cruiseRegion);
        if (price) {
          return `${rec.category} option flights: €${price.min}–€${price.max} return from ${preferredAirport}`;
        }
        return null;
      }).filter(Boolean);

      if (flightContextLines.length > 0) {
        flightContext = `\n\nFLIGHT_CONTEXT:\n${flightContextLines.join('\n')}\n\nINSTRUCTION: You have been given FLIGHT_CONTEXT showing indicative return flight prices from the user's preferred Irish airport. For each cruise recommendation, add a 'Total Estimated Cost' line: cruise price per person + flight range per person. End with: 'Flight prices are indicative based on recent searches. Always check live fares before booking.'`;
      }
    }

    // Format history for Gemini
    // Ensure roles alternate and skip initial assistant message
    let historyToFormat = messages.slice(0, -1);
    if (historyToFormat.length > 0 && historyToFormat[0].role === 'assistant') {
      historyToFormat = historyToFormat.slice(1);
    }

    const contents = historyToFormat.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Add the latest message
    const latestMessage = messages[messages.length - 1].content + (flightContext ? flightContext : '');
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
