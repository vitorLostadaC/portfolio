import { Feedback } from '@/components/feedback/feedback'
import { PostHogProviderWrapper } from '@/contexts/PosthogWrapper'
import { Header } from '@/layout/Header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { Deprecated } from './deprecated'
import './globals.css'

const geistMono = Inter({
  subsets: ['latin']
})

const siteTitle = 'Vitor Lostada'
const siteDescription =
  'Frontend Developer crafting pixel-perfect and type-safe web experiences with React and Next.js.'
const siteImage = {
  url: '/assets/hero.png',
  width: 1200,
  height: 630,
  alt: 'Vitor Lostada - Frontend Developer'
}

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    images: [siteImage]
  },
  metadataBase: new URL('https://vitorlostada.com'),
  twitter: {
    card: 'summary_large_image',
    site: 'https://vitorlostada.com',
    creator: 'https://vitorlostada.com',
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
          <Toaster />

          <div className="relative flex min-h-screen flex-col">
            <Header />
            <Deprecated />
            <main className="flex-1 px-4 py-10 lg:py-16">{children}</main>
          </div>
        </body>
      </PostHogProviderWrapper>
    </html>
  )
}
