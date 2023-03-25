export function ShoppingList(props) {

    const onClick = e => {
        props.setTrigger(false);
    }

    const listItems = props.shoppingList.map((items, i) =>
    <li key={"item" + i}>{items}</li>
    );

    return (props.trigger) ? (
        <div className="show-recipe">
            <p>Items to buy are:</p> 
            <ul>{listItems}</ul>
            <button 
                className="close-shopping-list-btn"
                onClick={onClick}
            >   
                Close Shopping List
            </button>
        </div>
    ) : "";

}

export default ShoppingList;