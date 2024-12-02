import { Badge } from '@/components/ui/badge'
import { Tag } from '@/app/projects/data/tags'
import { RoughNotationGroup as RNG } from 'react-rough-notation'
interface HeroProps {
  title: string
  description: JSX.Element
  stack: Tag[]
  imageSrc: string
}

//! Record one video to show all the content rigth
//! implement a hightlight feature using npm

export const Hero = ({ title, description, stack, imageSrc }: HeroProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="max-w-3xl text-lg text-muted-foreground">
        <RNG show>{description}</RNG>
      </p>
      <div className="flex gap-2 flex-wrap max-w-xl">
        {stack.map((tag, index) => (
          <Badge variant={index >= 3 ? 'secondary' : 'default'} key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-full border rounded-md mt-5 shadow-2xl"
      />
    </div>
  )
}
