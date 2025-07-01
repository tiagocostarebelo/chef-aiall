import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import getRecipeFromMistral from '../../ai';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");


    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    async function getRecipe() {
        const responseMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(responseMarkdown.message);
    }

    return (
        <main>
            <form className="add-ingredient__form" action={addIngredients}>
                <input
                    className="add-ingredient__input"
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button className="add-ingredient__button" >Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />}
            {recipe && <Recipe recipe={recipe} />}
        </main>
    )
}