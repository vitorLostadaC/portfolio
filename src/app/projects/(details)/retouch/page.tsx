import { Hero } from '../../../../components/details/hero-section'
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
import { TextSection } from '../../../../components/details/text-section'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import e from './assets/e.webp'
import { cn } from '@/lib/utils'
import { ModalImage } from '../../components/modal-image'

export default function Consai() {
  return (
    <div className="flex flex-col gap-10">
      <Hero
        title={heroTitle}
        description={heroDescription}
        stack={tags}
        image={hero}
        slug="retouch"
      />
      <TextSection
        side="center"
        title={goalTitle}
        description={goalDescription}
      />
      <TextSection
        title={keyFeaturesTitle}
        description={keyFeaturesDescription}
        side="center"
      />

      <div className="grid grid-cols-2 items-center gap-6">
        {[a, b, c, d].map((item, index) => (
          <ModalImage
            key={index}
            image={item}
            alt={`antrol-ai-${index}`}
            slug="retouch"
            className={cn('rounded-md border')}
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
          image={e}
          alt={`antrol-ai-4`}
          className={cn('rounded-md border')}
          slug="retouch"
        />
      </div>
      <TextSection
        title={lessonsTitle}
        description={lessonsDescription}
        side="left"
      />
    </div>
  )
}
