
import { GoogleGenAI } from "@google/genai";
import { GEMININ_API_KEY } from "./constant";



const ai = new GoogleGenAI({
    apiKey: GEMININ_API_KEY
    
});
 

export default ai;