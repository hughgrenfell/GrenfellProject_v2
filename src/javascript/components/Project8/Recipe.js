import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

    display: grid;
`;

function Recipe(props) {
    return(
        <Draggable draggableId={props.recipe.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <div>
                        {props.recipe.content}
                    </div>
                    <div>
                        {props.recipe.prepTime}
                    </div>
                    <div>
                        {props.recipe.ingredients.map((ingredient, index) => 
                        <div key={index}>{ingredient}</div>)} 
                    </div>
                    <button>
                        See Recipe
                    </button>
                </Container>
            )}
        </Draggable>
    );
}

export default Recipe;