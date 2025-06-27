import React from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';

export default function Main() {
    const [ingredients, setIngredients] = React.useState(["pasta", "ground beef", "tomato"]);
    const [recipeShown, setRecipeShow] = React.useState(false);


    function addIngredients(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function toggleRecipeShown() {
        setRecipeShow(prevRecipeShow => !prevRecipeShow);
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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} />}
            {recipeShown && <Recipe />}
        </main>
    )
}