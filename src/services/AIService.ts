import {streamText} from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe (prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt: prompt,
            system: "Eres un bartender experto en crear recetas de bebidas. Proporciona una receta detallada basada en los ingredientes proporcionados por el usuario.",
            temperature: 1 // Nivel de creatividad en la respuesta. 0 es más preciso, 1 es más creativo.
        })
        return result.textStream
    }
}