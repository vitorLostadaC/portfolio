import { Hero } from '../components/Hero'
import {
  heroTitle,
  HeroDescription,
  tags,
  problemsDescription,
  problemsTitle
} from './data/project'
import hero from './assets/hero.webp'
import { TextSection } from '../components/TextSection'

export default function AntrolAi() {
  return (
    <div className="flex flex-col gap-10">
      <Hero
        title={heroTitle}
        description={HeroDescription}
        stack={tags}
        imageSrc={hero.src}
      />
      <TextSection title={problemsTitle} description={problemsDescription} />
    </div>
  )
}
