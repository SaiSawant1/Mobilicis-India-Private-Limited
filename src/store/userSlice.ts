import {createSlice} from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"

export interface user{
    _id:string,
    name:string,
    email:string,
    contact:string,
    about:string,
    image:string
}

const initialState:user={
    _id:"",
    name:"",
    email:"",
    contact:"",
    about:"",
    image:"",

}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<user>)=>{
            console.log(action.payload)
            return state=action.payload
        },
        getUser:(state)=>{
            return state
        }
    }
})

export const {setUser,getUser}=userSlice.actions
export default userSlice.reducer