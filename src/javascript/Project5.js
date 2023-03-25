import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Project5/Column';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const initialData = {
    task: {
        'task-1': { id: 'task-1', content: 'Task 1' },
        'task-2': { id: 'task-2', content: 'Task 2' },
        'task-3': { id: 'task-3', content: 'Task 3' },
        'task-4': { id: 'task-4', content: 'Task 4' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

function Project5() {

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
            const newTaskIds = Array.from(home.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
    
            const newHome = {
                ...home,
                taskIds: newTaskIds,
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

        const homeTasksIds = Array.from(home.taskIds);
        homeTasksIds.splice(source.index, 1);
        const newHome = {
            ...home,
            taskIds: homeTasksIds,
        };

        const foreignTaskIds = Array.from(foreign.taskIds);
        foreignTaskIds.splice(destination.index, 0, draggableId);
        const newForeign = {
            ...foreign,
            taskIds: foreignTaskIds,
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
                {state.columnOrder.map((columnId, index) => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map((taskId) => state.task[taskId]);

                    const isDropDisabled = index < state.homeIndex;

                    return (
                        <Column 
                            key={column.id} 
                            column={column} 
                            tasks={tasks}
                            isDropDisabled={isDropDisabled} 
                        />
                    );
                })}
            </Container>
        </DragDropContext>    
    );
}

export default Project5;