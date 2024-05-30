import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import blogSlice from './blogSlice'

const store = configureStore({
    reducer : {
       auth : authSlice ,
       blog : blogSlice
    }
})

export default store 
export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>