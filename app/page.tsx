import React from 'react'
import SignUpForm from '@/components/SignUpForm'
import { config } from 'dotenv'
config()

// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold my-8">Sign Up</h1>
      <h3 className="text-xl  my-8">Create your account</h3>
      <SignUpForm />
      {/* <ToastContainer /> */}
    </main>
  )
}

export default Home
