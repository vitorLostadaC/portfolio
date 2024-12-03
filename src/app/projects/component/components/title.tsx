'use client'

import { Project } from '../../data/project'
import { motion } from 'motion/react'

export const Title = ({ project }: { project: Project }) => {
  return (
    <motion.h3 className="text-lg font-bold" layoutId={`title-${project.slug}`}>
      {project.name}
    </motion.h3>
  )
}
