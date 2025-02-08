import { ModalImage } from '@/app/projects/components/modal-image'
import { TalkSlug } from '@/app/talks/data/talk-slug'
import { Hero } from '@/components/details/hero-section'
import { TextSection } from '@/components/details/text-section'
import { Highlight } from '@/components/hightlight'
import { cn } from '@/lib/utils'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import e from './assets/e.webp'
import hero from './assets/hero.webp'
export const heroTitle = 'Ao Canvas infinito e além'

export const heroDescription = [
  <>
    This was my <Highlight>first talk at a conference</Highlight>. I don&apos;t
    have issues with anxiety, but I was a bit nervous not about speaking in
    public, but about <Highlight>keeping the audience engaged</Highlight> and
    clearly sharing what I wanted to say. After talking with everyone, I was
    really happy with the <Highlight>feedback they gave me.</Highlight> Some
    people pointed out things I could improve for next time, and I truly
    appreciate that. <Highlight>Feedback helps us keep improving.</Highlight>
  </>
]

export const keyInsigthsTitle = 'Key Insights'

export const keyInsigthsDescription = [
  <>
    I think the <Highlight>most exciting part</Highlight> I noticed is that when
    you&apos;re a speaker, other speakers want to talk with you, and other
    people also want to <Highlight>talk with you.</Highlight> This is the part I
    really loved because I had the opportunity to talk with{' '}
    <Highlight>great developers,</Highlight> who work at big companiesa and it
    was <Highlight>truly amazing.</Highlight>
    This networking is the best thing I gained from this experience and
    motivates me even more to keep putting myself out there on the internet and
    try to speak at more conferences.
  </>
]

export const aboutTitle = 'About'

export const aboutDescription = [
  <>
    I talked about how an <Highlight>infinite canvas</Highlight> works under the
    hood and how I built it. I explained concepts like relative positioning and
    the canvas view, how movement and scaling work, how to interact with the
    canvas from the client&apos;s perspective, the future of infinite canvas,
    the UX perspective, and more. But my <Highlight>main focus</Highlight> was
    to <Highlight>explain the foundation</Highlight> so everyone could build
    their own infinite canvas without being tied to any specific canvas library.
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
