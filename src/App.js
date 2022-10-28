// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/header";
import Footer from './MyComponents/Footer'
import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';
import Link from "react-router-dom";
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import About from './MyComponents/About';



function App() {

  const onDelete = (todo) => {
    console.log("I am onDelete of ", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding the todo")
    let sno
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    let newtodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, newtodo])
    console.log(newtodo)
  }

  const [todos, setTodos] = useState([])

  return (
    <div>
      <Router>
        <Header title="My todos List" isAbout={true} />
        <Routes>

          <Route exact path="/" element={
            <div>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          }>
          </Route>

          <Route exact path="/about" element={
            <About />
          }>
          </Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
