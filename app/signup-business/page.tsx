import React from 'react'
import SignUpForm from '@/components/SignUpForm'
import { config } from 'dotenv'
config()

const SignUpBusiness = () => {
  return (
    <main className="w-[400px]">
      <h1 className="text-[26px] leading-[26px] font-bold text-black mb-[11px]">
        Sign Up
      </h1>
      <h3 className="text-[15px] leading-[15px] font-normal  text-gray-700 mb-[32px]">
        Create your business account
      </h3>
      <SignUpForm formtype="business" />
    </main>
  )
}

export default SignUpBusiness
