import { ProjectTag } from '@/app/projects/data/projectTag'
import { RoughNotation as RN } from 'react-rough-notation'

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
