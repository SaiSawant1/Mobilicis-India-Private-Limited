import React from "react";
import { Button } from "./button";

function EducationDetails() {
  return (
    <div className="flex flex-col w-full gap-3 ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-700">Education</h3>
        <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Edit
        </Button>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="border-[1px] py-3 px-3 flex-col flex border-gray-300 rounded-3xl w-full">
          <h3 className="font-bold my-2 text-blue-900">IIT HYDERABAD</h3>
          <div className="flex my-2 px-6 font-semibold text-gray-900 w-full justify-between items-center">
            <p>(2014-2021)</p>
            <p>Btech</p>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            eum dolores odio hic atque ab temporibus, illo harum est ratione
            laudantium, perferendis pariatur cum cupiditate.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;
