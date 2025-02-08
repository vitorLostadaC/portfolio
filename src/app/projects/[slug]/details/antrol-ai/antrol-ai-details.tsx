import { ModalImage } from '@/app/projects/components/modal-image'
import { ProjectSlug } from '@/app/projects/data/project-slug'
import { ProjectTag } from '@/app/projects/data/project-tag'
import { Hero } from '@/components/details/hero-section'
import { Highlight } from '@/components/hightlight'
import { cn } from '@/lib/utils'
import { TextSection } from '../../../../../components/details/text-section'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import hero from './assets/hero.webp'

export const heroTitle = 'Antrol AI'

export const heroDescription = [
  <>
    Antrol AI is a <Highlight>fullstack</Highlight> Next.js application that
    allows users to create icons for their projects. I built this project{' '}
    <Highlight>from scratch</Highlight> to learn more about Next.js, Stripe,
    CDN, GPT API, and S3. I really enjoyed working on this, because I really
    tried to implement the <Highlight>robust application</Highlight> for
    production, with self-hosting and all.
  </>
]

export const tags: ProjectTag[] = [
  ProjectTag.NextJs,
  ProjectTag.NodeJs,
  ProjectTag.Typescript,
  ProjectTag.Stripe,
  ProjectTag.S3,
  ProjectTag.OpenAI,
  ProjectTag.Postgres,
  ProjectTag.Prisma,
  ProjectTag.Motion,
  ProjectTag.Tailwind,
  ProjectTag.Sentry,
  ProjectTag.PostHog,
  ProjectTag.i18n,
  ProjectTag.CDN
]

export const goalTitle = 'Project Purpose and Goal'

export const goalDescription = [
  <>
    I created this project with two main objectives. First, to build a{' '}
    <Highlight>complete SaaS application</Highlight> from scratch - going
    through{' '}
    <Highlight>
      every stage from development to production deployment.
    </Highlight>{' '}
    Second, I wanted to learn more about the new Next.js 14 , including server
    actions and how to do self-hosting with Next.js . I had also never used
    Stripe and S3 before, so I had to learn a lot of new things and implement
    them in this project.
  </>,

  <>
    While this is a SaaS project,{' '}
    <Highlight>monetization was not the main goal.</Highlight> I don&apos;t even
    have any ads or affiliate links in this project. It was simply an{' '}
    <Highlight>enjoyable project to build</Highlight> and a great opportunity to
    learn many new things.
  </>,
  <>
    I tried to create a <Highlight>minimalist design</Highlight> with a focus on
    UX. Since most users struggle to write good prompts, I created a guided flow
    to help them achieve better results.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    I don&apos;t even know where to start because I really faced several
    challenges when starting this project. The first issue I encountered was{' '}
    <Highlight>authentication in Next.js</Highlight> because it involves two
    environments: server and client. To solve this, I searched all over the
    internet, focusing on{' '}
    <Highlight>GitHub repositories from people who work with Next.js</Highlight>
    .
  </>,

  <>
    Self-hosting: I am using a <Highlight>VPN</Highlight> to host everything for
    my project, and some features of Vercel are not available. To address this,
    I had to find a solution for good loading speeds. I implemented a{' '}
    <Highlight>CDN</Highlight> to host some cached pages, which keeps my landing
    page very fast.
  </>,

  <>
    Performance : At first, my landing page looked fine, but when I ran
    Lighthouse, <Highlight>the results were very poor</Highlight> haha. I
    started an extensive search to understand how to improve it. I{' '}
    <Highlight>converted all images to WebP to optimize their size</Highlight>{' '}
    and resized them to match the actual rendered dimensions. This improved the
    performance scores significantly.
  </>,

  <>
    This bug was only discovered in <Highlight>production</Highlight>. The
    generated images were <Highlight>extremely slow to render</Highlight> on
    users&apos; screens because I wasn&apos;t optimizing the images. To quickly
    fix this, I used <Highlight>Sharp</Highlight> to resize the images on the
    frontend. The solution worked, but{' '}
    <Highlight>it&apos;s not ideal</Highlight> because{' '}
    <Highlight>it added extra load time on the frontend</Highlight>. For
    example, if you go to the gallery, you&apos;ll notice a long loading time
    because I&apos;m resizing all images when the user opens the page. I could
    fix this in several ways, such as{' '}
    <Highlight>generating resized WebP images on the backend</Highlight> or
    creating a job to run after generation and save on db to show the user the
    result immediately. Unfortunately, I haven&apos;t had time to fix this yet,
    and since we currently don&apos;t have active users, this refactor
    won&apos;t have much of an impact for now.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project was really awesome because I learned a lot about{' '}
    <Highlight>all the technologies I wanted to use</Highlight>, and also
    learned about{' '}
    <Highlight>product development and how to ship a project</Highlight>.
  </>,

  <>
    While I didn&apos;t aim to create a lucrative business or run ads, just
    having users from <Highlight>LinkedIn and Instagram</Highlight> gave me
    great experience working with a production product. For example, when I
    first shipped the app, I discovered it wasn&apos;t opening properly in
    Safari <Highlight>and had to quickly fix bugs in production</Highlight>{' '}
  </>,
  <>
    Being a side project, my time to work on this and create the best possible
    experience was limited. However, I&apos;m{' '}
    <Highlight>really happy with the results</Highlight> and everything I
    learned. This experience{' '}
    <Highlight>contributed significantly to my growth as a developer</Highlight>
    .
  </>
]

export const antrolAiDetails = [
  <Hero
    title={heroTitle}
    description={heroDescription}
    stack={tags}
    image={hero}
    slug={ProjectSlug.AntrolAi}
  />,
  <TextSection title={goalTitle} description={goalDescription} />,

  <div className="grid grid-cols-2 items-center gap-6">
    {[a, b, c].map((item, index) => (
      <ModalImage
        key={index}
        image={item}
        alt={`antrol-ai-${index}`}
        slug={ProjectSlug.AntrolAi}
        className={cn('rounded-md border', {
          'row-span-2': index === 1
        })}
      />
    ))}
  </div>,
  <TextSection title={problemsTitle} description={problemsDescription} />,
  <div className="flex flex-col gap-2">
    <ModalImage
      image={d}
      alt={`antrol-ai-4`}
      className={cn('rounded-md border')}
      slug={ProjectSlug.AntrolAi}
    />
    <p className="flex items-center gap-2 text-muted-foreground">
      Let&apos;s check this generation!
      <a
        href="https://antrolai.com/gallery/4d3cb9df-cb64-4103-9fda-cc4f5f0963d9"
        target="_blank"
        className="underline"
      >
        link
      </a>
    </p>
  </div>,
  <TextSection title={lessonsTitle} description={lessonsDescription} />
]
