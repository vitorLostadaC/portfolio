'use client'

import { Badge } from '@/components/ui/badge'
import { Tag } from '@/app/projects/data/tags'
import { RoughNotationGroup as RNG } from 'react-rough-notation'
import { motion } from 'motion/react'

interface HeroProps {
  title: string
  description: JSX.Element
  stack: Tag[]
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
  return (
    <div className="flex flex-col gap-10">
      <motion.h1 className="text-4xl font-bold" layoutId={`title-${slug}`}>
        {title}
      </motion.h1>
      <p className="max-w-3xl text-lg text-muted-foreground">
        <RNG show>{description}</RNG>
      </p>
      <div className="flex gap-2 flex-wrap max-w-xl">
        {stack.map((tag, index) => (
          <Badge key={tag} variant={index >= 3 ? 'secondary' : 'default'}>
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
