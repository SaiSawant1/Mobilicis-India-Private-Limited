import Following from "@/components/Following";
import Others from "@/components/Others";
import ProfileDisplay from "@/components/ProfileDisplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

function page() {
  return (
    <div className="bg-[#FAFBFF] pt-5 min-h-screen sm:pl-4 sm:pr-12 border-[2px] border-gray-50 flex-grow ">
      <div className="text-white text-3xl p-3 h-32 bg-[#1E2875] rounded-xl">
        My Profile
      </div>
      <Following/>
      <Others/>
    </div>
  );
}

export default page;
