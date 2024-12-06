import { Tag } from '@/app/projects/data/tags'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Consai'

export const heroDescription = (
  <>Consai is my first SASS application with entuit to earn money,</>
)

export const tags: Tag[] = [
  Tag.NextJs,
  Tag.NodeJs,
  Tag.Typescript,
  Tag.Stripe,
  Tag.Postgres,
  Tag.Drizzle,
  Tag.Tailwind,
  Tag.Sentry,
  Tag.PostHog,
  Tag.CDN
]

export const goalTitle = 'Project Purpose and Goal'

export const goalDescription = [
  <>
    I created this project with two main objectives. First, to build a{' '}
    <RN type="underline" color="var(--highlight-1)" multiline>
      complete SaaS application
    </RN>{' '}
    from scratch - going through{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      every stage from development to production deployment.
    </RN>{' '}
    Second, I wanted to learn more about the new Next.js 14 , including server
    actions and how to do self-hosting with Next.js . I had also never used
    Stripe and S3 before, so I had to learn a lot of new things and implement
    them in this project.
  </>,

  <>
    Event is a SaaS project, but{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      the main purpose was not monetization.
    </RN>{' '}
    I don&apos;t even have any ads or affiliate links in this project. It was
    simply an{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      enjoyable project to build
    </RN>{' '}
    and a great opportunity to learn many new things.
  </>,
  <>
    I tried to create a{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      minimalist design
    </RN>{' '}
    with a focus on UX. Since most users struggle to write good prompts, I
    created a guided flow to help them achieve better results.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    I don’t even know where to start because I really faced several challenges
    when starting this project. The first issue I encountered was{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      authentication in Next.js
    </RN>{' '}
    because it involves two environments: server and client. To solve this, I
    searched all over the internet, focusing on{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      GitHub repositories from people who work with Next.js
    </RN>
    .
  </>,

  <>
    Self-hosting: I am using a{' '}
    <RN type="circle" multiline color="var(--highlight-1)">
      VPN
    </RN>{' '}
    to host everything for my project, and some features of Vercel are not
    available. To address this, I had to find a solution for good loading
    speeds. I implemented a{' '}
    <RN type="circle" multiline color="var(--highlight-2)">
      CDN
    </RN>{' '}
    to host some cached pages, which keeps my landing page very fast.
  </>,

  <>
    Performance : At first, my landing page looked fine, but when I ran
    Lighthouse,{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      the results were very poor
    </RN>{' '}
    haha. I started an extensive search to understand how to improve it. I{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      converted all images to WebP to optimize their size
    </RN>{' '}
    and resized them to match the actual rendered dimensions. This improved the
    performance scores significantly.
  </>,

  <>
    This bug was only discovered in{' '}
    <RN type="circle" multiline color="var(--highlight-1)">
      production
    </RN>
    . The generated images were{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      extremely slow to render
    </RN>{' '}
    on users&apos; screens because I wasn&apos;t optimizing the images. To
    quickly fix this, I used{' '}
    <RN type="underline" color="var(--highlight-1)">
      Sharp
    </RN>{' '}
    to resize the images on the frontend. The solution worked, but{' '}
    <RN type="underline" color="var(--highlight-1)">
      it&apos;s not ideal
    </RN>{' '}
    because{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      it added extra load time on the frontend
    </RN>
    . For example, if you go to the gallery, you&apos;ll notice a long loading
    time because I&apos;m resizing all images when the user opens the page. I
    could fix this in several ways, such as{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      generating resized WebP images on the backend
    </RN>{' '}
    or creating a job to run after generation and save on db to show the user
    the result immediately. Unfortunately, I haven&apos;t had time to fix this
    yet, and since we currently don&apos;t have active users, this refactor
    won&apos;t have much of an impact for now.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project was really awesome because I learned a lot about{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      all the technologies I wanted to use
    </RN>
    , and also learned about{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      product development and how to ship a project
    </RN>
    .
  </>,

  <>
    While I didn&apos;t aim to create a lucrative business or run ads, just
    having users from{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      LinkedIn and Instagram
    </RN>{' '}
    gave me great experience working with a production product. For example,
    when I first shipped the app, I discovered it wasn&apos;t opening properly
    in Safari{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      and had to quickly fix bugs in production
    </RN>{' '}
  </>,
  <>
    Being a side project, my time to work on this and create the best possible
    experience was limited. However, I&apos;m{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      really happy with the results
    </RN>{' '}
    and everything I learned. This experience{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      contributed significantly to my growth as a developer
    </RN>
    .
  </>
]
