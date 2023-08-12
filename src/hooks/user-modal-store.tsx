import {create} from "zustand"

interface userModalStoreProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void
}

export const userModalStore=create<userModalStoreProps>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))