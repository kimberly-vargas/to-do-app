import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

//Por convención la primer letra de un componente se escribe ne mayúscula
//Utiliza la sintaxis JSX
function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
