import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../../reduxToolKit/slices/counterSlice";
import "./counterWithReduxToolkit.css";
const CounterWithReduxToolkit = () => {
  // get count state
  const count = useSelector((state) => state.counter.count);
  // dispatch
  const dispatch = useDispatch();
  // incremeent Handler function
  const incrementHandler = () => {
    dispatch(increment());
  };

  //decrment  handler
  const decrementHandler = () => {
    dispatch(decrement());
  };

  // incrementByValuehandler
  const incrementByValuehandler = () => {
    dispatch(incrementByValue(3));
  };
  return (
    <div className="toolkit">
      <h3>{count}</h3>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByValuehandler}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithReduxToolkit;
