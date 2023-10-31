import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")

    async function onSubmitForm(e) {
        e.preventDefault()
        try {
            const body = { description };
            await fetch("http://localhost:5000/todo/new", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            setDescription('')

            // console.log(response)

        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">pern Todo List</h1>
            <form onSubmit={onSubmitForm} className="d-flex mt-5">
                <input 
                    type="text" 
                    className="form-control mr-1"
                    value={ description }
                    onChange={e => setDescription(e.target.value)} 
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo