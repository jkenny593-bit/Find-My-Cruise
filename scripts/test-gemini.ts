import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

async function testConnection() {
  console.log("Testing gemini-flash-latest connection...");
  
  try {
    const prompt = "Hello Mara, are you there?";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("✅ Connection Successful!");
    console.log("Response:", text);
  } catch (error: any) {
    console.error("❌ Connection Failed!");
    console.error("Error Message:", error.message);
  }
}

testConnection();
