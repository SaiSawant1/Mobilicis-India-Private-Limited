"use client";
import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";

function Following() {
  const user = useSelector((state: RootState) => state.user);
  const [followers, setFollowers] = React.useState([]);

  

  React.useEffect(() => {
    const getAllOthers = async () => {
      const res = await axios.get(`/api/following/${user._id}`);
      setFollowers(res.data);
    };
    getAllOthers();
  }, [user._id]);

  return (<div className="w-full flex m-4 gap-9 flex-wrap">
    {followers.map((user:any)=>(
            <ProfileDisplay key={user._id} user={user} isFollowing={true} />
        ))}
  </div>)
}

export default Following;
