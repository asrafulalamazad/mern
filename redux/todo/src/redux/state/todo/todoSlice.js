import {createSlice} from "@reduxjs/toolkit";

const todo = "todo"
export const todoSlice= createSlice({
//     state
    name: "todo",
    initialState: {
        value: [],
    },


//     action reducers
    reducers:{
        AddTodo:(state, action)=>{
            // debugger;
            state.value.push(action.payload)
        },
        RemoveTodo:(state, action)=>{
            state.value.splice(action.payload,1)
        },
        editTodo:(state, action)=>{
            state.value.splice(action.payload["index"],1,action.payload["task"])
        }
    }

})

export const {AddTodo,RemoveTodo,editTodo }=todoSlice.actions;
export default todoSlice.reducer;