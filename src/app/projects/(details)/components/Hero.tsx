import { Badge } from '@/components/ui/badge'
import { Tag } from '@/app/projects/data/tags'

interface HeroProps {
  title: string
  description: string
  stack: Tag[]
  imageSrc: string
}

export const Hero = ({ title, description, stack, imageSrc }: HeroProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-justify max-w-3xl">{description}</p>
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
