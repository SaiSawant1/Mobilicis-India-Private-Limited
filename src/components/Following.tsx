"use client";
import React from "react";
import ProfileDisplay from "./ProfileDisplay";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import axios from "axios";

function Following() {
  const user = useSelector((state: RootState) => state.user);
  const [followers, setFollowers] = React.useState([]);

  const getAllOthers = async () => {
    const res = await axios.get(`/api/following/${user._id}`);
    setFollowers(res.data);
  };

  React.useEffect(() => {
    getAllOthers();
  }, []);

  return (<div className="w-full flex m-4 gap-9 flex-wrap">
    {followers.map((user:any)=>(
            <ProfileDisplay user={user} isFollowing={true} />
        ))}
  </div>)
}

export default Following;
