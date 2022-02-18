import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';
import { GrFormAdd, GrFormClose } from "react-icons/gr";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value); 
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Write your new task!</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='...'
            />
            <div className='TodoForm-buttonContainer'>
                <GrFormClose
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                />
                <GrFormAdd
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                    onClick={onSubmit}
                />
            </div>
        </form>
    );
}

export { TodoForm }