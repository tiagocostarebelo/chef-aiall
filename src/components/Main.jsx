import React from 'react';

export default function Main() {
    const [ingredient, setIngredient] = React.useState([]);


    const newListIngredients = ingredient.map((ingredient, index) =>
        <li key={ingredient}>{ingredient}</li>
    );

    function handleSubmit(e) {
        e.preventDefault();
        const newIngredient = document.querySelector('.add-ingredient__input').value;
        setIngredient(prevIngredient => [...prevIngredient, newIngredient])
        console.log(newIngredient, ingredient);
        document.querySelector('.add-ingredient__input').value = "";
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
                />
                <button className="add-ingredient__button" >Add ingredient</button>
            </form>

            {newListIngredients}
        </main>
    )
}