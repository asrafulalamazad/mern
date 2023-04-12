import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {AddTodo} from "../../redux/state/todo/todoSlice";

const CreateTodo = () => {
    // dispatch
    const Dispatch = useDispatch();
    const inputValue= useRef();


    return (
        <div>
            <div className="row">
                <div className="col-md-10">
                    <input ref={inputValue} className="form-control" placeholder="Please add Todo" type="text"/>
                </div>
                <div className="col-md-2">
                    <button onClick={()=>{Dispatch(AddTodo(inputValue.current.value))}}  className="btn btn-danger">Add Todo</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;