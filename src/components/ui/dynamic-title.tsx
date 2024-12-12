'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface DynamicTitleProps {
  title: string
  slug: string
  className?: string
}

export const DynamicTitle = ({ title, slug, className }: DynamicTitleProps) => {
  return (
    <motion.h3
      className={cn('text-lg font-bold', className)}
      layoutId={`title-${slug}`}
    >
      {title}
    </motion.h3>
  )
}
