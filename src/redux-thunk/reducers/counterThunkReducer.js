import { DECREMENT } from "../../redux/actions/types";
import { INCREMENT } from "../actions/types";

export const counterThunkReducer = (state={counterThunk:1},action)=>{
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                counterThunk:state.counterThunk + 1,
            }
        case DECREMENT:
            return{
                ...state,
                counterThunk:state.counterThunk - 1,
            }    
        default:
            return state;
    }
}

export default counterThunkReducer;