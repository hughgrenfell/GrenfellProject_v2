export function RecipeCode(props) {

    const onClick = e => {
        props.setTrigger(false);
    }

    const listItems = props.ingredients.map((items, i) =>
        <li key={"item" + i}>{items}</li>
        );

    return (props.trigger) ? (
        <div className="show-recipe">
            <p>The ingredients are: </p> 
            <ul>{listItems}</ul>
            <button 
                className="close-recipe-btn"
                onClick={onClick}
            >   
                Close Recipe
            </button>
        </div>
    ) : "";
}

export default RecipeCode