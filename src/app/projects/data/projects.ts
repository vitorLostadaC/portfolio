import { JSX } from 'react'
import {
  antrolAiDetails,
  tags as antrolAiTags
} from '../[slug]/details/antrol-ai/antrol-ai-details'
import {
  consaiDetails,
  tags as consaiTags
} from '../[slug]/details/consai/consai-details'
import {
  retouchDetails,
  tags as retouchTags
} from '../[slug]/details/retouch/retouch-details'
import { ProjectTag } from './project-tag'
import { ProjectType } from './project-type'
// import { portfolioDetails } from '../[slug]/details/portfolio/portfolio-details'
import { base64ToImageDetails } from '../[slug]/details/base64-to-image/base-64-to-image-details'
import { ProjectSlug } from './project-slug'

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
  details: JSX.Element[]
}

export const projects: Project[] = [
  {
    slug: ProjectSlug.AntrolAi,
    date: new Date('2024-05-01'),
    name: 'Antrol AI',
    description:
      'An AI-powered platform that creates custom icons for your projects',
    pinned: true,
    image: 'https://old.vitorlostada.com/assets/projects/antrol-ai.webp',
    tags: antrolAiTags,
    demo: 'https://antrolai.com/en',
    sourceCode: 'https://github.com/vitorLostadaC/antrol-generate',
    type: ProjectType.PersonalProject,
    details: antrolAiDetails
  },
  {
    slug: ProjectSlug.Consai,
    date: new Date('2024-08-01'),
    name: 'Consai',
    description:
      'A smart chatbot that helps visitors find information on your website',
    pinned: true,
    image: 'https://old.vitorlostada.com/assets/projects/consai.webp',
    tags: consaiTags,
    demo: 'https://consai.com.br/',
    type: ProjectType.SideProject,
    details: consaiDetails
  },
  // {
  //   slug: ProjectSlug.Portfolio,
  //   date: new Date('2024-11-01'),
  //   name: 'Portfolio',
  //   description:
  //     'My personal portfolio showcasing my experience with modern technologies',
  //   pinned: true,
  //   image: 'https://old.vitorlostada.com/assets/projects/portfolio.webp',
  //   tags: [ProjectTag.NextJs, ProjectTag.Typescript, ProjectTag.PostHog],
  //   demo: 'https://old.vitorlostada.com',
  //   sourceCode: 'https://github.com/vitorLostadaC/portfolio',
  //   type: ProjectType.PersonalProject,
  //   details: portfolioDetails
  // },
  {
    slug: ProjectSlug.Retouch,
    date: new Date('2024-09-01'),
    name: 'Retouch',
    description:
      'An infinite canvas with an AI powered image editor, built for Resleeve as a core feature',
    pinned: true,
    image: 'https://old.vitorlostada.com/assets/projects/retouch.webp',
    tags: retouchTags,
    type: ProjectType.Job,
    demo: 'https://resleeve.ai',
    details: retouchDetails
  },
  {
    slug: ProjectSlug.Base64ToImage,
    date: new Date('2024-10-01'),
    name: 'Base 64 to Image',
    description:
      'A Raycast extension to convert between base64 and image formats',
    image: 'https://old.vitorlostada.com/assets/projects/base64-to-image.webp',
    pinned: false,
    tags: [],
    type: ProjectType.OpenSource,
    demo: 'https://www.raycast.com/vitorlostada/image-base64',
    sourceCode: 'https://github.com/vitorLostadaC/image-base64',
    details: base64ToImageDetails
  }
]
