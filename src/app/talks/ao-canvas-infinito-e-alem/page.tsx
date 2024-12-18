import {
  heroTitle,
  heroDescription,
  aboutDescription,
  aboutTitle,
  keyInsigthsDescription,
  keyInsigthsTitle
} from './data/project'
import hero from './assets/hero.webp'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import e from './assets/e.webp'
import { cn } from '@/lib/utils'
import { ModalImage } from '@/app/projects/components/modal-image'
import { Hero } from '@/components/details/hero-section'
import { TextSection } from '@/components/details/text-section'

export default function AoCanvasInfinitoEAlem() {
  return (
    <div className="flex flex-col gap-10">
      <Hero
        title={heroTitle}
        description={heroDescription}
        image={hero}
        slug="ao-canvas-infinito-e-alem"
      />
      <TextSection
        title={keyInsigthsTitle}
        description={keyInsigthsDescription}
        side="center"
      />

      <div className="grid grid-cols-2 items-center gap-6">
        {[a, c, b, d].map((item, index) => (
          <ModalImage
            key={index}
            image={item}
            alt={`antrol-ai-${index}`}
            className={cn('rounded-md border', {})}
          />
        ))}
      </div>
      <TextSection
        title={aboutTitle}
        description={aboutDescription}
        side="center"
      />

      <div className="flex flex-col gap-2">
        <ModalImage
          image={e}
          alt={`antrol-ai-4`}
          className={cn('rounded-md border')}
        />
      </div>
    </div>
  )
}
