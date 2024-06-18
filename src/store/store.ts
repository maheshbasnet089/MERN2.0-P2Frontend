import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import blogSlice from './productSlice'
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer : {
       auth : authSlice ,
       products : productSlice,
       carts : cartSlice
    }
})

export default store 
export type AppDispatch = typeof store.dispatch 
export type RootState = ReturnType<typeof store.getState>