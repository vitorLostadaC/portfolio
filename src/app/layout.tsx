import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/layout/Header'
import { Feedback } from '@/components/feedback/feedback'
import { PostHogProviderWrapper } from '@/contexts/PosthogWrapper'

const geistMono = Inter({
  subsets: ['latin']
})

const siteTitle = 'Vitor Lostada'
const siteDescription = 'This is my personal website'
const siteImage = '/SEO/hero.png'

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    locale: 'en_US',
    images: [siteImage]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteImage]
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <PostHogProviderWrapper>
        <body
          className={`${geistMono.className} dark m-auto max-w-screen-xl antialiased`}
        >
          <SpeedInsights />
          <Analytics />
          <Feedback />

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 px-4 py-10 lg:py-16">{children}</main>
          </div>
        </body>
      </PostHogProviderWrapper>
    </html>
  )
}
