import React from 'react';

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);


    const newListIngredients = ingredients.map(ingredient =>
        <li key={ingredient}>{ingredient}</li>
    );

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        e.currentTarget.reset();
        console.log("Form was submitted");
    }



    return (
        <main>
            <form className="add-ingredient__form" onSubmit={handleSubmit}>
                <input
                    className="add-ingredient__input"
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button className="add-ingredient__button" >Add ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{newListIngredients}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        </main>
    )
}