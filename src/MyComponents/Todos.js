import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    const myStyle = {
        minHeight: "70vh"
    }
    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h3 className='text-center'>
                    This are my todos
                </h3>
                {props.todos.length === 0 ? "No,todos to print" :

                    props.todos.map((todo) => {

                        return (<div className='todo'>
                            <TodoItem todo={todo} key={props.todos.Sr} onDelete={props.onDelete} />

                        </div>);
                    })
                }


            </div>
        </>
    )
}
