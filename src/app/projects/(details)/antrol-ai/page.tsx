import { Hero } from '../components/Hero'
import { title, description, tags } from './data/project'
import hero from './assets/hero.webp'

export default function AntrolAi() {
  return (
    <Hero
      title={title}
      description={description}
      stack={tags}
      imageSrc={hero.src}
    />
  )
}
