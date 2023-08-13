"use client";
import CertificationDetails from "@/components/ui/CertificationDetails";
import EducationDetails from "@/components/ui/EducationDetails";
import ExperienceDetails from "@/components/ui/Experience";
import ProfileAbout from "@/components/ui/ProfileAbout";
import ProfileImage from "@/components/ui/ProfileImage";
import ProfileInfo from "@/components/ui/ProfileInfo";
import ProfileSkills from "@/components/ui/ProfileSkills";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

interface CurrentUserInterface{
  image:string,
  name:string,
  email:string,
  contact:string,
  about:string
}


function ProfilePage() {
  const [currentUser, setCurrentUser] = React.useState<CurrentUserInterface>({image:"",about:"",name:"",email:"",contact:""});
  const params = useParams();

  const getUser = async () => {
    const { data } = await axios.get(`/api/user/${params.id}`);
    const { user } = data;
    setCurrentUser(user);
  };

  React.useEffect(() => {
    getUser();
  }, [params.id]);

  return (
    <div className="bg-[#FAFBFF] pt-5 pr-12 border-[2px] border-gray-50 flex-grow ">
      <div className="text-white p-3 h-40 bg-[#1E2875] rounded-xl">
        My Profile
      </div>
      <div className="mx-9 p-7 flex items-start  bg-white gap-x-28  -mt-16 rounded-2xl shadow-2xl ">
        <div className="flex flex-col gap-y-9 justify-between max-w-[50%] items-center flex-grow ">
          <ProfileImage image={currentUser.image} />
          <ProfileInfo contact={currentUser.contact} email={currentUser.email} name={currentUser.name}/>
          <ProfileAbout about={currentUser.about} name={currentUser.name}/>
          <ProfileSkills />
        </div>
        <div className="flex flex-col gap-y-9 justify-between max-w-[50%] items-center flex-grow-[2]">
          <div className="flex w-full justify-between items-center border-[2px] rounded-xl  border-gray-200 px-4 py-5 flex-row">
            <div className="flex flex-col justify-start items-start">
              <h3 className="font-semibold">Professional Details</h3>
              <p>
                This are the professional details shown to users in the app.
              </p>
            </div>
            <Image alt="starts" height={80} width={80} src="/Stars.png" />
          </div>
          <CertificationDetails />
          <ExperienceDetails />
          <EducationDetails />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
