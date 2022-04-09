import React from 'react';
// components
import { Counter, CounterWithReduxThunk, CounterWithReduxToolkit} from './components';
//css
import './app.css';

const App = () => {
  return <div className='app'>
    {/* pure redux */}
    {/* <Counter/> */}

    {/* redux-Thunk */}
    {/* <CounterWithReduxThunk/> */}

    {/* redux toolkit */}
    <CounterWithReduxToolkit/>
  </div>;
};

export default App;
