'use client'
import React from 'react'
import { userStore } from "@/hooks/user-store"
function page() {
  const {user}=userStore()
  console.log(user)
  return (
    <div className=' min-h-screen bg-white'>pages</div>
  )
}

export default page