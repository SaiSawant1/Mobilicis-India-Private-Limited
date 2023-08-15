'use client';

import { useRouter } from 'next/navigation';
import React from 'react'

function Custom404() {

  const router=useRouter()
      
  router.push("/login") 
  

  return (
    <div>Custom404</div>
  )
}

export default Custom404