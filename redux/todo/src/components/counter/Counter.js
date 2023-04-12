import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {

   const myNumber= useRef();

    const count= useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();


    return (
        <div>
            <p className="h1  text-center"> Counter Application </p>
            <div className="card text-center">
                <div className="card-header text-bg-secondary">
                <h3>Counter</h3>
                </div>
                <div className="card-body  text-bg-dark">
                    <h2 className=""> {count} </h2>
                    <div className="my-4">
                        <div onClick={()=>(dispatch(increment()))} className="btn btn-success">Increase</div>
                        <div onClick={()=>(dispatch(decrement()))} className="btn mx-2 btn-danger">Decrease</div>
                    </div>

                    <div className="my-4">
                        <input ref={myNumber} type="number" className="form-control"></input>
                        <button  onClick={()=>(dispatch(setCustom(myNumber.current.value)))} className="btn mx-2 btn-danger">Set Value</button>
                    </div>

                </div>
                <div className="card-footer text-bg-secondary">
                    <p>First Redux Application</p>
                </div>

            </div>

        </div>
    );
};

export default Counter;