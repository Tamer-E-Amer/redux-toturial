//Thunk is a middleware ===> applyMiddleware

import { applyMiddleware, createStore } from "redux";
import reduxThunk from 'redux-thunk';
// import counterThunkReducer from "./reducers/counterThunkReducer";
// import reducers when we have many reducers
import reducers from './reducers'

//enhancer
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const storeThunk = createStore(reducers,enhancer(applyMiddleware(reduxThunk)));

export default storeThunk;