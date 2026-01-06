import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { projects } from '../data/projects'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)

  if (!project) return {}

  const siteTitle = project.name + ' | Vitor Lostada'
  const siteDescription = project.description.slice(0, 150) + '...'
  const siteImage = {
    url: project.image,
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
    metadataBase: new URL(
      `https://old.vitorlostada.com/projects/${project.slug}`
    ),
    twitter: {
      card: 'summary_large_image',
      site: 'https://old.vitorlostada.com',
      creator: 'https://old.vitorlostada.com',
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
