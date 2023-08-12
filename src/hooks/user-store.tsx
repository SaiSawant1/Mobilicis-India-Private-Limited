import {create} from "zustand"


interface User{
    id:string,
    name:string,
    email:string,
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
    },
    setUser(user) {
        set({user})
    },
}))
