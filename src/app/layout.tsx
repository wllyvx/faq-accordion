import './globals.css'
import { Kumbh_Sans } from '@next/font/google'

const kumbh = Kumbh_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${kumbh.className} h-[100vh] bg-gradient-to-b from-grad1 to-grad2 bg-cover bg-no-repeat`}>
        {children}
      </body>
    </html>
  )
}
