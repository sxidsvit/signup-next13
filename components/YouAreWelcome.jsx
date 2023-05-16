'use client'

import useLocalStorage from '@/hooks/useLocalStorage'

import React from 'react'

const YouAreWelcome = () => {
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', {})

  const userUserName = currentUser.username
  return (
    <div>{userUserName ? `${userUserName}, you are welcome!` : 'You are welcome!'}</div>
  )
}

export default YouAreWelcome