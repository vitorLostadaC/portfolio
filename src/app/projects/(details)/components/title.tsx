'use client'
import { motion } from 'motion/react'

export const Title = ({ title, slug }: { title: string; slug: string }) => {
  return (
    <motion.h1 className="text-4xl font-bold" layoutId={`title-${slug}`}>
      {title}
    </motion.h1>
  )
}