import { Hero } from '../_components/hero-section'
import {
  heroTitle,
  heroDescription,
  tags,
  problemsDescription,
  problemsTitle,
  goalDescription,
  goalTitle,
  lessonsDescription,
  lessonsTitle,
  keyFeaturesTitle,
  keyFeaturesDescription
} from './data/project'
import hero from './assets/hero.webp'
import { TextSection } from '../_components/text-section'
import a from './assets/a.png'
import b from './assets/b.png'
import c from './assets/c.png'
import e from './assets/e.png'
import { cn } from '@/lib/utils'
import { ModalImage } from '../../components/modal-image'

export default function Consai() {
  return (
    <div className="flex flex-col gap-10">
      <Hero
        title={heroTitle}
        description={heroDescription}
        stack={tags}
        imageSrc={hero.src}
        slug="consai"
      />
      <TextSection title={goalTitle} description={goalDescription} />
      <TextSection
        title={keyFeaturesTitle}
        description={keyFeaturesDescription}
        side="center"
      />

      <div className="grid grid-cols-2 items-center gap-6">
        {[a, e, b].map((item, index) => (
          <ModalImage
            key={index}
            image={item}
            alt={`antrol-ai-${index}`}
            className={cn('rounded-md border', {
              'row-span-2': index === 1
            })}
          />
        ))}
      </div>
      <TextSection
        side="center"
        title={problemsTitle}
        description={problemsDescription}
      />
      <div className="flex flex-col gap-2">
        <ModalImage
          image={c}
          alt={`antrol-ai-4`}
          className={cn('rounded-md border')}
        />
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
