import { tags as antrolAiTags } from '../(details)/antrol-ai/data/project'
import antrolAi from '../assets/antrol-ai.webp'
import consai from '../assets/consai.webp'
import portfolio from '../assets/portfolio.webp'
import retouch from '../assets/retouch.webp'
import { ProjectTag } from './projectTag'
import { ProjectType } from './projectType'

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
  type: ProjectType
  tags: ProjectTag[]
}

export const projects: Project[] = [
  {
    slug: 'antrol-ai',
    date: new Date('2024-05-01'),
    name: 'Antrol AI',
    description:
      'AI-powered platform that creates custom icons for your projects',
    pinned: false,
    image: antrolAi.src,
    tags: antrolAiTags,
    demo: 'https://antrolai.com/en',
    sourceCode: 'https://github.com/vitorLostadaC/antrol-generate',
    type: ProjectType.PersonalProject
  },
  {
    slug: 'consai',
    date: new Date('2024-08-01'),
    name: 'Consai',
    description:
      'Smart chatbot that helps visitors find information on your website',
    pinned: true,
    image: consai.src,
    tags: [
      ProjectTag.NextJs,
      ProjectTag.Typescript,
      ProjectTag.NodeJs,
      ProjectTag.Postgres,
      ProjectTag.Sentry,
      ProjectTag.PostHog
    ],
    demo: 'https://consai.com.br/',
    type: ProjectType.SideProject
  },
  {
    slug: 'portfolio',
    date: new Date('2024-11-01'),
    name: 'Portfolio',
    description:
      'My personal portfolio showcasing my experience with a modern stack',
    pinned: true,
    image: portfolio.src,
    tags: [ProjectTag.NextJs, ProjectTag.Typescript, ProjectTag.PostHog],
    demo: 'https://vitorlostada.com',
    sourceCode: 'https://github.com/vitorLostadaC/portfolio',
    type: ProjectType.PersonalProject
  },
  {
    slug: 'retouch',
    date: new Date('2024-09-01'),
    name: 'Retouch',
    description:
      'An infinite canvas with an AI-powered image editor, built for Resleeve as a core feature',
    pinned: true,
    image: retouch.src,
    tags: [
      ProjectTag.NextJs,
      ProjectTag.Typescript,
      ProjectTag.Motion,
      ProjectTag.PostHog
    ],
    type: ProjectType.WorkProject
  }
]
