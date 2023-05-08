'use client'

import { useState } from 'react'
import { Poppins } from 'next/font/google'
import * as z from 'zod'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
})

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  username: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().min(6),
  rememberMe: z.boolean(),
})

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    rememberMe: false,
  })

  const [formErrors, setFormErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false);


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationResult = schema.validate(formData)
    if (validationResult._errors.length > 0) {
      const errors = {}
      validationResult._errors.forEach((error) => {
        errors[error.path[0]] = error.message
      })
      setFormErrors(errors)
      return
    }
    // Добавьте здесь логику отправки формы на сервер
    console.log(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name:
            <input
              placeholder="Ryan"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {formErrors.firstName && (
              <p className="text-red-500 text-xs italic">
                {formErrors.firstName}
              </p>
            )}
          </label>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name:
            <input
              placeholder="Fay"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.firstName ? 'border-red-500' : 'border-gray-200'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
            />
            {formErrors.lastName && (
              <p className="text-red-500 text-xs italic">
                {formErrors.lastName}
              </p>
            )}
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Username:
          <input
            placeholder="ryanfay"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.username ? 'border-red-500' : 'border-gray-200'
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          />
          {formErrors.username && (
            <p className="text-red-500 text-xs italic">{formErrors.username}</p>
          )}
        </label>
      </div>

      <div className="mb-4">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Email:
          <input
            placeholder="ryanfay@edgevana.com"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.username ? 'border-red-500' : 'border-gray-200'
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs italic">{formErrors.email}</p>
          )}
        </label>
      </div>

      <div className="mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>

            {formErrors.password && (
              <p className="text-red-500 text-xs italic">{formErrors.password}</p>
            )}
          </div>
        </label>
      </div>

      <div className="mb-6">
        <label className="flex items-start text-gray-700 font-bold">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="leading-tight w-6 h-6 mr-5  checked checked:bg-brand-darkblue checked:border-x-2 text-white text-normal"
          />
          <p className="text-sm font-normal">
            I certify that I am 18 years of age or older, I agree to the Edgevana&apos;s <span className="text-sm font-bold">Terms of Use</span>, and I have read the <span className="text-sm font-bold">Privacy Policy</span>
          </p>
        </label>
      </div>

      <div className="flex items-center  justify-between">
        <button
          type="submit"
          className="bg-brand-darkblue w-full hover:bg-brand-darkblue-light text-white font-normal py-4 px-4 rounded-xl focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUpPage
