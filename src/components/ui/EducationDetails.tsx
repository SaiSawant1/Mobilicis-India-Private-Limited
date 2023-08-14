import React from "react";
import { Button } from "./button";
import { useParams } from "next/navigation";
import axios from "axios";
import AddEducationModal from "../modal/add-education-modal";

function EducationDetails() {
  const [isOpen, setIsOpen] = React.useState(false);

  const [colleges, setColleges] = React.useState<
    {
      _id: string;
      userId: string;
      college: string;
      degree: string;
      startYear: string;
      endYear: string;
      description: string;
    }[]
  >([]);

  const params = useParams();

  const getColleges = async () => {
    const { data } = await axios.get(`/api/user/${params.id}/education`);
    setColleges(data.education);
  };

  React.useEffect(() => {
    getColleges();
  }, [params.id]);

  return (
    <>
      <AddEducationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="flex flex-col w-full gap-3 ">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">Education</h3>

          <Button
            onClick={() => setIsOpen(true)}
            className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7"
          >
            Add
          </Button>
        </div>
        <div className="flex gap-2 flex-col">
          { colleges?.map((college) => (
            <div
              key={college._id}
              className="border-[1px] py-3 px-3 flex-col flex border-gray-300 rounded-3xl w-full"
            >
              <h3 className="font-bold my-2 text-blue-900">
                {college.college}
              </h3>
              <div className="flex my-2 px-6 font-semibold text-gray-900 w-full justify-between items-center">
                <p>
                  ({college.startYear}-{college.endYear})
                </p>
                <p>{college.degree}</p>
              </div>
              <p className="text-gray-600">{college.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EducationDetails;
