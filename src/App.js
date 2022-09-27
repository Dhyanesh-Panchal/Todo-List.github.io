import React, { useState } from 'react';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';

function App() {
  const onDelete = (todo) => {
    console.log("ONDelete function is called for ", todo);
    setTodos(todos.filter((e) => {
      return (e != todo)
    }));
  }
  const addTodo = (title, desc) => {
    console.log("Addtodo Called", title, desc);
    let sr;
    (todos.length === 0) ? (sr = 1) :
      (sr = todos[todos.length - 1].Sr + 1);
    let myTodo = {
      Sr: sr,
      task: title,
      desc: desc
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="My Todos" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
