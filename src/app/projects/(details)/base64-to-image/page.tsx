import { Hero } from '../../../../components/details/hero-section'
import {
  heroTitle,
  heroDescription,
  tags,
  problemsDescription,
  problemsTitle,
  lessonsDescription,
  lessonsTitle
} from './data/project'
import hero from './assets/hero.webp'
import { TextSection } from '../../../../components/details/text-section'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
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
        slug="base64-to-image"
      />

      <TextSection
        side="center"
        title={problemsTitle}
        description={problemsDescription}
      />

      <div className="grid grid-cols-2 items-center gap-6">
        {[a, b, c, d].map((item, index) => (
          <ModalImage
            key={index}
            image={item}
            alt={`antrol-ai-${index}`}
            className={cn('rounded-md border')}
            slug="base64-to-image"
          />
        ))}
      </div>

      <TextSection
        title={lessonsTitle}
        description={lessonsDescription}
        side="left"
        marginView="0px"
      />
    </div>
  )
}
