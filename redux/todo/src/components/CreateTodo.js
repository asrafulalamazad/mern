import React from 'react';

const CreateTodo = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <input className="form-control" placeholder="Please add Todo" type="text"/>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;