import { ModalImage } from '@/app/projects/components/modal-image'
import { TalkSlug } from '@/app/talks/data/talk-slug'
import { Hero } from '@/components/details/hero-section'
import { TextSection } from '@/components/details/text-section'
import { cn } from '@/lib/utils'
import { RoughNotation as RN } from 'react-rough-notation'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import e from './assets/e.webp'
import hero from './assets/hero.webp'

export const heroTitle = 'Ao Canvas infinito e além'

export const heroDescription = [
  <>
    This was my{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      first talk at a conference
    </RN>
    . I don&apos;t have issues with anxiety, but I was a bit nervous not about
    speaking in public, but about{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      keeping the audience engaged
    </RN>{' '}
    and clearly sharing what I wanted to say. After talking with everyone, I was
    really happy with the{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      feedback they gave me.
    </RN>{' '}
    Some people pointed out things I could improve for next time, and I truly
    appreciate that.{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      Feedback helps us keep improving.
    </RN>
  </>
]

export const keyInsigthsTitle = 'Key Insights'

export const keyInsigthsDescription = [
  <>
    I think the{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      most exciting part
    </RN>{' '}
    I noticed is that when you&apos;re a speaker, other speakers want to talk
    with you, and other people also want to{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      talk with you.
    </RN>{' '}
    This is the part I really loved because I had the opportunity to talk with{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      great developers,
    </RN>{' '}
    who work at big companiesa and it was{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      truly amazing.
    </RN>
    This networking is the best thing I gained from this experience and
    motivates me even more to keep putting myself out there on the internet and
    try to speak at more conferences.
  </>
]

export const aboutTitle = 'About'

export const aboutDescription = [
  <>
    I talked about how an{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      infinite canvas
    </RN>{' '}
    works under the hood and how I built it. I explained concepts like relative
    positioning and the canvas view, how movement and scaling work, how to
    interact with the canvas from the client&apos;s perspective, the future of
    infinite canvas, the UX perspective, and more. But my{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      main focus
    </RN>{' '}
    was to{' '}
    <RN type="underline" multiline color="var(--highlight-2 )">
      explain the foundation
    </RN>{' '}
    so everyone could build their own infinite canvas without being tied to any
    specific canvas library.
  </>
]

export const aoCanvasInfinitoEAlemDetails = [
  <Hero
    title={heroTitle}
    description={heroDescription}
    image={hero}
    slug={TalkSlug.AoCanvasInfinitoEAlem}
  />,
  <TextSection title={keyInsigthsTitle} description={keyInsigthsDescription} />,

  <div className="grid grid-cols-2 items-center gap-6">
    {[a, c, b, d].map((item, index) => (
      <ModalImage
        key={index}
        image={item}
        alt={`antrol-ai-${index}`}
        className={cn('rounded-md border', {})}
        slug={TalkSlug.AoCanvasInfinitoEAlem}
      />
    ))}
  </div>,
  <TextSection title={aboutTitle} description={aboutDescription} />,

  <div className="flex flex-col gap-2">
    <ModalImage
      image={e}
      alt={`antrol-ai-4`}
      className={cn('rounded-md border')}
      slug={TalkSlug.AoCanvasInfinitoEAlem}
    />
  </div>
]
