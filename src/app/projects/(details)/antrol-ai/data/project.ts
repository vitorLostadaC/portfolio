import { Tag } from '@/app/projects/data/tags'

export const heroTitle = 'Antrol AI'

export const HeroDescription =
  'Antrol AI is a fullstack Next.js application that allows users to create icons for their projects. I built this project from scratch to learn more about Next.js, Stripe, CDN, GPT API, and S3. I really enjoyed working on this, because I really tried to implement the robust application for production, with self-hosting and all.'

export const tags: Tag[] = [
  Tag.NextJs,
  Tag.NodeJs,
  Tag.Typescript,
  Tag.Stripe,
  Tag.S3,
  Tag.OpenAI,
  Tag.Postgres,
  Tag.Prisma,
  Tag.Motion,
  Tag.Tailwind,
  Tag.Sentry,
  Tag.PostHog,
  Tag.i18n,
  Tag.CDN
]

export const goalTitle = 'Project Purpose and Goal'

export const goalDescription = `I created this project for several reasons. First, to build an entire SaaS application, going through all the stages needed to ship this product. Secondly, I wanted to learn more about the new Next.js version 14, including server actions and how to do self-hosting with Next.js. I had also never used Stripe and S3 before, so I had to learn a lot of new things and implement them in this project.

Event is a SaaS project, but the main purpose was not monetization. I don’t even have any ads or affiliate links in this project. It was simply an enjoyable project to build and a great opportunity to learn many new things.
`

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  'I don’t even know where to start because I really faced several challenges when starting this project. The first issue I encountered was authentication in Next.js because it involves two environments: server and client. To solve this, I searched all over the internet, focusing on GitHub repositories from people who work with Next.js.',

  'Self-hosting: I am using a VPN to host everything for my project, and some features of Vercel are not available. To address this, I had to find a solution for good loading speeds. I implemented a CDN to host some cached pages, which keeps my landing page very fast.',

  'Performance: At first, my landing page looked fine, but when I ran Lighthouse, the results were very poor haha. I started an extensive search to understand how to improve it. I converted all images to WebP to optimize their size and resized them to match the actual rendered dimensions. This improved the performance scores significantly.',

  'This bug was only discovered in production. The generated images were extremely slow to render on users’ screens because I wasn’t optimizing the images. To quickly fix this, I used Sharp to resize the images on the frontend. The solution worked, but it’s not ideal because it added extra load time on the frontend. For example, if you go to the gallery, you’ll notice a long loading time because I’m resizing all images when the user opens the page. I could fix this in several ways, such as generating resized WebP images on the backend or creating a job to run after generation and save on db to show the user the result immediately. Unfortunately, I haven’t had time to fix this yet, and since we currently don’t have active users, this refactor won’t have much of an impact for now.'
]
