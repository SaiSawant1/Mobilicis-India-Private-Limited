"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  children: ReactNode
  title:string,
  description:string
  isOpen:boolean
  onClose:()=>void
}

function Modal({children,description,title,isOpen,onClose}: ModalProps) {
    
    const onChange=(open:boolean)=>{
        if(!open){
            onClose()
        }
    }
  
    return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
