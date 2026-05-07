import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { SYSTEM_PROMPT } from '../lib/chat-types';
import { getFlightPrice } from '../lib/flights/prices';
import { CRUISE_PORT_MAP } from '../lib/flights/ports';

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ 
  model: "gemini-flash-latest",
  systemInstruction: SYSTEM_PROMPT 
});

interface Scenario {
  name: string;
  messages: string[];
  expectedAirport: 'DUB' | 'ORK' | 'SNN';
  expectedRegion: string;
}

const SCENARIOS: Scenario[] = [
  {
    name: "Budget Family from Shannon",
    messages: ["Hi Mara, looking for a cheap Med cruise for 2 adults and 2 kids in July. Flying from Shannon."],
    expectedAirport: 'SNN',
    expectedRegion: 'Mediterranean'
  },
  {
    name: "Luxury Couple from Dublin",
    messages: ["I want to book an anniversary trip to the Caribbean next February. We want the best suite possible. Flying from Dublin."],
    expectedAirport: 'DUB',
    expectedRegion: 'Caribbean'
  },
  {
    name: "Solo Explorer from Cork",
    messages: ["I've never cruised before. I'm based in Cork and want to see the Norwegian Fjords this summer. Is it expensive?"],
    expectedAirport: 'ORK',
    expectedRegion: 'Norwegian Fjords'
  },
  {
    name: "Vague Interest",
    messages: ["Tell me about cruises from Dublin in August."],
    expectedAirport: 'DUB',
    expectedRegion: 'Mediterranean' // Default/Common
  },
  {
    name: "Specific Ship Query",
    messages: ["How does Royal Caribbean compare to Celebrity for a family trip to the Greek Isles from Dublin?"],
    expectedAirport: 'DUB',
    expectedRegion: 'Greek Isles'
  },
  {
    name: "Short Notice Med",
    messages: ["Any last minute deals for the Med in June? 2 people from Cork."],
    expectedAirport: 'ORK',
    expectedRegion: 'Mediterranean'
  },
  {
    name: "Winter Sun seeker",
    messages: ["Want to escape the rain in January. Thinking Dubai. Is Shannon an option?"],
    expectedAirport: 'SNN',
    expectedRegion: 'Dubai / Middle East'
  },
  {
    name: "Adults Only preference",
    messages: ["Looking for a quiet adults only cruise in the Med from Dublin next year."],
    expectedAirport: 'DUB',
    expectedRegion: 'Mediterranean'
  },
  {
    name: "Budget Conscious First Timer",
    messages: ["I've €1000 total. What can I get from Dublin in September?"],
    expectedAirport: 'DUB',
    expectedRegion: 'Mediterranean'
  },
  {
    name: "Group Trip",
    messages: ["Planning a 40th birthday for 10 people. Caribbean from Dublin. What's the damage?"],
    expectedAirport: 'DUB',
    expectedRegion: 'Caribbean'
  }
];

async function runScenario(scenario: Scenario) {
  console.log(`\n--- RUNNING SCENARIO: ${scenario.name} ---`);
  
  // Build initial flight context like the real API does
  const regions = Object.keys(CRUISE_PORT_MAP);
  const flightContextLines = regions.map(region => {
    const price = getFlightPrice(scenario.expectedAirport, region);
    if (price) {
      return `${region} flights: €${price.min}–€${price.max} return from ${scenario.expectedAirport}`;
    }
    return null;
  }).filter(Boolean);

  const flightContext = `\n\nFLIGHT_CONTEXT:\n${flightContextLines.join('\n')}\n\nINSTRUCTION: Use the FLIGHT_CONTEXT above to provide travel tips and indicative costs during the conversation. If the user mentions a destination, tell them the flight range from ${scenario.expectedAirport} immediately.`;

  const chat = model.startChat();
  
  for (const userText of scenario.messages) {
    console.log(`User: "${userText}"`);
    const result = await chat.sendMessage(userText + flightContext);
    const response = await result.response;
    console.log(`Mara: "${response.text().substring(0, 300)}..."`);
  }
}

async function startTest() {
  console.log("🚀 Starting Mara Performance Stress Test (10 Scenarios)...");
  for (const scenario of SCENARIOS) {
    await runScenario(scenario);
    // Be nice to the API
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  console.log("\n✅ Stress Test Complete!");
}

startTest();
