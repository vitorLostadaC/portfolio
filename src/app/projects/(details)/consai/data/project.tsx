import { Tag } from '@/app/projects/data/tags'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Consai'

export const heroDescription = (
  <>
    Consai is my first SaaS application, made to try and earn money, and this
    changed all our decisions. I built it with my friend{' '}
    <a className="underline" href="https://www.linkedin.com/in/leomconti/">
      Leo
    </a>
    . We found an opportunity with AI and decided to create this SaaS to try
    selling it to other businesses. We needed to ship fast to get our space in
    the market. I built the whole application (backend and frontend), and he
    worked on the AI API. We had many challenges and had to stop thinking like
    developers and start thinking like CEOs.
  </>
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
    Our main goal was try get max money as possible, and build a strong
    alternative for the solutions already existents, we wanted understand more
    about market, seels, marketing and how grow a product
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    We built the project like it was for a big company. At the start, I used the
    best practices and design patterns, but the project took too long to build
    and ship. Because of that, we couldn&apos;t release or test it to see if the
    product was useful. The first thing I changed was moving from SOLID
    principles and use cases to a simple MVC, and this made everything faster to
    build.
  </>,
  <>
    Since we were working in our free time, we hired an intern to speed things
    up. I planned their tasks so they could work on things that weren&apos;t
    worth *our* time, like improving the UI and making it responsive. Meanwhile,
    I focused on the core logic and main features of the product.
  </>,
  <>
    Another challenge was selling the product. We had to figure out how to do
    it. We started talking to people who could join us as affiliates and sell
    the product for us. This was an interesting step because it helped us
    connect with many people in the market.
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    Created a strong SaaS template with authentication, Stripe integration for
    plan limits, organization and project management, team invites, a landing
    page/app structure, and a fast script to configure a new project structure
    in literally 2 seconds.
  </>,
  <>
    An embed that can be added to your website, fully customized to match your
    brand.
  </>,
  <>
    A real-time chat where clients can pause the AI and take over the
    conversation themselves.
  </>,
  <>A playground page to test the agents.</>,
  <>Beautiful animations to make the experience smoother 🤩.</>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    I learned a lot about business because the final user doesn&apos;t even know
    which technology we are using. One big takeaway for me is understanding the
    timing of a product. If it&apos;s an MVP to test an idea, some things are
    more important than creating perfect, maintainable code.
  </>,
  <>
    If I build another app, I will focus on getting clients before making the
    product. That way, I can create something the market is actually interested
    in. For example, I would build a landing page with a &apos;join on
    waitlist&apos; button to test market interest.
  </>,
  <>
    When you teach people, their performance doesn&apos;t just double it grows
    even more. Over time, the people you hire start to understand how to get
    things done, and they become self-driven to complete tasks and even create
    their own tasks.
  </>
]
