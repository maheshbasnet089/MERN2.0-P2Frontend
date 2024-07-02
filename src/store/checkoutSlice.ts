import { createSlice,PayloadAction } from "@reduxjs/toolkit";import { Status } from "../globals/types/types";
import { MyOrdersData, OrderData, OrderResponseData, OrderResponseItem } from "../globals/types/checkoutTypes";
import { AppDispatch } from "./store";
import { APIAuthenticated } from "../http";


const initialState:OrderResponseData = {
    items : [],
    status : Status.LOADING, 
    khaltiUrl : null,
    myOrders : [] 

}

const orderSlice = createSlice({
    name : 'order',
    initialState, 
    reducers : {
        setItems(state:OrderResponseData, action:PayloadAction<OrderResponseItem>){
            state.items.push(action.payload)
        },
        setMyOrders(state:OrderResponseData, action:PayloadAction<MyOrdersData[]>){
            state.myOrders = action.payload
        },
        setStatus(state:OrderResponseData, action:PayloadAction<Status>){
            state.status = action.payload
        },
        setKhaltiUrl(state:OrderResponseData,action:PayloadAction<OrderResponseData['khaltiUrl']>){
            state.khaltiUrl = action.payload
        }
    }
})

export const {setItems,setStatus,setKhaltiUrl,setMyOrders} = orderSlice.actions
export default orderSlice.reducer 


export function orderItem(data:OrderData){
    return async function orderItemThunk(dispatch : AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.post('/order',data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setItems(response.data.data))
                if(response.data.url){
                    dispatch(setKhaltiUrl(response.data.url))
                }else{
                    dispatch(setKhaltiUrl(null))
                }
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}



export function fetchMyOrders(){
    return async function fetchMyOrdersThunk(dispatch : AppDispatch){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await APIAuthenticated.get('/order/customer')
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setMyOrders(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}