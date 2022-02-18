import React from 'react';
import { useLocalStorage } from './useLocalStorage.js'

const TodoContext = React.createContext();

function TodoProvider (props) {
    const {
        item: todos,
        saveItem: savetodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false);

    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length
  
    let searchedTodos = [];
  
    if (searchValue === '') {
      searchedTodos = todos
    } else {
      searchedTodos = todos.filter(todo => {
        const todotext = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
  
        return todotext.includes(searchText);
      })
    }

    const addTodo = (text) => {
      const newTodos = [...todos]; //llenamos newTodos con nuestro array de todos
      newTodos.push({
        completed: false,
        text,
      });
      savetodos(newTodos);
    };
  
    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];

      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      savetodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
  
      newTodos.splice(todoIndex, 1); //Recorar ejemplo del pan
      savetodos(newTodos);
    };

    return (
        //Envuelve toda la App, debe tener dentro a cualquier componente donde llamemeos al consumidor 
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};