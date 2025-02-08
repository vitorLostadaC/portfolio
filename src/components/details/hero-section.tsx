'use client'

import { ModalImage } from '@/app/projects/components/modal-image'
import { ProjectTag } from '@/app/projects/data/project-tag'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { JSX } from 'react'
import { Title } from './title'

interface HeroProps {
  title: string
  description: JSX.Element | JSX.Element[]
  stack?: ProjectTag[]
  image: StaticImageData
  slug: string
}

const ImageMotion = motion.create(Image)

export const Hero = ({ title, description, stack, image, slug }: HeroProps) => {
  const descriptionElements = Array.isArray(description)
    ? description
    : [description]

  return (
    <div className="flex flex-col gap-10">
      <Title title={title} slug={slug} />
      <div className="flex flex-col gap-4">
        {descriptionElements.map((element, index) => (
          <p className="max-w-3xl leading-8 text-muted-foreground" key={index}>
            {element}
          </p>
        ))}
      </div>
      {stack && (
        <div className="flex max-w-xl flex-wrap gap-2">
          {stack.map((tag, index) => (
            <Badge key={tag} variant={index >= 3 ? 'secondary' : 'default'}>
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <ModalImage image={image} alt={title} slug={slug}>
        <ImageMotion
          src={image}
          alt={title}
          width={1500}
          height={1000}
          className="mt-5 h-full w-full cursor-pointer rounded-md border shadow-2xl"
          priority
          layoutId={title}
        />
      </ModalImage>
    </div>
  )
}
