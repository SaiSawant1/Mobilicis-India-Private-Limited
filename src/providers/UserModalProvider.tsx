'use client'
import UserModal from '@/components/modal/user-modal'
import React from 'react'

function UserModalProvider() {

  const [isMounted,setMOunted]=React.useState(false)

  React.useEffect(()=>{
    setMOunted(true)
  },[])

  if(!isMounted) return null


  return (
    <>
    <UserModal/>
    </>
  )
}

export default UserModalProvider