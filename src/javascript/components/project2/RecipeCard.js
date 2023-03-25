function RecipeCard (props) {

    const dragStart = e => {
        e.dataTransfer.setData('card_id', e.target.id);
        e.target.style.opacity = 0.1;
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    const dragEnd = e => {
        e.target.style.opacity = 1;
    }

    const onClick = e => {
        props.setTrigger(true);
        props.setIngredients(props.ingredients);
    }

    return (
        <div 
        id={props.id}
        className={props.className}
        ingredients={props.ingredients}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        onDragOver={dragOver}
        >
        { props.children }
        <img src={props.img} className="card-image" draggable="false" alt={props.title}/>
        <h2 className="card-title">{props.title}</h2>
        <button 
            className="card-btn"
            onClick={onClick}
        >
            View Recipe
        </button>
        </div>
    )
}

export default RecipeCard