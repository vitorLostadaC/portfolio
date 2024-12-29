import { notFound } from 'next/navigation'
import { projects } from '../data/projects'
import { Metadata } from 'next'
import { Fragment } from 'react'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)

  if (!project) return {}

  const siteTitle = project.name + ' | Vitor Lostada'
  const siteDescription = project.description.slice(0, 150)
  const siteImage = {
    url: `https://vitorlostada.com/assets/projects/${project.slug}.webp`,
    width: 1200,
    height: 630,
    alt: project.name
  }

  return {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      images: [siteImage]
    },
    metadataBase: new URL(`https://vitorlostada.com/projects/${project.slug}`),
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

export default async function ProjectPage({ params }: Props) {
  const slug = (await params).slug

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col gap-10">
      {project.details.map((detail, index) => (
        <Fragment key={project.slug + index}>{detail}</Fragment>
      ))}
    </div>
  )
}
