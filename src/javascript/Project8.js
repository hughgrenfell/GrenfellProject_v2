import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Project8/Column';
import styled from 'styled-components';
import './components/Project8/css/Project8.css'

const Container = styled.div`
    display: flex;
`;

const initialData = {
    recipe: {
        'recipe-1': { id: 'recipe-1', content: 'Recipe 1', prepTime: '25 mins', ingredients: ['olive oil', 'peanuts', 'rice'] },
        'recipe-2': { id: 'recipe-2', content: 'Recipe 2', prepTime: '45 mins', ingredients: ['sugar'] },
        'recipe-3': { id: 'recipe-3', content: 'Recipe 3', prepTime: '35 mins', ingredients: ['salt'] },
        'recipe-4': { id: 'recipe-4', content: 'Recipe 4', prepTime: '55 mins', ingredients: ['pepper'] },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Meals',
            recipeIds: ['recipe-1', 'recipe-2', 'recipe-3', 'recipe-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Sunday',
            recipeIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Monday',
            recipeIds: [],
        },
        'column-4': {
            id: 'column-4',
            title: 'Tuesday',
            recipeIds: [],
        },
        'column-5': {
            id: 'column-5',
            title: 'Wednesday',
            recipeIds: [],
        },
        'column-6': {
            id: 'column-6',
            title: 'Thursday',
            recipeIds: [],
        },
        'column-7': {
            id: 'column-7',
            title: 'Friday',
            recipeIds: [],
        },
        'column-8': {
            id: 'column-8',
            title: 'Saturday',
            recipeIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3',
                    'column-4', 'column-5', 'column-6',
                    'column-7', 'column-8' ],
};

function Project8() {

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
                    className='Menu'
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
                                <Column 
                    key={state.columns['column-4'].id}
                    column={state.columns['column-4']}
                    recipes={state.columns['column-4'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
                                <Column 
                    key={state.columns['column-5'].id}
                    column={state.columns['column-5']}
                    recipes={state.columns['column-5'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
                                <Column 
                    key={state.columns['column-6'].id}
                    column={state.columns['column-6']}
                    recipes={state.columns['column-6'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
                                <Column 
                    key={state.columns['column-7'].id}
                    column={state.columns['column-7']}
                    recipes={state.columns['column-7'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
                                <Column 
                    key={state.columns['column-8'].id}
                    column={state.columns['column-8']}
                    recipes={state.columns['column-8'].recipeIds.map((recipeId) => state.recipe[recipeId])} 
                />
            </Container>
        </DragDropContext>    
    );
}

export default Project8;