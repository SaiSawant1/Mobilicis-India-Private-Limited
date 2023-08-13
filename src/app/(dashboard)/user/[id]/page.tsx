"use client";
import React from "react";
import { userStore } from "@/hooks/user-store";
import CreateUserForm from "@/components/CreateUserForm";
function page() {
  const { user } = userStore();
  console.log(user);
  return (
    <div className=" min-h-screen bg-white">
      <div className="container p-5 flex-col flex justify-center items-center">
        <div>
          <h1 className="text-4xl text-center">Info Form</h1>
          <p className="p-2 text-base">Please Enter your Details</p>
        </div>
        <CreateUserForm/>
      </div>
    </div>
  );
}

export default page;
