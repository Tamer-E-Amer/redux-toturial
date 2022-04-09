// CounterActions that holds all actions applied to the counterThunk 


import { INCREMENT, DECREMENT } from "../../redux/actions/types"


// increment action here will be a function that accept a dispatch to dispatch the action in the same place

export const incrementAction =async(dispatch)=>{
    return dispatch({
        type:INCREMENT,
    })
}

// decrement action

export const decrementAction = (dispatch)=>{
    return dispatch({
        type:DECREMENT,
    })
}