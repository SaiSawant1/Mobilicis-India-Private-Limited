'use client'
import React from 'react'
import { Button } from './button'
import useOrigin from '@/hooks/use-origin';
import { useParams,useRouter } from 'next/navigation';



function ProfileInfo({name,email,contact}:{name:string,email:string,contact:string}) {


  const origin =useOrigin();
  const {id}=useParams()
  const router=useRouter();
  const handleClick=()=>{
    router.push(`${origin}/user/${id}/profile/update`);
}

  return (
    <div className="flex w-full border-[2px] rounded-xl gap-x-5 border-gray-200 px-4 py-5 flex-col">
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Your name</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{name}</span>
                <Button onClick={handleClick} className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Your Email</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{email}</span>
                <Button onClick={handleClick} className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Phone Number</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">+91 {contact}</span>
                <Button onClick={handleClick} className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
          </div>
  )
}

export default ProfileInfo