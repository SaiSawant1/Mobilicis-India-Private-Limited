'use client'

import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";

function Others() {

    const user=useSelector((state:RootState)=>state.user)
    const [others, setOthers]=React.useState([])
    const getAllOthers=async()=>{

        const res=await axios.get(`/api/others/${user._id}`)
        setOthers(res.data)
    }

    React.useEffect(()=>{
        getAllOthers()
    },[])

  return (
    <div>
      <h3 className="text-2xl m-4">People You can also connect</h3>
      <div className="w-full flex m-4 gap-9 flex-wrap">
        {others.map((user:any)=>(
            <ProfileDisplay user={user} isFollowing={false} />
        ))}
      </div>
    </div>
  );
}

export default Others;
