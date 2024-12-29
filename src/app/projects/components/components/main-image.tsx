'use client'

import { motion } from 'framer-motion'
import { Project } from '../../data/projects'

export const MainImage = ({ project }: { project: Project }) => {
  return (
    <motion.img
      layoutId={`image-${project.slug}`}
      transition={{ duration: 1 }}
      src={project.image}
      alt={project.name}
      className="aspect-video w-96 rounded-md object-cover"
    />
  )
}
