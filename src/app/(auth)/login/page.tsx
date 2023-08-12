import LoginForm from '@/components/LoginForm'
import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <div className="h-screen bg-black text-white w-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-3xl my-3">Login</h1>
        <p className="text-gray-500">Welcome back, please enter your details</p>
      </div>
      <LoginForm/>
      <p>New user ? <Link className='text-blue-500' href="/signup">Sign Up </Link> to register </p>
    </div>
  )
}

export default LoginPage