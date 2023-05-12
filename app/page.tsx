// Redirect for CSR (client side rendering)

'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/signup-ordinar'
  }, [])

  return null
}

// Redirect for SSR (server side rendering)

// function Home() {
//   return null
// }

// export async function getServerSideProps({ res }) {
//   res.setHeader('location', 'http://localhost:3000/signup-ordinar')
//   res.statusCode = 302
//   res.end()

//   return {
//     props: {},
//   }
// }

// export default Home
