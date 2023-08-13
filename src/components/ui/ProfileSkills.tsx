"use client";
import React from "react";
import { Button } from "./button";
import { useParams } from "next/navigation";
import axios from "axios";
import AddSkillModal from "../modal/add-skill-modal";

function ProfileSkills() {
  const params = useParams();
  const [skills, setSkills] = React.useState<
    { userId: string; name: string; _id: string }[]
  >([]);

  const [isOpen, setIsOpen] = React.useState(false);

  const getSkills = async () => {
    const { data } = await axios.get(`/api/user/${params.id}/skills`);
    setSkills(data.skills);
  };

  React.useEffect(() => {
    getSkills();
    console.log(skills)
  }, [params.id]);

  return (
    <>
    <AddSkillModal id={params.id} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex w-full border-[2px] rounded-xl gap-x-5 border-gray-200 px-4 py-5 flex-col">
        <div className="flex justify-between my-3 items-center">
          <h3 className="text-xl font-bold text-gray-600">Skills</h3>

          {skills.length < 1 ? (
            <Button onClick={() => setIsOpen(true)} className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
              Add
            </Button>
          ) : (
            <Button  className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">
              Edit
            </Button>
          )}
        </div>
        <div className="grid grid-rows-4  gap-2">
          {skills.map((skill) => {
            return <div key={skill._id}>{skill.name}</div>;
          })}
        </div>
      </div>
    </>
  );
}

export default ProfileSkills;
