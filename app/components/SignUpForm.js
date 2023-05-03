'use client'

import { useState } from 'react'
import { Poppins } from 'next/font/google'
import * as z from 'zod'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600'],
})

const schema = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  username: z.string().nonempty(),
  password: z.string().min(6),
  rememberMe: z.boolean(),
})

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    rememberMe: false,
  })

  const [formErrors, setFormErrors] = useState({})

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
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.lastName ? 'border-red-500' : 'border-gray-200'
                } rounded py-3 px
 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
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
      <div className="mb-6">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${formErrors.password ? 'border-red-500' : 'border-gray-200'
              } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          />
          {formErrors.password && (
            <p className="text-red-500 text-xs italic">{formErrors.password}</p>
          )}
        </label>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 font-bold">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="mr-2 leading-tight"
          />
          <span className="text-sm">Remember me</span>
        </label>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}

export default SignUpPage
