import { GoogleGenAI, Type } from "@google/genai";

// Initialize the client with the API key from environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface GeneratedTask {
  title: string;
  category: 'work' | 'personal' | 'health';
}

/**
 * Generates a list of sample tasks based on a user persona.
 * Uses strict JSON schema validation for reliable output.
 */
export const generateSampleTasks = async (persona: string): Promise<GeneratedTask[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 realistic, concise to-do list items for a person who is a "${persona}". 
      The tasks should be actionable and short (max 6 words).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: "The text of the task",
              },
              category: {
                type: Type.STRING,
                enum: ["work", "personal", "health"],
                description: "The category of the task",
              },
            },
            required: ["title", "category"],
          },
        },
      },
    });

    const jsonText = response.text;
    if (!jsonText) return [];
    
    return JSON.parse(jsonText) as GeneratedTask[];
  } catch (error) {
    console.error("Failed to generate tasks:", error);
    // Fallback tasks in case of API failure or missing key
    return [
      { title: "Review pull requests", category: "work" },
      { title: "Drink 2L of water", category: "health" },
      { title: "Call mom", category: "personal" },
      { title: "Update project roadmap", category: "work" },
      { title: "15 min meditation", category: "health" },
    ];
  }
};