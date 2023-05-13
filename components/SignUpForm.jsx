'use client'

import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"
import Link from 'next/link';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { Poppins } from 'next/font/google'
import * as z from 'zod'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { toast } from 'react-toastify'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
})

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  username: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().min(6),
  privacyPolicy: z.boolean().refine((val) => val === true, { message: "You should adopt the Terms of Use" }),
})

const SignUpPage = ({ formtype }) => {

  const router = useRouter();

  const initialFormData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    privacyPolicy: false,
  }

  const [formData, setFormData] = useState(initialFormData)

  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({})
  const [formValid, setFormValid] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  useEffect(() => {
    setFormErrors({});
    setFormValid(true)
    setIsSubmitting(false)
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true);

    const validationResult = schema.safeParse(formData)

    if (!validationResult.success) {
      setFormErrors(validationResult.error.formErrors.fieldErrors);
      setFormValid(prev => validationResult.success)
      return;
    }
    try {
      const response = await fetch("/api/user/new", {
        method: "POST",
        body: JSON.stringify({
          data: formData,
        }),
      });


      if (response.ok) {
        const jsonData = await response.json();
        console.log('Sign Up form response: ', jsonData);
        toast.success(`${response.statusText}`, {
          position: "top-center",
          autoclose: 1000,
          theme: 'light',
          onClose: () => {
            setFormData(initialFormData)
            setFormErrors({})
            setFormValid(true)
            setIsSubmitting(false)
            router.push('/welcome')
          }
        })
      } else {
        const responseText = await response.text();
        toast.error(`${responseText}`, {
          position: "top-center",
          autoclose: 1000,
          theme: 'light',
        })
      }

    } catch (error) {
      console.log('Error:', error);
      const text = await error.response.text();
      console.error('Response:', text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <form
        onSubmit={handleSubmit}
        //  With border and shadow for form
        // className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        className="bg-white  px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name:
              <input
                placeholder="Ryan"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                role="textbox"
                aria-label="First Name"
              />
            </label>
            {formErrors.firstName && (
              <p className="text-red-500 text-xs  lowercase font-normal italic">
                {formErrors.firstName}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name:
              <input
                placeholder="Fay"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                role="textbox"
                aria-label="Last Name"
              />
            </label>
            {formErrors.lastName && (
              <p className="text-red-500 text-xs  lowercase  font-normal italic">
                {formErrors.lastName}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
            Username:
            <input
              placeholder="ryanfay"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.username ? 'border-red-500' : 'border-gray-200'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              role="textbox"
              aria-label="Username"
            />
          </label>
          {formErrors.username && (
            <p className="text-red-500 text-xs  lowercase font-normal italic">{formErrors.username}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email:
            <input
              placeholder="ryanfay@edgevana.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.username ? 'border-red-500' : 'border-gray-200'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
              role="textbox"
              aria-label="Email Address"
            />
          </label>
          {formErrors.email && (
            <p className="text-red-500 text-xs  lowercase font-normal italic">{formErrors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block capitalize tracking-wide text-gray-700 text-xs font-bold mb-2">
            Password:
            <div className="relative">
              <input
                placeholder="********"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.password ? 'border-red-500' : 'border-gray-200'
                  } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                role="textbox"
                aria-label="Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
              </button>

            </div>
          </label>
          {formErrors.password && (
            <p className="text-red-500 text-xs  lowercase font-normal italic">{formErrors.password}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="custom-checkbox flex items-start text-gray-700 font-bold mb-2">
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleInputChange}
              className="leading-tight w-6 h-6 mr-5  checked checked:bg-brand-darkblue checked:border-x-2 text-white text-normal"
              role="checkbox"
              aria-label="I agree to the terms of Privacy Policy"
            />
            <span className="checkmark"></span>
            <p className="text-sm font-normal">
              I certify that I am 18 years of age or older, I agree to the Edgevana&apos;s <span className="text-sm font-bold">Terms of Use</span>, and I have read the <span className="text-sm font-bold">Privacy Policy</span>
            </p>
          </label>
          {formErrors.privacyPolicy && (
            <p className="text-red-500 text-xs  lowercase font-normal italic">{formErrors.privacyPolicy}</p>
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-5">
          <button
            type="submit"
            className="bg-brand-darkblue w-full hover:bg-brand-darkblue-light text-white font-normal py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >

            {!formValid ? 'Not valid form' : isSubmitting ? 'Submitting' : 'Sign Up'}
          </button>

          {formtype === "business" ?
            (<Link href="/signup-ordinar">
              <span className="font-bold text-brand-darkblue" >Sign Up </span>
              for ordinary account
            </Link>) :
            (<Link href="/signup-business">
              <span className="font-bold text-brand-darkblue" >Sign Up </span>
              for business account
            </Link>)
          }

        </div>
      </form>
    </>
  )

}

export default SignUpPage
