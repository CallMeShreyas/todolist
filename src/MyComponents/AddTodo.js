import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if(!title || !desc){
            alert("Title or Description cannot be empty")
        }
        props.addTodo(title, desc)
    }
    return (
        <div classNameName='container my-3'>
            <form onSubmit={submit}>
                <div className="container mb-3">
                    <h3 classNameName='text-center'>Add A Todo</h3>
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} className="form-control" onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="container mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="desc" value={desc} className="form-control" onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                </div>
                <div className='container'>
                <button type="submit" className="btn btn-sn btn-success">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
