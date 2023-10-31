import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import DeleteTodo from "./DeleteTodo";

const ListTodos = () => {

  const [todos, setTodos] = useState([])

  const getTodos = async() => {
    try {
      await fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
      })

    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  })  // + [empty array] for one request

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, idx) => (
            <tr key={idx}>
              <td>{ todo.description }</td>
              <td><Link to={`/edit/${todo.todo_id}`} className="btn btn-primary">Edit</Link></td>
              <td><DeleteTodo todo_id={todo.todo_id} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;