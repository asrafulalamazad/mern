
//variable assign

const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

//redux function import

const {createStore}= require("redux");

//state  value set

const initialCounterState =
{
    count: 0,
}



//action INCREMENT_BY_VALUE
const incrementByValue = ((value)=> {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    }
})

//reducer

const counterReducer = (state=initialCounterState, action)=>{

    switch (action.type) {

        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload+1234567890
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


store.dispatch(incrementByValue(1000))
store.dispatch(incrementByValue(1000))
store.dispatch(incrementByValue(1000))
store.dispatch(incrementByValue(1000))
store.dispatch(incrementByValue(1000))
store.dispatch(incrementByValue(1000))
