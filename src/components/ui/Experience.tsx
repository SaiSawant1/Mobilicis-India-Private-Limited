"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { useParams } from "next/navigation";
import axios from "axios";
import AddExperienceModal from "../modal/add-experience-modal";

function ExperienceDetails() {
  const params = useParams();
  const [isOpen,setOpen]=React.useState(false);
  const [experiences, setExperiences] = React.useState<
    {
      _id: string;
      userId: string;
      duration: string;
      startDateEndDate: string;
      designation: string;
      role: string;
      employer: string;
    }[]
  >([]);

  const getExperiences = async () => {
    try {
      const { data } = await axios.get(`/api/user/${params.id}/experiences`);
      setExperiences(data.experiences);
      console.log(experiences);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(()=>{
    getExperiences();
  },[params.id]);


  const onClickAdd = () => {
    setOpen(true);
  }


  return (
    <>
    <AddExperienceModal isOpen={isOpen} onClose={() => setOpen(false)} />
      <div className="flex flex-col w-full gap-3 ">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Experience</h3>
          {experiences.length > 0 ? (
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
          {experiences.map((experience) => (
            <div className="border-[1px] py-3 flex-row flex border-gray-300 rounded-3xl w-full">
              <div className="flex w-full mx-4 flex-col">
                <div className="flex justify-between  font-semibold items-center w-full">
                  <h4>
                    {experience.duration} ({experience.startDateEndDate})
                  </h4>
                  <p className="px-3">{experience.role}</p>
                </div>
                <div className="flex text-gray-400 justify-between items-center w-full">
                  <p>{experience.employer}</p>
                  <p>--{experience.designation}</p>
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
          ))}
        </div>
      </div>
    </>
  );
}

export default ExperienceDetails;
