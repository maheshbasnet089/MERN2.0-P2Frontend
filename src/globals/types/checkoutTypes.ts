
export enum PaymentMethod{
    COD = 'cod',
    Khalti = 'khalti'
}

export interface ItemDetails{
    productId : string, 
    quantity : number
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