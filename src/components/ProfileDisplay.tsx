'use client'
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ProfileDisplayProps {
    user: any;
    isFollowing: boolean;
}

function ProfileDisplay( {user, isFollowing}: ProfileDisplayProps) {
  return (
    <div className="border-[1px]  p-3 rounded-xl border-gray-400 ">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <h5 className="font-semibold my-2">{user.name}</h5>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
          <p className="text-sm text-gray-400">@ Oruphones</p>
        </div>
        <div>
          <Avatar className=" flex  items-start min-h-[88px] min-w-[88px] justify-center ">
            <AvatarImage src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className=" mt-4 w-fit py-1 px-2 rounded-xl bg-[#BAB6EB]">
        {isFollowing? "Remove connection": "Follow" }
      </div>
    </div>
  );
}

export default ProfileDisplay;
