import { ModalImage } from '@/app/projects/components/modal-image'
import { Hero } from '@/components/details/hero-section'
import { TextSection } from '@/components/details/text-section'
import { cn } from '@/lib/utils'
import { RoughNotation as RN } from 'react-rough-notation'
import hero from './assets/hero.webp'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import { ProjectTag } from '@/app/projects/data/project-tag'
import { ProjectSlug } from '@/app/projects/data/project-slug'

export const heroTitle = 'Base 64 to Image'

export const heroDescription = [
  <>
    This is a{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      simple extension
    </RN>{' '}
    that I made to convert between base64 and image, on Resleeve I really needed
    this feature and I couldn&apos;t find any extension that did it, so I made{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      my own
    </RN>
    .
  </>
]

export const tags: ProjectTag[] = [ProjectTag.React, ProjectTag.Typescript]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    Even though this is a very small feature, there were still issues, haha. But
    it was much simpler to handle. The first problem was that I needed to add a
    different way to{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      read WebP images
    </RN>
    . The other issue came from using{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      regex
    </RN>{' '}
    to validate base64. When trying to load a 4K image as base64, the regex
    would throw an error due to the max size. So I just switched my validation
    to JavaScript&apos;s default. I always use{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      open-source libraries
    </RN>{' '}
    as a base for these kinds of things.
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    I learned how the process of publishing an extension on Raycast works, and
    it&apos;s really{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      simple
    </RN>
    . So in the future, I&apos;ll definitely{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      create more extensions
    </RN>{' '}
    whenever I find a need for them.
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

  <TextSection
    side="center"
    title={problemsTitle}
    description={problemsDescription}
  />,

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

  <TextSection
    title={lessonsTitle}
    description={lessonsDescription}
    side="left"
    marginView="0px"
  />
]
