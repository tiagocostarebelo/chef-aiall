export default function Main() {
    return (
        <main>
            <form className="add-ingredient__form">
                <input
                    className="add-ingredient__input"
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                />
                <button className="add-ingredient__button">Add ingredient</button>
            </form>
        </main>
    )
}