import { Product } from "./productTypes";
import { Status } from "./types";

export interface CartItem{
    product : Product,
    quantity : number
}

export interface CartState{
    items : CartItem[];
    status : Status
}