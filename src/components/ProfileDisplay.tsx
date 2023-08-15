'use client'
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import axios from "axios";
import { Button } from "./ui/button";
import { useParams } from "next/navigation";

interface ProfileDisplayProps {
    user: any;
    isFollowing: boolean;
}

function ProfileDisplay( {user, isFollowing}: ProfileDisplayProps) {

  const [experience, setExperience]=React.useState<any>({})
  const getExperience=async()=>{
    const {data}=await axios.get(`/api/user/${user._id}/experiences`)
    setExperience(data.experiences)
  }

  const params=useParams();
  const {id}=params 

  const follow=async()=>{

    const payload={
      currentUser:id,
      connectionId:user._id
    }
     await axios.post("/api/connections",payload)
     window.location.reload()
  }


  const unFollow=async()=>{


    try {
      const payload={
        currentUser:id,
        connectionId:user._id
      }
  
       await axios.patch("/api/connections",payload)
       window.location.reload()
    } catch (error) {
      console.log(error);
    }

    
  }


  React.useEffect(()=>{
    getExperience()
  },[])


  return (
    <div className="border-[1px]   p-3 rounded-xl border-gray-400 ">
      <div className="flex gap-3">
        <div className="flex flex-col">
          <h5 className="font-semibold my-2">{user.name}</h5>
          <p className="text-sm text-gray-400">{experience?.designation}</p>
          <p className="text-sm text-gray-400">@ {experience?.employer}</p>
        </div>
        <div>
          <Avatar className=" flex  items-start min-h-[88px] min-w-[88px] justify-center ">
            <AvatarImage src={user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className=" mt-4 w-fit py-1 px-2 rounded-xl bg-[#BAB6EB]">
        {isFollowing? <Button onClick={unFollow}>Remove Connection</Button>: <Button onClick={follow} > Connect </Button> }
      </div>
    </div>
  );
}

export default ProfileDisplay;
