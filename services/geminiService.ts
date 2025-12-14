import { GoogleGenAI } from "@google/genai";
import { AspectRatio } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateImage = async (
  prompt: string,
  ratio: string,
  referenceImage?: string
): Promise<string> => {
  try {
    // Use gemini-2.5-flash-image which is generally available and doesn't require specific allowlisting like the pro-image-preview model might
    const model = 'gemini-2.5-flash-image';
    
    // Map the string ratio to the supported type
    const validRatios: AspectRatio[] = ["1:1", "3:4", "4:3", "9:16", "16:9"];
    let selectedAspectRatio: AspectRatio = "1:1";
    if (validRatios.includes(ratio as AspectRatio)) {
      selectedAspectRatio = ratio as AspectRatio;
    }

    const parts: any[] = [];

    // If a reference image is provided, add it to the parts
    if (referenceImage) {
      // Expecting base64 string like "data:image/png;base64,..."
      const matches = referenceImage.match(/^data:(.+);base64,(.+)$/);
      if (matches && matches.length === 3) {
        parts.push({
          inlineData: {
            mimeType: matches[1],
            data: matches[2],
          },
        });
      }
    }

    // Add the text prompt
    parts.push({ text: prompt });

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: parts,
      },
      config: {
        imageConfig: {
          aspectRatio: selectedAspectRatio,
          // imageSize is not supported for gemini-2.5-flash-image
        },
      },
    });

    // Extract image
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString: string = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
    
    throw new Error("No image data found in response");

  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};