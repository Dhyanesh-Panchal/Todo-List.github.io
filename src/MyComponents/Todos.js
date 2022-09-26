import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <>
            <div className='container'>
                <h3 className='text-center'>
                    This are my todos
                </h3>

                {props.todos.map((todo) => {

                    return (<div className='todo'>
                        <TodoItem todo={todo} key={props.todos.Sr} onDelete={props.onDelete} />

                    </div>);
                })}


            </div>
        </>
    )
}
