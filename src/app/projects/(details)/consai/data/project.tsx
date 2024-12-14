import { ProjectTag } from '@/app/projects/data/tags'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Consai'

export const heroDescription = (
  <>
    Consai is my{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      first SaaS
    </RN>{' '}
    application, made to{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      try and earn money
    </RN>
    , and this changed all our decisions. I built it with my friend{' '}
    <a className="underline" href="https://www.linkedin.com/in/leomconti/">
      Leo
    </a>
    . We found an opportunity with AI and decided to create this SaaS to try
    selling it to other businesses. We needed to{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      ship fast
    </RN>{' '}
    to get our space in the market. I built the whole application (backend and
    frontend), and he worked on the AI API. We had many challenges and had to
    stop thinking{' '}
    <RN type="strike-through" multiline color="var(--highlight-2)">
      like developers
    </RN>{' '}
    and start thinking like{' '}
    <RN type="circle" multiline color="var(--highlight-2)">
      CEOs
    </RN>
    .
  </>
)

export const tags: ProjectTag[] = [
  ProjectTag.NextJs,
  ProjectTag.NodeJs,
  ProjectTag.Typescript,
  ProjectTag.Stripe,
  ProjectTag.Postgres,
  ProjectTag.Drizzle,
  ProjectTag.Tailwind,
  ProjectTag.Sentry,
  ProjectTag.PostHog,
  ProjectTag.CDN
]

export const goalTitle = 'Project Purpose and Goal'

export const goalDescription = [
  <>
    Our main goal was try get{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      max money as possible
    </RN>
    , and build a{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      strong
    </RN>{' '}
    alternative for the solutions already existents, we wanted understand more
    about{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      market, sales, marketing, and how to grow a product
    </RN>
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    Created a{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      strong SaaS template
    </RN>{' '}
    with authentication, Stripe integration for plan limits, organization and
    project management, team invites, a basic landing page/app structure , and a{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      fast script
    </RN>{' '}
    to configure a{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      new project structure
    </RN>{' '}
    in literally{' '}
    <RN type="circle" multiline color="var(--highlight-2)">
      2 seconds
    </RN>
    .
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      An embed
    </RN>{' '}
    that can be added to your website,{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      fully customized
    </RN>{' '}
    to match your brand.
  </>,
  <>
    A{' '}
    <RN type="box" multiline color="var(--highlight-2 )">
      real-time chat
    </RN>{' '}
    where clients can pause the AI and take over the conversation themselves.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      A playground page
    </RN>{' '}
    to test the agents.
  </>,
  <>
    <RN type="circle" multiline color="var(--highlight-2)">
      Beautiful animations
    </RN>{' '}
    to make the experience smoother 🤩.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      We built the project like it was for a big company with a mature product
    </RN>
    . At the start, I used best practices and design patterns, but the project
    took too long to build and ship. Because of that, we couldn&apos;t test if
    the product was useful. The first thing I changed was moving to a{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      simple MVC
    </RN>
    approach, which made everything faster to build.
  </>,
  <>
    Since we were working in our free time, we hired an intern. I planned their
    tasks so they could work on things like improving the UI and making it
    responsive. Meanwhile, I focused on the{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      core logic and main features
    </RN>{' '}
    of the product.
  </>,
  <>
    Another challenge was{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      figuring out how to sell the product
    </RN>
    . We started by initiating affiliate partnerships to have others sell the
    product for us, which helped us connect with key market players.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    I learned a lot about{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      business
    </RN>{' '}
    because the final user doesn&apos;t even know which technology we are using.
    One big takeaway for me is{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      understanding the timing of a product
    </RN>
    . If it&apos;s an MVP to test an idea, some things are{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      more critical than perfection
    </RN>{' '}
    in coding.
  </>,
  <>
    When you{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      mentor people
    </RN>
    , their performance{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      doesn&apos;t just double
    </RN>{' '}
    it{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      grows exponentially
    </RN>
    . Over time with your guidance, the people you hire start to understand how
    to get things done, and they become{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      self-driven leaders
    </RN>{' '}
    who complete tasks and even create their own goals.
  </>,
  <>
    Focus on{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      strategic priorities
    </RN>{' '}
    that can{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      significantly grow the product
    </RN>
    , rather than just following personal interests or whims.
  </>
]
