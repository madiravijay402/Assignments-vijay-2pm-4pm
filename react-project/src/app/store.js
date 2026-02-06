// const counterSlice=createSlice({
//     name:'counter',
//     initialState,
//     reducers:{...}
// })

// no api calls
//  no side effects
//   returns updated state

// actions - action is an event that tells redux something happaned 

// dispatch - this used to send action to redux 

//selectoroe is used to read state from the store 


// initial sate is the default value of slice of the state
import{configureStore} from "@reduxjs/toolkit"

import {counterReducer} from "../features/counter/counterSlice"

export const store= configureStore({
    reducer:{
        counter:counterReducer,

    }
})

export default store

