'use client'
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ChevronDown } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";

function UserMenu() {

  const [isMounted, setIsMounted] = React.useState(false);
  const router=useRouter()
  const logout=async()=>{
    await axios.delete('/api/auth/logout')
    router.push('/login')
  }

  React.useEffect(() => {
    setIsMounted(true);
  },[])
  const user=useSelector((state:RootState)=>state.user)
  if(!isMounted) return null
  

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="sm:flex border-0 sm:gap-x-2 sm:border-[1px] sm: sm:rounded-xl sm:px-3 sm:py-8" variant={"outline"} size="lg">
          <Avatar className="rounded-xl h-10 w-10">
            <AvatarImage  src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className=" hidden sm:flex flex-col">
            <span className="text-sm text-blue-900">Welcome back,</span>
            <span className="text-lg font-semibold text-blue-950">Sai Sawant</span>
          </div>
          <ChevronDown className="hidden sm:block text-blue-900 ml-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white rounded-2xl">
        <div onClick={logout} className="p-2 text-red-800 hover:bg-gray-300 my-2 border-b-2 rounded-xl">
            Log out
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserMenu;
