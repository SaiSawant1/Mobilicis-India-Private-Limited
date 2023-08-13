import {create} from "zustand"


interface User{
    _id:string,
    id:string,
    name:string,
    email:string,
    about:string,
    contact:string,
    image:string,
}

interface UserStoreProps{
    user:User,
    setUser:(user:User)=>void
}

export const userStore = create<UserStoreProps>((set)=>({
    user:{
        _id:'',
        id:'',
        name:'',
        email:'',
        about:'',
        contact:"",
        image:'',
    },
    setUser(user) {
        set({user})
    },
}))
