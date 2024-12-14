import frontInFloripa from '../assets/front-in-floripa.webp'

export type Talk = {
  slug: string
  title: string
  description: string
  date: Date
  image: string
  site: string
  conference: string
}

export const talks: Talk[] = [
  {
    slug: 'ao-canvas-infinito-e-alem',
    title: 'Ao Canvas infinito e além',
    description:
      'I talk about how an infinite canvas works, starting from the math behind it, to understand and recreate one with interactions',
    date: new Date('2024-11-16'),
    image: frontInFloripa.src,
    site: 'https://frontin.floripa.br/',
    conference: 'Front in Floripa'
  }
]
