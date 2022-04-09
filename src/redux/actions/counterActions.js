import { DECREMENT, INCREMENT, INCREMENTBYVALUE } from "./types"

// Increment Action
export const incrementAction = ()=>{
    return {
        type:INCREMENT,
    }
}

// decrement Action

export const decrementAction =()=>{
    return {
        type:DECREMENT,
    }
}

// increment by value action

export const incrementByValue =()=>{
    return{
        type:INCREMENTBYVALUE,
        value:3,
    }
}