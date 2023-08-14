import React from 'react'
import MainNav from './MainNav'

function SidePanel() {
  return (
    <div className=' hidden sm:flex w-1/5  flex-col bg-white shadow-2xl border-gray-200 border-r-[1px] '>
        <div>
            <h1 className='text-2xl w-[183px] my-7 ml-12 border-gray-400 px-8 py-2 text-black border-2 rounded-xl '>Dashboard</h1>
        </div>
        <MainNav/>
        <div className='text-center py-5 text-xl font-semibold'>
            Log Out
        </div>
    </div>
  )
}

export default SidePanel