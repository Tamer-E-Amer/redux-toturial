import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../../redux-thunk/actions/counterAction";

//css
import "./counterWithReduxThunk.css";
const CounterWithReduxThunk = () => {
  // state of the counterThunk
  const counterThunk = useSelector(
    (state) => state.counterReducer.counterThunk
  );
  const dispatch = useDispatch();
  const incrementHandler = () => incrementAction(dispatch);
  //decrementHandler
  const decrementHandler = () => decrementAction(dispatch);
  return (
    <div className="thunk">
      <h3>{counterThunk}</h3>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithReduxThunk;
