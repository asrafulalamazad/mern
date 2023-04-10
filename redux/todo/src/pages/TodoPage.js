import React from 'react';
import CreateTodo from "../components/CreateTodo";
import TodoList from "../components/TodoList";

const TodoPage = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header"><p>Header</p></div>
                            <div className="card-body"><CreateTodo/></div>
                            <div className="card-body"><TodoList/></div>
                            <div className="card-footer">Body</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;