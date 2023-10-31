import React, { Fragment } from "react";

const DeleteTodoComp = (props) => {

    const deleteTodo = async(id) => {
        try {
            fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE",
            })

        } catch (err) {
            console.log(err.message)
        }
    }
    
    return (
        <Fragment>
            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                Delete
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Todo</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    Are you sure you want to delete this todo?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal"
                    onClick={() => deleteTodo(props.todo_id)}
                    >
                        Confirm Deletion
                    </button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default DeleteTodoComp;