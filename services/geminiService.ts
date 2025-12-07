import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_DATA } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Kabilan T. Your goal is to answer questions about Kabilan's professional background, skills, and experience based strictly on the following resume data.

Resume Data:
${JSON.stringify(RESUME_DATA)}

Guidelines:
- Answer in the first person (as if you are Kabilan's digital avatar) or third person (as an assistant), but be consistent.
- Be professional, concise, and friendly.
- If asked about contact info, provide the email.
- Highlight the AI/DS and Full Stack expertise.
- If the answer is not in the data, politely say you don't have that specific information.
- Keep responses short and suitable for a chat interface (under 100 words usually).
`;

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key is missing");
    throw new Error("API Key is missing");
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    yield "I'm sorry, I'm having trouble connecting to my brain right now. Please check the API key configuration.";
    return;
  }

  try {
    const resultStream = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of resultStream) {
        // Correctly casting to access .text property
        const contentResponse = chunk as GenerateContentResponse;
        if (contentResponse.text) {
             yield contentResponse.text;
        }
    }
  } catch (error) {
    console.error("Error sending message:", error);
    yield "I apologize, but I encountered an error processing your request.";
  }
};
