'use server';

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const { textStream } = streamText({
    model: openai('gpt-4o-mini'),
    prompt: 'Invent a new holiday and describe its traditions.',
  });
  
  for await (const textPart of textStream) {
    process.stdout.write(textPart);
  
  




// export async function POST(req: Request) {
//   const { messages } = await req.json();

//   const result = await streamText({
//     model: openai("gpt-4o-mini"),
//     messages,
//   });
//   return new StreamingTextResponse(result.toAIStream());
}