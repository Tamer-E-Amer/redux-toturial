import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incrementByValue,
} from "../../redux/actions/counterActions";

//css
import "./counter.css";
// import
const Counter = () => {
  // get count state
  const counter = useSelector((state) => state.count);
  // using dispatch
  const dispatch = useDispatch();
  // incrementHandler function
  const incrementHandler = () => {
    dispatch(incrementAction());
  };

  //decrementHandler function
  const decrementHandler = () => {
    dispatch(decrementAction());
  };

  //incrementByValueHandler function
  const incrementByValueHandler = () => {
    dispatch(incrementByValue());
  };
  return (
    <div className="app">
      <h3>{counter}</h3>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByValueHandler}>Increment By val</button>
      </div>
    </div>
  );
};

export default Counter;
