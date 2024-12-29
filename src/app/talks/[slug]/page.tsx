import { notFound } from 'next/navigation'
import { talks } from '../data/talks'
import { Metadata } from 'next'
import { Fragment } from 'react'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return talks.map((talk) => ({
    slug: talk.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const talk = talks.find((talk) => talk.slug === slug)

  if (!talk) return {}

  const siteTitle = talk.title + ' | Vitor Lostada'
  const siteDescription = talk.description.slice(0, 150) + '...'
  const siteImage = {
    url: talk.image,
    width: 1200,
    height: 630,
    alt: talk.title
  }

  return {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      images: [siteImage]
    },
    metadataBase: new URL(`https://vitorlostada.com/talks/${talk.slug}`),
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
}

export default async function TalkPage({ params }: Props) {
  const slug = (await params).slug

  const talk = talks.find((talk) => talk.slug === slug)

  if (!talk) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-10">
      {talk.details.map((detail, index) => (
        <Fragment key={talk.slug + index}>{detail}</Fragment>
      ))}
    </div>
  )
}
