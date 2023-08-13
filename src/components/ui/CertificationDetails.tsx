"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { useParams } from "next/navigation";
import axios from "axios";
import AddCertificationModal from "../modal/add-certification-modal";

function CertificationDetails() {
  const [certifications, setCertifications] = React.useState<
    { userId: string; name: string; _id: string; grantedBy: string }[]
  >([]);

  const [isOpen, setIsOpen] = React.useState(false);


  const params = useParams();

  const getCertifications = async () => {
    const { data } = await axios.get(`/api/user/${params.id}/certifications`);
    setCertifications(data.certifications);
  };

  const onClickAdd = () => {
    setIsOpen(true);
  }

  React.useEffect(() => {
    getCertifications();
  },[params.id]);

  return (
    <>
      <AddCertificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex flex-col w-full gap-3 ">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Certification</h3>
          {certifications.length > 0 ? (
            <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
              Edit
            </Button>
          ) : (
            <Button onClick={onClickAdd} className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
              Add
            </Button>
          )}
        </div>
        <div className="flex gap-2 flex-col">
          {certifications.map((certification) => (
            <div
              key={certification._id}
              className="border-[1px] flex border-gray-300 rounded-3xl w-full"
            >
              <Image
                className="mx-6 my-6"
                alt="starts"
                height={23}
                width={24}
                src="/Vector.png"
              />
              <div className="flex w-full gap-2 justify-center items-center flex-col">
                <h4 className="text-lg text-gray-500">{certification.name}</h4>
                <p className="text-base text-gray-400">
                  {certification.grantedBy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CertificationDetails;
