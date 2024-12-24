import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/layout/Header'
import { Feedback } from '@/components/feedback/feedback'

const geistMono = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Vitor Lostada',
  description: 'This is my personal website'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className} dark m-auto max-w-screen-xl antialiased`}
      >
        <SpeedInsights />
        <Analytics />
        <Feedback />

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 py-16">{children}</main>
        </div>
      </body>
    </html>
  )
}
