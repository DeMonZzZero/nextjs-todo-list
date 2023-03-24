import React from "react";
import ToDoList from "../components/TodoList";


function App() {
    return (
      <>
        <h2>ToDo List Example</h2>
        <ToDoList start={[
          { id: 0, checked: true, str: 'читать learn JS' },
          { id: 1, str: 'выполнить ДЗ' }
        ]}/>
      </>
    );
  }

export default App;
