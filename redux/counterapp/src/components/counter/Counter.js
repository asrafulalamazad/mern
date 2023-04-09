import React from 'react';
import {useSelector} from "react-redux";




const Counter = () => {

const count= useSelector((state)=>state.counter.value)

    return (
        <div>
            <p className="h1  text-center"> Counter Application </p>
            <div className="card text-center">
                <div className="card-header text-bg-secondary">
                <h3>Counter</h3>
                </div>
                <div className="card-body  text-bg-dark">
                    <h2 className=""> {count} </h2>
                    <div className="btn btn-success">Increase</div>
                    <div className="btn mx-2 btn-danger">Decrease</div>
                </div>
                <div className="card-footer text-bg-secondary">
                    <p>First Redux Application</p>
                </div>

            </div>

        </div>
    );
};

export default Counter;