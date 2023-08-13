import {create} from "zustand"


interface User{
    id:string,
    name:string,
    email:string,
    about:string,
    contact:number,
    image:string,
}

interface UserStoreProps{
    user:User,
    setUser:(user:User)=>void
}

export const userStore = create<UserStoreProps>((set)=>({
    user:{
        id:'',
        name:'',
        email:'',
        about:'',
        contact:0,
        image:'',
    },
    setUser(user) {
        set({user})
    },
}))
