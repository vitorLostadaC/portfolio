import { ModalImage } from '@/app/projects/components/modal-image'
import { ProjectSlug } from '@/app/projects/data/project-slug'
import { ProjectTag } from '@/app/projects/data/project-tag'
import { Hero } from '@/components/details/hero-section'
import { TextSection } from '@/components/details/text-section'
import { Highlight } from '@/components/hightlight'
import { cn } from '@/lib/utils'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import hero from './assets/hero.webp'

export const heroTitle = 'Base 64 to Image'

export const heroDescription = [
  <>
    This is a <Highlight>simple extension</Highlight> that I made to convert
    between base64 and image, on Resleeve I really needed this feature and I
    couldn&apos;t find any extension that did it, so I made{' '}
    <Highlight>my own</Highlight>.
  </>
]

export const tags: ProjectTag[] = [ProjectTag.React, ProjectTag.Typescript]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    Even though this is a very small feature, there were still issues, haha. But
    it was much simpler to handle. The first problem was that I needed to add a
    different way to <Highlight>read WebP images</Highlight>. The other issue
    came from using <Highlight>regex</Highlight> to validate base64. When trying
    to load a 4K image as base64, the regex would throw an error due to the max
    size. So I just switched my validation to JavaScript&apos;s default. I
    always use <Highlight>open-source libraries</Highlight> as a base for these
    kinds of things.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    I learned how the process of publishing an extension on Raycast works, and
    it&apos;s really <Highlight>simple</Highlight>. So in the future, I&apos;ll
    definitely <Highlight>create more extensions</Highlight> whenever I find a
    need for them.
  </>
]

export const base64ToImageDetails = [
  <Hero
    title={heroTitle}
    description={heroDescription}
    stack={tags}
    image={hero}
    slug={ProjectSlug.Base64ToImage}
  />,

  <TextSection title={problemsTitle} description={problemsDescription} />,

  <div className="grid grid-cols-2 items-center gap-6">
    {[a, b, c, d].map((item, index) => (
      <ModalImage
        key={index}
        image={item}
        alt={`antrol-ai-${index}`}
        className={cn('rounded-md border')}
        slug={ProjectSlug.Base64ToImage}
      />
    ))}
  </div>,

  <TextSection title={lessonsTitle} description={lessonsDescription} />
]
