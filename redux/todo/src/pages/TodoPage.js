import React from 'react';
import CreateTodo from "../components/Todo/CreateTodo";
import TodoList from "../components/Todo/TodoList";

const TodoPage = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header"><p className="text-bg-secondary text-center h1">TodoManager Application</p></div>
                            <div className="card-body"><CreateTodo/></div>
                            <div className="card-body"><TodoList/></div>
                            <div className="card-footer text-center">&copy; ASRASFUL, Oct'2022 to till {/*&#x09F3;*/} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;