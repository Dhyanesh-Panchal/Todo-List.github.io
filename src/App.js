import React, { useState } from 'react';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

function App() {
  const onDelete = (todo) => {
    console.log("ONDelete function is called for ", todo);
    setTodos(todos.filter((e) => {
      return (e != todo)
    }))
  }
  const [todos, setTodos] = useState([
    {
      Sr: 1,
      task: "this is task1",
      desc: "Description of task1"
    },
    {
      Sr: 2,
      task: "this is task2",
      desc: "Description of task2"
    },
    {
      Sr: 3,
      task: "this is task3",
      desc: "Description of task3"
    }
  ]);
  return (
    <>
      <Header title="My Todos" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
