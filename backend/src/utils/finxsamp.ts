import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import finxcprompt from "../prompts/finxcprompt";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEM_KEY as string);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: finxcprompt,
});

async function finxSamp(prompt: string): Promise<string> {
    try {
        const result = await model.generateContent({
            contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: prompt,
                    }
                  ],
                }
            ],
            generationConfig: {
              maxOutputTokens: 1000,
              temperature: 0.1,
            }
        });
        
        const resp = result.response.text();
        return resp;
    }
    catch (error) {
    console.error("Error calling finxSamp:", error);
    return "An error occurred while processing your request.";
  }
}

export { finxSamp };