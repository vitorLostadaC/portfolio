import { Metadata } from 'next'
import { projects } from '../data/project'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug
  const project = projects.find((project) => project.slug === slug)

  if (!project) return {}

  const siteTitle = project.name
  const siteDescription = project.description.slice(0, 150)
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>oiii</h1>
      {children}
    </>
  )
}
