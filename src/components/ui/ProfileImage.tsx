import React from "react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

function ProfileImage() {
  return (
    <div className=" flex w-full justify-between items-center">
      <Avatar className=" h-[89px] w-[89px]">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Button className=" bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
        Upload Photo
      </Button>
    </div>
  );
}

export default ProfileImage;
