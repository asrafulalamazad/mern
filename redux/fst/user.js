
//variable assign

const ADD_USER = "ADD_USER"

//redux function import

const {createStore}= require("redux");

//state  value set

const initUser =
{
    count: 1,
    user: ["asraful"],
}



//action INCREMENT_BY_VALUE
const addUser = ((value)=> {
    return {
        type: ADD_USER,
        payload: value
    }
})

//reducer

const userReducer = (state=initUser, action)=>{

    switch (action.type) {

        case ADD_USER:
            return {
                user: [...state.user, action.payload],
                count: state.count + 1
            }
        default: {
            state
        }
    }
}


//store
const store= createStore(userReducer);

//store.subscribe()
store.subscribe(()=>{
    console.log(store.getState())
});


store.dispatch(addUser("AZAD"))
