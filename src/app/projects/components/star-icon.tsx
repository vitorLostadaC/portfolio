'use client'

import { motion } from 'framer-motion'
import { StarIcon } from 'lucide-react'

const StarIconMotion = motion.create(StarIcon)

export const Star = () => {
  return (
    <StarIconMotion
      initial={{ scale: 0.5, rotate: 0 }}
      animate={{
        scale: [0.8, 1.2, 1],
        rotate: 215,
        transition: {
          duration: 1
        }
      }}
      whileHover={{
        rotate: 360,
        transition: {
          duration: 1,
          ease: 'linear',
          repeat: Infinity
        }
      }}
      whileTap={{
        scale: 0.8,
        transition: {
          duration: 0.2
        }
      }}
      className="cursor-pointer select-none fill-yellow-600 text-yellow-600 focus:outline-none focus:ring-0"
    />
  )
}
