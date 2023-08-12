import React from "react";
import { Button } from "./button";

function ProfileSkills() {
  return (
    <div className="flex w-full border-[2px] rounded-xl gap-x-5 border-gray-200 px-4 py-5 flex-col">
      <div className="flex justify-between my-3 items-center">
        <h3 className="text-xl font-bold text-gray-600">Skills</h3>
        <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Edit
        </Button>
      </div>
      <div className="grid grid-rows-4  gap-2">
        <div className="text-xl">React</div>
        <div className="text-xl">Type Script</div>
      </div>
    </div>
  );
}

export default ProfileSkills;
