import antrolAi from './assets/antrol-ai.png'
import consai from './assets/consai.png'
import portfolio from './assets/portfolio.png'

export const enum Tag {
  FullStack = 'Full Stack',
  NextJs = 'Next',
  Typescript = 'Typescript',
  NodeJs = 'NodeJs',
  Sentry = 'Sentry',
  PostHog = 'PostHog',
  Postgres = 'Postgres'
}

export interface Project {
  slug: string
  name: string
  description: string
  pinned: boolean
  date: Date
  stars?: number
  demo?: string
  sourceCode?: string
  image: string
  tags: Tag[]
}

export const projects: Project[] = [
  {
    slug: 'antrol-ai',
    date: new Date('2024-05-01'),
    name: 'Antrol AI',
    description: 'create icons generated by AI',
    pinned: true,
    image: antrolAi.src,
    tags: [
      Tag.NextJs,
      Tag.Typescript,
      Tag.NodeJs,
      Tag.Postgres,
      Tag.Sentry,
      Tag.PostHog
    ],
    demo: 'https://antrolai.com/en',
    sourceCode: 'https://github.com/vitorLostadaC/antrol-generate'
  },
  {
    slug: 'consai',
    date: new Date('2024-08-01'),
    name: 'Consai',
    description: 'A embed chat that can be aswer questions about your website',
    pinned: true,
    image: consai.src,
    tags: [
      Tag.NextJs,
      Tag.Typescript,
      Tag.NodeJs,
      Tag.Postgres,
      Tag.Sentry,
      Tag.PostHog
    ],
    demo: 'https://consai.com.br/'
  },
  {
    slug: 'portfolio',
    date: new Date('2024-11-01'),
    name: 'Portfolio',
    description: 'My portfolio',
    pinned: true,
    image: portfolio.src,
    tags: [Tag.NextJs, Tag.Typescript, Tag.PostHog],
    demo: 'https://vitorlostada.com',
    sourceCode: 'https://github.com/vitorLostadaC/portfolio'
  }
]
