import Image from "next/image";
import React from "react";
import { Button } from "./button";

function ExperienceDetails() {
  return (
    <div className="flex flex-col w-full gap-3 ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-500">Experience</h3>
        <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Edit
        </Button>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="border-[1px] py-3 flex-row flex border-gray-300 rounded-3xl w-full">
          <div className="flex w-full mx-4 flex-col">
            <div className="flex justify-between  font-semibold items-center w-full">
              <h4>7 Years (2014-2021)</h4>
              <p className="px-3">Full Time</p>
            </div>
            <div className="flex text-gray-400 justify-between items-center w-full">
              <p>Orusphones</p>
              <p>--Full Stack Developer</p>
            </div>
          </div>
          <Image
            alt="company"
            src="/image13.png"
            height={23}
            width={47}
            className="mx-2"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
