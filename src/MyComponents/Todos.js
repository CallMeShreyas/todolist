import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  let todostyle = {
    minHeight: "100vh"
  }
  return (
    <div className='container my-3' style = {todostyle}>
        <h3 className='text-center'> Todos List </h3>
        
        
        {props.todos.length === 0? "No Todos To display":
          props.todos.map((todo)=>{
            return (
             <div>
              <TodoItem todo={todo} sno = {todo.sno} onDelete = {props.onDelete} /><hr/>
              </div> 
            )
        })}
        
    </div>
  )
}


export default Todos
