import Image from "next/image";
import React from "react";
import { Button } from "./button";

function CertificationDetails() {
  return (
    <div className="flex flex-col w-full gap-3 ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-gray-500">Certification</h3>
        <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
          Edit
        </Button>
      </div>
      <div className="flex gap-2 flex-col">
        <div className="border-[1px] flex border-gray-300 rounded-3xl w-full">
          <Image
            className="mx-6 my-6"
            alt="starts"
            height={23}
            width={24}
            src="/Vector.png"
          />
          <div className="flex w-full gap-2 justify-center items-center flex-col">
            <h4 className="text-lg text-gray-500">Python</h4>
            <p className="text-base text-gray-400">Coding Ninja</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificationDetails;
