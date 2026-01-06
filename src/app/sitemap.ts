import type { MetadataRoute } from 'next'
import { projects } from './projects/data/projects'
import { talks } from './talks/data/talks'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://old.vitorlostada.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://old.vitorlostada.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://old.vitorlostada.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://old.vitorlostada.com/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: 'https://old.vitorlostada.com/talks',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    ...projects.map((project) => ({
      url: `https://old.vitorlostada.com/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    })),
    ...talks.map((talk) => ({
      url: `https://old.vitorlostada.com/talks/${talk.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }))
  ]
}
