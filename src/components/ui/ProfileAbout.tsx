import React from "react";
import { Button } from "./button";

function ProfileAbout() {
  return (
    <div className="flex w-full border-[2px] rounded-xl gap-x-5 border-gray-200 px-4 py-5 flex-col">
      <div className="flex justify-between my-3 items-center">
        <h3 className="text-xl font-bold text-gray-600">
          About <span>Sai</span>
        </h3>
        <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Edit
        </Button>
      </div>
      <div className="break-words">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatem
        vel nostrum maxime deleniti ducimus rem, ea saepe exercitationem
        dignissimos?
      </div>
    </div>
  );
}

export default ProfileAbout;
