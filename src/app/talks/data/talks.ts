import { JSX } from 'react'
import { aoCanvasInfinitoEAlemDetails } from '../[slug]/details/ao-canvas-infinito-e-alem/ao-canvas-infinito-e-alem-details'
import { TalkSlug } from './talk-slug'

export type Talk = {
  slug: string
  title: string
  description: string
  date: Date
  image: string
  site: string
  conference: string
  details: JSX.Element[]
}

export const talks: Talk[] = [
  {
    slug: TalkSlug.AoCanvasInfinitoEAlem,
    title: 'Ao Canvas infinito e além',
    description:
      'I talk about how an infinite canvas works, starting from the math behind it, to understand and recreate one with interactions',
    date: new Date('2024-11-16'),
    image:
      'https://old.vitorlostada.com/assets/talks/ao-canvas-infinito-e-alem.webp',
    site: 'https://frontin.floripa.br/',
    conference: 'Front in Floripa',
    details: aoCanvasInfinitoEAlemDetails
  }
]
