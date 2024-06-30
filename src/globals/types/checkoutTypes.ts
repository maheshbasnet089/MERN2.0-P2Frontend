import { Status } from "./types"

export enum PaymentMethod{
    COD = 'cod',
    Khalti = 'khalti'
}

export interface ItemDetails{
    productId : string, 
    quantity : number
}

export interface OrderResponseItem extends ItemDetails{
    orderId : string
}

export interface OrderData{
    phoneNumber : string, 
    shippingAddress : string, 
    totalAmount : number, 
    paymentDetails : {
        paymentMethod : PaymentMethod
    },
    items : ItemDetails[]
}

export interface OrderResponseData{
   items : OrderResponseItem[],
   status : Status, 
   khaltiUrl : string | null
   
}