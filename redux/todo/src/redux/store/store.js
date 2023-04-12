import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../state/todo/todoSlice"
import counterReducer from "../state/counter/counterSlice"

export default configureStore({

    reducer: {
        todo: todoReducer,
        counter: counterReducer,

    }
})