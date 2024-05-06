import {createSlice,PayloadAction} from '@reduxjs/toolkit' 

interface Blog{
    title : string, 
    subtitle : string, 
    description : string, 
    
}

interface BlogState{
    blog : Blog,
    status : string
}

const initialState:BlogState = {
    blog : {} as Blog,
    status : "loading"
}

const blogSlice = createSlice({
    name : 'blog',
    initialState,
    reducers : {
        setUser(state:BlogState,action:PayloadAction<Blog>){
            state.blog = action.payload
        },
        setStatus(state:BlogState,action:PayloadAction<string>){
            state.status = action.payload
        }
    }
})

 export const {setUser,setStatus} = blogSlice.actions 
 export default blogSlice.reducer
