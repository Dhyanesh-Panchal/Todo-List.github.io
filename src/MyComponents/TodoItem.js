import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>

            <h4>{todo.Sr}) {todo.task}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button>
        </>
    )
}
