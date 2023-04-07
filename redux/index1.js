
//variable assign
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

//redux function import

const {createStore}= require("redux");

//state  value set

const initialCounterState =
{
    count: 0,
}

//action => INCREMENT, DECREMENT, RESET function

const incrementCounter=(()=>
        { return {
            type: INCREMENT
        }
        }
        )

const decrementCounter = (()=> {
    return{
            type : DECREMENT
        }
        }
)

const resetCounter = (()=> {
    return {
            type: RESET
    }
})

//reducer

const counterReducer = (state=initialCounterState, action)=>{

    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        default: {
            state
        }
    }
}


//store
const store= createStore(counterReducer);

//store.subscribe()
store.subscribe(()=>{
    console.log(store.getState())
});

//dispatch ()
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(resetCounter())
store.dispatch(decrementCounter())
