import { Bell } from 'lucide-react'
import React from 'react'
import UserMenu from './ui/UserMenu'

function NavBar() {
  return (
    <div className='w-full h-[88px] py-4 flex justify-end items-center px-12  bg-white'>
        <div className='flex justify-center items-center gap-2'>
            <Bell className='text-blue-900' />
            <UserMenu/>
        </div>
    </div>
  )
}

export default NavBar