import { DECREMENT, INCREMENT, INCREMENTBYVALUE } from "../actions/types";

const counterReducer = (state={count:5},action)=>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count:state.count +1,
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count -1,
            }
        case INCREMENTBYVALUE :
            return{
                ...state,
                count:state.count + action.value,
            }
        default:
            return state;
    }
    return state;
}

export default counterReducer;