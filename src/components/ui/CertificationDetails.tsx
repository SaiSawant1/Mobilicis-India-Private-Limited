"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { useParams } from "next/navigation";
import axios from "axios";
import AddCertificationModal from "../modal/add-certification-modal";
import Link from "next/link";
import useOrigin from "@/hooks/use-origin";
import UpdateCertificationModal from "../modal/update-certification-modal";


function CertificationDetails() {
  const [certifications, setCertifications] = React.useState<
    { userId: string; name: string; _id: string; grantedBy: string }[]
  >([]);

  const [selectedCertification, setSelectedCertification] = React.useState<{
    userId: string; name: string; _id: string; grantedBy: string
  }>({
    userId: "",
    name: "",
    _id: "",
    grantedBy: "",
  });

  const [updateOpen,setUpdateOpen]=React.useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const origin =useOrigin();
  
  const params = useParams();

  const getCertifications = async () => {
    const { data } = await axios.get(`/api/user/${params.id}/certifications`);
    setCertifications(data.certifications);
   
  };

  const onClickAdd = () => {
    setIsOpen(true);
  };

  const handleUpdate = (certification:any) => {
    setSelectedCertification(certification)
    setUpdateOpen(true)
  }

  React.useEffect(() => {
    getCertifications();
  }, [params.id]);

  return (
    <>
      <UpdateCertificationModal isOpen={updateOpen} onClose={() => setUpdateOpen(false)} initialValues={selectedCertification} />
      <AddCertificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex flex-col w-full gap-3 ">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Certification</h3>

          <Button
            onClick={onClickAdd}
            className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7"
          >
            Add
          </Button>
        </div>
        <div className="flex gap-2 flex-col">
          {certifications.map((certification) => (
              <div
                onClick={()=>handleUpdate(certification)}
                key={certification._id}
                className="border-[1px] cursor-pointer flex border-gray-300 rounded-3xl w-full"
              >
                <Image
                  className="mx-6 my-6"
                  alt="starts"
                  height={23}
                  width={24}
                  src="/Vector.png"
                />
                <div className="flex w-full gap-2 justify-center items-center flex-col">
                  <h4 className="text-lg text-gray-500">
                    {certification.name}
                  </h4>
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
