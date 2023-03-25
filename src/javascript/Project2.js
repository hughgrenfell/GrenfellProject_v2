import Board from './components/project2/Board';
import RecipeCard from './components/project2/RecipeCard';
import Recipe from './components/project2/recipes.json';
import RecipeCode from './components/project2/RecipeCode';
import ShoppingList from './components/project2/ShoppingList';
import { useState } from 'react';

function Project2() {

    const [showRecipe, setShowRecipe] = useState(false);
    const [showShoppingList, setShowShoppingList] = useState(false);
    const [ingredients, setIngredients] = useState([])
    const [shoppingList, setShoppingList] = useState([]);

    const createShoppingList = () => {
        setShoppingList(() => {
            const container = document.querySelector('.weekly-plan');
            const elementList = container.querySelectorAll('.menu-card');
        
            let tempList = [];
        
            elementList.forEach(element => {
                tempList.push(element.getAttribute("ingredients"));
            });
        
            return tempList;
        });
        setShowShoppingList(true);
    }

    return ( 
        <>
            <h1> Meal Planner </h1>
            <p> Select the meals you would like and drag them into the calendar. </p>
            <p style={{fontWeight: 'bold', color: '#C8AD55'}}> Select your meals: </p>  
            <main className="menu-container">
            <Board id="meals" className="menu"> 
              <div className="menu-items">
                { Recipe.map(recipe => {
                    return(
                        <RecipeCard
                                key={ recipe.id }
                                id={ recipe.id }
                                img={ recipe.img }
                                className={ recipe.className }
                                title={ recipe.title }
                                ingredients={ recipe.ingredients }
                                draggable={ recipe.draggable }
                                setTrigger={setShowRecipe}
                                setIngredients={setIngredients}
                        >
                        </RecipeCard>
                    )
                })}
              </div>    
            </Board>
            <div className="weekly-plan">
                <h2 className="dayOfWeek">Sunday</h2>
                <h2 className="dayOfWeek">Monday</h2>
                <h2 className="dayOfWeek">Tuesday</h2>
                <h2 className="dayOfWeek">Wednesday</h2>
                <h2 className="dayOfWeek">Thursday</h2>
                <h2 className="dayOfWeek">Friday</h2>
                <h2 className="dayOfWeek">Saturday</h2>
                <Board id="Sunday" className="board"> 
                </Board>
                <Board id="Monday" className="board"> 
                </Board>
                <Board id="Tuesday" className="board"> 
                </Board>
                <Board id="Wednesday" className="board"> 
                </Board>
                <Board id="Thursday" className="board"> 
                </Board>
                <Board id="Friday" className="board"> 
                </Board>
                <Board id="Saturday" className="board"> 
                </Board> 
            </div>
            <div className="mp-display-area">
                <button onClick={createShoppingList}>Create Shopping List</button>
            </div>
            <RecipeCode trigger={showRecipe} setTrigger={setShowRecipe} ingredients={ingredients}/>
            <ShoppingList trigger={showShoppingList} setTrigger={setShowShoppingList} ingredients={ingredients} shoppingList={shoppingList}/>
          </main>
        </>
    );
}

export default Project2;