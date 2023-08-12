import React from 'react'
import { Button } from './button'

function ProfileInfo() {
  return (
    <div className="flex w-full border-[2px] rounded-xl gap-x-5 border-gray-200 px-4 py-5 flex-col">
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Your name</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Sai Sawant</span>
                <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Your Email</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">saisawant2003@gmail.com</span>
                <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-xs text-gray-600">Phone Number</h3>
              <div className="flex justify-between items-center">
                <span className="font-semibold">+91 8780081627</span>
                <Button className="bg-[#F0EFFA] hover:bg-slate-400 rounded-2xl px-7">Edit</Button>
              </div>
            </div>
          </div>
  )
}

export default ProfileInfo