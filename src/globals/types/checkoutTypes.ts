import { Status } from "./types"

export enum PaymentMethod{
    COD = 'cod',
    Khalti = 'khalti'
}

enum OrderStatus{
    Pending = 'pending',
    Delivered = 'delivered',
    Ontheway = 'ontheway',
    Cancel = 'cancelled',
    Preparation = 'preparation'
}

export interface ItemDetails{
    productId : string, 
    quantity : number
}

export interface OrderResponseItem extends ItemDetails{
    orderId : string
}

enum PaymentStatus{
    Paid = 'paid',
    Unpaid = 'unpaid',
    Pending = 'pending'

}

interface Payment{
    paymentMethod : PaymentMethod
}

interface OrderPaymentData extends Payment{
    paymentStatus : PaymentStatus
}

export interface OrderData{
    phoneNumber : string, 
    shippingAddress : string, 
    totalAmount : number, 
    paymentDetails : Payment,
    items : ItemDetails[]
}

export interface OrderResponseData{
   items : OrderResponseItem[],
   status : Status, 
   khaltiUrl : string | null,
   myOrders : MyOrdersData[] 
   
}

export interface MyOrdersData{
    id: string,
    phoneNumber: string,
    shippingAddress: string,
    totalAmount: number,
    orderStatus: OrderStatus,
    createdAt: string,
    paymentId: string,
    userId: string,
    Payment : OrderPaymentData
}