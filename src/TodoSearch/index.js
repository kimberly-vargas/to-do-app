import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch(){
    //Los react hooks son aquellas herramientas que comienzan por use 
    //como el useState, en el pasado cuando los componentes se creaban 
    //por medio de clases no se usaba el use state sino que se utilizaba 
    //un atributo en el constructor llamado this.state
    
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Search task" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };