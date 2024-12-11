import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config(); // Ensure .env is loaded before accessing environment variables

const groq = new Groq({ apiKey: process.env.AI_MODEL_API_KEY });

export async function aiPrompt(customMessage) {
  try {
    const chatCompletion = await getGroqChatCompletion(customMessage);
    // Print the completion returned by the LLM, safely checking the structure
    return (chatCompletion?.choices?.[0]?.message?.content || "No response");
  } catch (error) {
    return ("UPGRADE TO PRO !!")
  }
}

 export async function getGroqChatCompletion(customMessage) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: customMessage, 
      },
    ],
    model: "llama3-8b-8192", 
  });
}

