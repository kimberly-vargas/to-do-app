import React from 'react';
import { TodoContext } from '../TodoContext';
import "./TodoCounter.css";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <div className='topInfo'>
            <h1>To-do App</h1>
            <h2 className='TodoCounter'>You have completed {completedTodos} of {totalTodos} to-do's</h2>
        </div>
        );
}

export { TodoCounter };