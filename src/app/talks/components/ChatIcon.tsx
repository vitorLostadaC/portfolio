'use client'

import { motion } from 'framer-motion'

const paths = ['M13 8 H7', 'M17 12 H7']

export const ChatIcon = () => {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      whileHover="hover"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8 }}
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      />

      {paths.map((path, index) => (
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1, opacity: 0 }}
          animate={{ pathLength: 1, pathOffset: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 + 0.2 * index }}
          d={path}
          key={index}
        />
      ))}
    </motion.svg>
  )
}
