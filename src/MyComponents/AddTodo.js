import React, { useState } from 'react'

export const AddTodo = (props) => {
    const MyCSS = {
        padding: "5px",
    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is empty");
        }
        props.addTodo(title, desc);
    }
    return (
        <div className='container' style={MyCSS}>
            <h3>Add task</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="Title">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="Title" placeholder="Title" />
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="Description" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3" >Submit</button>
            </form>
        </div>
    )
}
