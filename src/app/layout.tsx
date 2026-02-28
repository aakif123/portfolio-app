import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Aakif Khan | Frontend Developer Portfolio',
  description: 'Frontend Developer with 3.5 years at Cognizant. Expert in React.js, Angular, TypeScript, Java Spring Boot. Based in Bengaluru, India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}