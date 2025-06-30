import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsStr = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsStr}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return {
            success: true,
            message: response.choices?.[0]?.message?.content || "No response content found.",
        };
    } catch (err) {
        console.error("Error calling HuggingFace inference:", err);
        return { success: false, error: err.message };
    }

}

export default getRecipeFromMistral;