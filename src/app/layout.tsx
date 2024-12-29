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

// const siteTitle = 'Vitor Lostada'
// const siteDescription =
//   'Frontend Developer crafting pixel-perfect and type-safe web experiences with React and Next.js.'
// const siteImage = {
//   url: '/SEO/hero.png',
//   width: 1200,
//   height: 630,
//   alt: 'Vitor Lostada - Frontend Developer'
// }

// export const metadata: Metadata = {
//   title: siteTitle,
//   description: siteDescription,
//   openGraph: {
//     images: [siteImage]
//   },
//   metadataBase: new URL('https://vitorlostada.com'),
//   twitter: {
//     card: 'summary_large_image',
//     site: 'https://vitorlostada.com',
//     creator: 'https://vitorlostada.com',
//     title: siteTitle,
//     description: siteDescription,
//     images: [siteImage]
//   },
//   robots: {
//     index: true,
//     follow: true
//   }
// }

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
