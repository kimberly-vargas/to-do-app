import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { Panel } from '../Panel';
import { BottomPanel } from '../BottomPanel'

//Para enviar codigo javascript se usan las llaves
function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
            <Panel>
                <TodoCounter/>
                <TodoSearch/>
            </Panel>
            <TodoList>
                {error && <p>An error ocurred</p>} 
                {loading && <p>Loading ...</p>}
                {(!loading && !searchedTodos.length) && <p>Create your first TODO!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key = {todo.text} 
                        text={todo.text}
                        completed= {todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
            <BottomPanel/>
        </React.Fragment>
    );
}

export { AppUI };