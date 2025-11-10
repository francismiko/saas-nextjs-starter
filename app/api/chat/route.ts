import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// Configure OpenRouter as OpenAI-compatible provider
const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openrouter("gpt-3.5-turbo"),
    messages,
  });

  return result.toDataStreamResponse();
}
