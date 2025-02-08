'use client'

import { motion } from 'framer-motion'
import statue from '../../../assets/statue.webp'

export const StrongMan = () => {
  return (
    <motion.img
      src={statue.src}
      alt="statue"
      className="sticky top-40 float-start hidden h-full w-1/2 lg:block"
      initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      style={{
        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
      }}
    />
  )
}
