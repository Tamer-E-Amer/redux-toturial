// in redux toolkit, instead of using createStore we use configurestore

import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice';

const storeToolKit = configureStore({
    reducer:{
        counter:counterSlice,
    }
})

export default storeToolKit;