"use client";
import useOrigin from "@/hooks/use-origin";
import { RootState } from "@/store";
import { MenuIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const origin = useOrigin();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickProfile = () => {
    router.push(origin + `/user/${user._id}/profile`);
  };
  const handleClickConnections = () => {
    router.push(origin + `/user/${user._id}/connections`);
  };

  return (
    <>
    {
      isOpen ?
      (
          <X onClick={handleMenu} className="z-30 sm:hidden  text-blue-900" />
      )
      :
      (
          <MenuIcon onClick={handleMenu} className="z-30 sm:hidden text-blue-900" />

      )  
    }

      {isOpen && (
        <>
          <div className="z-10 absolute bg-black/60 inset-0"></div>
          <div className="z-20 py-16 absolute inset-y-0 left-0 right-1/2 bg-white">
            <div
              onClick={handleClickProfile}
              className="flex m-6 justify-center items-center"
            >
              Profile
            </div>
            <div
              onClick={handleClickConnections}
              className="flex m-6  justify-center items-center"
            >
              Connections
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Menu;
