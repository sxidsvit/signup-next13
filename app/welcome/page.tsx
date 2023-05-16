import React from 'react'
import YouAreWelcome from '@/components/YouAreWelcome'

const Welcome = () => {
  return (
    <main className="text-gray-700">
      <h1 className="text-3xl font-bold text-center my-8">
        Registration completed successfully
      </h1>
      <h3 className="text-xl text-center  my-8">
        <YouAreWelcome />
      </h3>
    </main>
  )
}

export default Welcome
