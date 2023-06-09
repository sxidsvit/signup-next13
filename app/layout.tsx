import './globals.css'
import { Poppins } from 'next/font/google'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Sign UP Next13',
  description: 'This is test task from Genius Software',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={`min-h-screen max-w-[864px] mx-auto ${inter.className}`}>
      <main className="app">
        <Nav />
        {children}
        <Footer />
      </main>
    </body>
  </html>
)

export default RootLayout
