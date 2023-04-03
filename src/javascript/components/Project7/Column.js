import React from 'react';
import styled from 'styled-components';
import Recipe from './Recipe';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const RecipeList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;

function Column(props) {

    return (
      <Container>
        <Title>{props.column.title}</Title>
        <Droppable 
          droppableId={props.column.id}
          isDropDisabled={props.isDropDisabled}
        >
          {(provided, snapshot) => (
            <RecipeList 
              ref={provided.innerRef} 
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {props.recipes.map((recipe, index) =>
                <Recipe key={recipe.id} recipe={recipe} index={index} />
              )}
              {provided.placeholder}
            </RecipeList>
          )}
        </Droppable>
      </Container>  
    );
}

export default Column;