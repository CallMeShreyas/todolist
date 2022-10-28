import React from 'react'

const TodoItem = (props) => {

  return (
    <div>
      <h4>{props.todo.sno}</h4>
      <h4> {props.todo.title} </h4>
      <p> {props.todo.desc} </p>
      <button className='btn btn-sn btn-danger' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
    </div>
  )
}

// Header.defaultProps = {
//   todo.title: "Your Title Here"
// }

export default TodoItem
