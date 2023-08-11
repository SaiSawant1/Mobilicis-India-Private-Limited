import LoginForm from '@/components/LoginForm'
import React from 'react'

function LoginPage() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <h1 className="text-center text-3xl my-3">Login</h1>
        <p className="text-gray-500">Welcome back, please enter your details</p>
      </div>
      <LoginForm/>
    </div>
  )
}

export default LoginPage