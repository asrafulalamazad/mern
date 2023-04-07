
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// import {createStore} from "redux";
const {createStore} = require("redux");

//state
const initialCounterState = {
    count : 100,
}
// const initialUserState = {
//     users :[{name: "asraful alam"}],
// }

//action (increment and decrement)
 const incrementCounter = ()=>{
     return {
         // type:"INCREMENT",
          type:INCREMENT, // USING Variable
     }

}
const decrementCounter = ()=>{
    return {
        // type:"DECREMENT",
        type:DECREMENT, // USING Variable
    }

}

// Reducer

const counterReducer =(state= initialCounterState,aciton)=>{
   switch (aciton.type) {
       case INCREMENT:
           return {
               ...state,
               count: state.count+1
           }
       case DECREMENT:
           return {
               ...state,
               count: state.count-1
           }

       default:
           state;

   }

}

//store getState(), dispatch(), subscribe()

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

//dispactch

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());


