import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.js';

//Acá ReactDOM está renderizando un componente que se llama App 
//en un nodo de HTML que llamamos div con id = root
//Utiliza la sintaxis JSX
ReactDOM.render(
    <App />,
  document.getElementById('root')
);


