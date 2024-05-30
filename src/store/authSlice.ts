import {createSlice,PayloadAction} from '@reduxjs/toolkit' 
import API from '../http'
import { Status } from '../globals/types/types'

interface RegisterData{
    username : string,
    email : string, 
    password : string
}
interface LoginData{
    email : string, 
    password : string
}

interface User{
    username : string, 
    email : string, 
    password : string, 
    token : string
}

interface AuthState{
    user : User,
    status : Status
}

const initialState:AuthState = {
    user : {} as User,
    status : Status.LOADING
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setUser(state:AuthState,action:PayloadAction<User>){
            state.user = action.payload
        },
        setStatus(state:AuthState,action:PayloadAction<Status>){
            state.status = action.payload
        },
        resetStatus(state:AuthState){
            state.status = Status.LOADING
        },
        setToken(state:AuthState,action:PayloadAction<string>){
            state.user.token = action.payload
        }
    }
})

 export const {setUser,setStatus,resetStatus,setToken} = authSlice.actions 
 export default authSlice.reducer

export function register(data:RegisterData){
    return async function registerThunk(dispatch:any){
        dispatch(setStatus(Status.LOADING))
       try {
        const response = await API.post('register',data)
        if(response.status === 200){
            dispatch(setStatus(Status.SUCCESS))
        }else{
            dispatch(setStatus(Status.ERROR))
        }
       } catch (error) {
        dispatch(setStatus(Status.ERROR))
       }
    }
}

export function login(data:LoginData){
    return async function loginThunk(dispatch:any){
        dispatch(setStatus(Status.LOADING))
        try {
            const response = await API.post('login',data)
            if(response.status === 200){
                const {data} = response.data
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setToken(data))
                localStorage.setItem('token',data)
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(Status.ERROR))
        }
    }
}


