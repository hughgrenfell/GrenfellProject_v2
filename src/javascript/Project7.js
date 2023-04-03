import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Project7/Column';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const initialData = {
    recipe: {
        'recipe-1': { id: 'recipe-1', content: 'Recipe 1' },
        'recipe-2': { id: 'recipe-2', content: 'Recipe 2' },
        'recipe-3': { id: 'recipe-3', content: 'Recipe 3' },
        'recipe-4': { id: 'recipe-4', content: 'Recipe 4' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Meals',
            recipeIds: ['recipe-1', 'recipe-2', 'recipe-3', 'recipe-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Monday',
            recipeIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Tuesday',
            recipeIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

function Project7() {

    const [ state, setState ] = useState(initialData);

    const onDragStart = (start) => {
        const homeIndex = state.columnOrder.indexOf(start.source.droppableId);
        
        setState({
            ...state,
            homeIndex,
        });
    };

    const onDragEnd = (result) => {

        setState({
            ...state,
            homeIndex: null,
        });

        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId && 
            destination.index === source.index
        ) {
            return;
        }

        const home = state.columns[source.droppableId];
        const foreign = state.columns[destination.droppableId];

        if (home === foreign) {
            const newRecipeIds = Array.from(home.recipeIds);
            newRecipeIds.splice(source.index, 1);
            newRecipeIds.splice(destination.index, 0, draggableId);
    
            const newHome = {
                ...home,
                recipeIds: newRecipeIds,
            };
    
            const newState = {
                ...state,
                columns: {
                    ...state.columns,
                    [newHome.id]: newHome,
                },
            };
    
            setState(newState);
            return;
        }

        const homeRecipesIds = Array.from(home.recipeIds);
        homeRecipesIds.splice(source.index, 1);
        const newHome = {
            ...home,
            recipeIds: homeRecipesIds,
        };

        const foreignRecipeIds = Array.from(foreign.recipeIds);
        foreignRecipeIds.splice(destination.index, 0, draggableId);
        const newForeign = {
            ...foreign,
            recipeIds: foreignRecipeIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newHome.id]: newHome,
                [newForeign.id]: newForeign,
            },
        };
        setState(newState);

    };

    return (
        <DragDropContext 
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >
            <Container>
                <Column 
                    key={state.columns['column-1'].id}
                    column={state.columns['column-1']}
                    recipes={state.columns['column-1'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
            </Container>
            <Container>
                <Column 
                    key={state.columns['column-2'].id}
                    column={state.columns['column-2']}
                    recipes={state.columns['column-2'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />                
                <Column 
                    key={state.columns['column-3'].id}
                    column={state.columns['column-3']}
                    recipes={state.columns['column-3'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
            </Container>
        </DragDropContext>    
    );
}

export default Project7;