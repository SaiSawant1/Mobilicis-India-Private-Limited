'use client'

import React from 'react'
import MainNav from './MainNav'
import axios from 'axios'

import { useRouter } from 'next/navigation'

function SidePanel() {

  const router=useRouter()

  const logout=async()=>{
    await axios.delete('/api/auth/logout')
    router.push('/login')
  }

  return (
    <div className=' hidden sm:flex w-1/5  flex-col bg-white shadow-2xl border-gray-200 border-r-[1px] '>
        <div>
            <h1 className='text-2xl w-[183px] my-7 ml-12 border-gray-400 px-8 py-2 text-black border-2 rounded-xl '>Dashboard</h1>
        </div>
        <MainNav/>
        <div onClick={logout} className='text-center cursor-pointer py-5 text-xl font-semibold'>
            Log Out
        </div>
    </div>
  )
}

export default SidePanel