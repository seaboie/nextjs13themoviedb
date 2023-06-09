import NavbarHead from '@/components/navbar/NavbarHead'
import './globals.css'
import { Inter, Montserrat, Castoro, Oswald } from 'next/font/google'
import { Suspense } from 'react'
import Error from './error'
import Loading from './loading'

const oswald = Oswald({weight: ['300', '500'], subsets: ['latin'], variable: '--font-oswald'})
const castoro = Castoro({weight: ['400'], subsets: ['latin'], variable: '--font-castoro'})
const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '600', '800'], variable: '--font-montserrat'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${oswald.className}`}>
        <div className=' w-screen min-h-screen flex flex-col'>
          <NavbarHead />
          <div className='flex-grow'>
          <Suspense fallback={<Error />}>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </Suspense>
          </div>
        </div>
      </body>
    </html>
  )
}
