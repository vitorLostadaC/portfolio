'use client'

import { motion } from 'motion/react'
import { Project } from '../../data/project'

export const MainImage = ({ project }: { project: Project }) => {
  return (
    <motion.img
      layoutId={`image-${project.slug}`}
      transition={{ duration: 1 }}
      src={project.image}
      alt={project.name}
      className="w-96 rounded-md aspect-video object-cover"
    />
  )
}