import React from 'react'
import SignUpForm from '@/components/SignUpForm'
import { config } from 'dotenv'
config()

const SignUpOrdinar = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold my-8">Sign Up</h1>
      <h3 className="text-xl  my-8">Create your account</h3>
      <SignUpForm formtype="ordinary" />
    </main>
  )
}

export default SignUpOrdinar
