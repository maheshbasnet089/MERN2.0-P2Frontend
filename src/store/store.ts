import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import blogSlice from './productSlice'
import productSlice from './productSlice'

const store = configureStore({
    reducer : {
       auth : authSlice ,
       products : productSlice
    }
})

export default store 
export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>