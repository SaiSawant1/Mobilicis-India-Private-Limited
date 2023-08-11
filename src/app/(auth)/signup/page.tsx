import SignUpForm from "@/components/SignUpForm";
import React from "react";

function SignUpPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-3xl my-3">Sign Up</h1>
        <p className="text-gray-500">Please Enter Your details to register</p>
      </div>
      <SignUpForm/>
    </div>
  );
}

export default SignUpPage;
