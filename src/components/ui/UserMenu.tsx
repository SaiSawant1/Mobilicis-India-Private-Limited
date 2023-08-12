'use client'
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ChevronDown } from "lucide-react";

function UserMenu() {

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  },[])

  if(!isMounted) return null


  return (
    <Popover>
      <PopoverTrigger>
        <Button className="flex gap-x-2 rounded-xl px-3 py-8" variant={"outline"} size="lg">
          <Avatar className="rounded-xl h-10 w-10">
            <AvatarImage  src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm text-blue-900">Welcome back,</span>
            <span className="text-lg font-semibold text-blue-950">Sai Sawant</span>
          </div>
          <ChevronDown className="text-blue-900 ml-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-white rounded-2xl">
        <div className="p-2 hover:bg-gray-300 my-2 border-b-2 rounded-xl">
            Complete Your profile Profile
        </div>
        <div className="p-2 text-red-800 hover:bg-gray-300 my-2 border-b-2 rounded-xl">
            Log out
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserMenu;
