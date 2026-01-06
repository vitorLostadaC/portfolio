import { Metadata } from 'next'
import { projects } from '../../data/projects'

export async function generateMetadata(): Promise<Metadata> {
  const project = projects.find((project) => project.slug === 'retouch')

  if (!project) return {}

  const siteTitle = project.name + ' | Vitor Lostada'
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
