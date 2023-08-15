"use client";
import React from "react";
import UpdateUserForm from "@/components/UpadeUserProfile";
import { useParams } from "next/navigation";
import axios from "axios";

function UpdatePage() {
  const [user, setUser] = React.useState<any>({});

  const params = useParams();

  

  React.useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(`/api/user/${params.id}`);
      setUser(data.user);
    };
    getUser();
  }, [params.id]);

  return (
    <div className=" min-h-screen bg-white">
      <div className="container p-5 flex-col flex justify-center items-center">
        <div>
          <h1 className="text-4xl text-center">Update Info Form</h1>
          <p className="p-2 text-base">Please Enter your Details</p>
        </div>
        <UpdateUserForm user={user} />
      </div>
    </div>
  );
}

export default UpdatePage;
