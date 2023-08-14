'use client'
import React from "react";
import { ChevronRight } from "lucide-react";
import { useRouter,usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from "@/store";
import useOrigin from "@/hooks/use-origin";


function MainNav() {

  const user=useSelector((state:RootState)=>state.user)

  const origin=useOrigin()
  
  const path=usePathname()
  const router =useRouter()
  
  const handleClickProfile = () => {
    console.log(user)
    router.push(origin+`/user/${user.id}/profile`)

  }
  const handleClickConnections = () => {
    router.push(origin+`/user/${user.id}/connections`)
  }

  return (
    <div className="w-full h-full ">
      <div className="w-full px-6 ">
        <div onClick={handleClickProfile} className="cursor-pointer flex items-center my-4 gap-2">
          <ChevronRight className="text-gray-400" />
          <h2 className={cn("text-blue-950 w-full text-xl px-6 py-3 border-2 rounded-xl",path.includes('/profile')?'border-blue-950':'border-white')}>
            My Profile
          </h2>
        </div>
        <div onClick={handleClickConnections}  className="cursor-pointer flex items-center gap-3">
          <ChevronRight className="text-gray-400" />
          <h2 className={cn("text-blue-950 w-full text-xl px-6 py-3 border-2  rounded-xl",path.includes('/connections')?'border-blue-950':'border-white')}>
            Connections
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
