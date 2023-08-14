"use client";
import React from "react";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import UpdateProfile from "../modal/update-profile";
import { useParams, useRouter } from "next/navigation";
import useOrigin from "@/hooks/use-origin";
function ProfileImage({ image }: { image: string }) {
  const [isOpen,setOpen]=React.useState(false);
  const origin =useOrigin();
  const {id}=useParams()
  const router=useRouter();
  const handleClick=()=>{
      router.push(`${origin}/user/${id}/profile/update`);
  }

  return (
    <>
    <UpdateProfile initialData={image} isOpen={isOpen} onClose={()=>setOpen(false)} />
      <div className=" flex w-full justify-between items-center">
        <Avatar className=" h-[89px] w-[89px]">
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button onClick={handleClick} className=" bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Upload Photo
        </Button>
      </div>
    </>
  );
}

export default ProfileImage;
