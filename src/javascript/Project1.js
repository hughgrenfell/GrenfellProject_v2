import React, { useState } from 'react';
import Todo from './components/project1/Todo';
import Form from './components/project1/Form';
import FilterButton from './components/project1/FilterButton';
import { nanoid } from 'nanoid';
import './components/project1/css/project1.css';


const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Project1(props) {

    const [ tasks, setTasks ] = useState(props.tasks);
    const [ filter, setFilter ] = useState('All');
    const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo 
        id={task.id} 
        name={task.name} 
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask} 
      />
    ));

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;
    const filterList = FILTER_NAMES.map((name) => (
      <FilterButton 
        key={name} 
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
        tasksNoun={tasksNoun} 
      />
    ));

    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }
    
    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
          // if this task has the same ID as the edited task
          if (id === task.id) {
            // use object spread to make a new object whose `completed` prop has been inverted
            return {...task, completed: !task.completed}
          }
          return task;
        });
        setTasks(updatedTasks);
    }
    
    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }
    
    function editTask(id, newName) {
        const editedTaskList = tasks.map((task) => {
          // If this task has the same ID as the edited task
          if (id === task.id) {
            return {...task, name: newName}
          }
          return task;
        });
        setTasks(editedTaskList);
    }

    return (
        <div className="todoapp stack-large">
        <h1>To Do List</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        <h2 id="list-heading">{headingText}</h2>
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
            { taskList }
        </ul>
      </div>
    );
}

export default Project1;
