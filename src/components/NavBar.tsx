import { Bell} from 'lucide-react'
import React from 'react'
import Menu from './Menu'
import UserMenu from './ui/UserMenu'

function NavBar() {
  return (
    <div className='w-full border-b-[1px] border-gray-400 h-[88px] py-4 flex justify-between sm:justify-end items-center px-12  bg-white'>
        <Menu/>
        <div className='flex justify-center items-center sm:gap-2'>
            <Bell className='text-blue-900' />
            <UserMenu/>
        </div>
    </div>
  )
}

export default NavBar