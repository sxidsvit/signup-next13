import React from 'react'
import SignUpForm from '@/components/SignUpForm'
import { config } from 'dotenv'
config()

const SignUpBusiness = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold my-8">Sign Up</h1>
      <h3 className="text-xl  my-8 text-brand-darkblue-light">
        Create your business account
      </h3>
      <SignUpForm formtype="business" />
    </main>
  )
}

export default SignUpBusiness
