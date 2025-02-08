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
import e from './assets/e.webp'
import hero from './assets/hero.webp'

export const heroTitle = 'Consai'

export const heroDescription = [
  <>
    Consai is my <Highlight>first SaaS</Highlight> application, made to{' '}
    <Highlight>try and earn money</Highlight>, and this changed all our
    decisions. I built it with my friend{' '}
    <a
      className="underline"
      href="https://www.linkedin.com/in/leomconti/"
      target="_blank"
    >
      Leo
    </a>
    . We found an opportunity with AI and decided to create this SaaS to try
    selling it to other businesses. We needed to{' '}
    <Highlight>ship fast</Highlight> to get our space in the market. I built the
    whole application (backend and frontend), and he worked on the AI API. We
    had many challenges and had to stop thinking{' '}
    <Highlight>like developers</Highlight> and start thinking like{' '}
    <Highlight>CEOs</Highlight>.
  </>
]

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
    Our main goal was try get <Highlight>max money as possible</Highlight>, and
    build a <Highlight>strong</Highlight> alternative for the solutions already
    existents, we wanted understand more about{' '}
    <Highlight>market, sales, marketing, and how to grow a product</Highlight>
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    Created a <Highlight>strong SaaS template</Highlight> with authentication,
    Stripe integration for plan limits, organization and project management,
    team invites, a basic landing page/app structure , and a{' '}
    <Highlight>fast script</Highlight> to configure a{' '}
    <Highlight>new project structure</Highlight> in literally{' '}
    <Highlight>2 seconds</Highlight>.
  </>,
  <>
    <Highlight>An embed</Highlight> that can be added to your website,{' '}
    <Highlight>fully customized</Highlight> to match your brand.
  </>,
  <>
    A <Highlight>real-time chat</Highlight> where clients can pause the AI and
    take over the conversation themselves.
  </>,
  <>
    <Highlight>A playground page</Highlight> to test the agents.
  </>,
  <>
    <Highlight>Beautiful animations</Highlight> to make the experience smoother
    🤩.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    <Highlight>
      We built the project like it was for a big company with a mature product
    </Highlight>
    . At the start, I used best practices and design patterns, but the project
    took too long to build and ship. Because of that, we couldn&apos;t test if
    the product was useful. The first thing I changed was moving to a{' '}
    <Highlight>simple MVC</Highlight> approach, which made everything faster to
    build.
  </>,
  <>
    Since we were working in our free time, we hired an intern. I planned their
    tasks so they could work on things like improving the UI and making it
    responsive. Meanwhile, I focused on the{' '}
    <Highlight>core logic and main features</Highlight> of the product.
  </>,
  <>
    Another challenge was{' '}
    <Highlight>figuring out how to sell the product</Highlight>. We started by
    initiating affiliate partnerships to have others sell the product for us,
    which helped us connect with key market players.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    I learned a lot about <Highlight>business</Highlight> because the final user
    doesn&apos;t even know which technology we are using. One big takeaway for
    me is <Highlight>understanding the timing of a product</Highlight>. If
    it&apos;s an MVP to test an idea, some things are{' '}
    <Highlight>more critical than perfection</Highlight> in coding.
  </>,
  <>
    When you <Highlight>mentor people</Highlight>, their performance{' '}
    <Highlight>doesn&apos;t just double</Highlight> it{' '}
    <Highlight>grows exponentially</Highlight>. Over time with your guidance,
    the people you hire start to understand how to get things done, and they
    become <Highlight>self-driven leaders</Highlight> who complete tasks and
    even create their own goals.
  </>,
  <>
    Focus on <Highlight>strategic priorities</Highlight> that can{' '}
    <Highlight>significantly grow the product</Highlight>, rather than just
    following personal interests or whims.
  </>
]

export const consaiDetails = [
  <Hero
    title={heroTitle}
    description={heroDescription}
    stack={tags}
    image={hero}
    slug={ProjectSlug.Consai}
  />,
  <TextSection title={goalTitle} description={goalDescription} />,
  <TextSection title={keyFeaturesTitle} description={keyFeaturesDescription} />,

  <div className="grid grid-cols-2 items-center gap-6">
    {[a, b, c, d].map((item, index) => (
      <ModalImage
        key={index}
        image={item}
        alt={`antrol-ai-${index}`}
        className={cn('rounded-md border')}
        slug={ProjectSlug.Consai}
      />
    ))}
  </div>,
  <TextSection title={problemsTitle} description={problemsDescription} />,
  <div className="flex flex-col gap-2">
    <ModalImage
      image={e}
      alt={`antrol-ai-4`}
      className={cn('rounded-md border')}
      slug={ProjectSlug.Consai}
    />
  </div>,
  <TextSection title={lessonsTitle} description={lessonsDescription} />
]
