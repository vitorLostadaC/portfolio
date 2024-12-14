import { Badge } from '@/components/ui/badge'
import { RoughNotationGroup as RNG } from 'react-rough-notation'
import { Title } from './title'
import Image from 'next/image'
import { ProjectTag } from '@/app/projects/data/projectTag'

interface HeroProps {
  title: string
  description: JSX.Element | JSX.Element[]
  stack?: ProjectTag[]
  imageSrc: string
  slug: string
}

export const Hero = ({
  title,
  description,
  stack,
  imageSrc,
  slug
}: HeroProps) => {
  const descriptionElements = Array.isArray(description)
    ? description
    : [description]
  return (
    <div className="flex flex-col gap-10">
      <Title title={title} slug={slug} />
      <RNG show>
        <div className="flex flex-col gap-4">
          {descriptionElements.map((element, index) => (
            <p className="max-w-3xl text-lg text-muted-foreground" key={index}>
              {element}
            </p>
          ))}
        </div>
      </RNG>
      {stack && (
        <div className="flex max-w-xl flex-wrap gap-2">
          {stack.map((tag, index) => (
            <Badge key={tag} variant={index >= 3 ? 'secondary' : 'default'}>
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <Image
        src={imageSrc}
        alt={title}
        width={1500}
        height={1000}
        className="mt-5 h-full w-full rounded-md border shadow-2xl"
        priority
      />
    </div>
  )
}
