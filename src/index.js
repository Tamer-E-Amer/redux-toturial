import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import App from './App';

// Redux stores
// import store      from './redux/store';                   // store for pure redux
// import storeThunk from './redux-thunk/store';            // store for edux thunk
import storeToolKit from './reduxToolKit/storeToolKit'    // store for redux toolkit
ReactDom.render(

    // assign the value of above imported store to the store prop 
<Provider store={storeToolKit}> 
    <App/>
</Provider>


, document.getElementById('root'));