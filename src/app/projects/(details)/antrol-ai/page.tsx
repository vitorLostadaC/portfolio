import { Hero } from '../components/Hero'
import {
  heroTitle,
  HeroDescription,
  tags,
  problemsDescription,
  problemsTitle,
  goalDescription,
  goalTitle,
  lessonsDescription,
  lessonsTitle
} from './data/project'
import hero from './assets/hero.webp'
import { TextSection } from '../components/TextSection'
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import e from './assets/e.png'

export default function AntrolAi() {
  return (
    <div className="flex flex-col gap-10">
      <Hero
        title={heroTitle}
        description={HeroDescription}
        stack={tags}
        imageSrc={hero.src}
      />
      <TextSection title={goalTitle} description={goalDescription} />

      <div className="grid grid-cols-2 gap-6 items-center">
        <img src={a.src} alt="a" className="border rounded-md" />
        <img src={e.src} alt="e" className="border row-span-2 rounded-md" />
        <img src={b.src} alt="b" className="border rounded-md" />
      </div>
      <TextSection
        side="center"
        title={problemsTitle}
        description={problemsDescription}
      />
      <div className="flex flex-col gap-2">
        <img src={c.src} alt="c" className="border rounded-md" />
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
      </div>
      <TextSection
        title={lessonsTitle}
        description={lessonsDescription}
        side="left"
      />
    </div>
  )
}
