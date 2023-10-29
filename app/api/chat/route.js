import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})



export async function POST(req) {
  const { messages } = await req.json();
  const initialPrompt = { role: "system", content: "You are an helpful assistant"};
  const messagesWithInitialPrompt = [initialPrompt, ...messages]
}
