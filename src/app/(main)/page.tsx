'use client'

import { Button } from '@/components/ui/button'
import { anim, CustomVariant } from '@/lib/utils'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const Gradient = dynamic(
  () => import('./components/gradient').then((mod) => mod.Gradient),
  {
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)

const MotionLink = motion.create(Link)

const buttonsAnim: CustomVariant = {
  enter: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8
    }
  }
}

const buttonChild: CustomVariant = {
  initial: {
    opacity: 0,
    y: 50
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
}

export default function Home() {
  return (
    <>
      <motion.div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3
          }}
          className="text-8xl font-bold"
        >
          Vitor Lostada
        </motion.h1>
        <motion.h4
          className="text-4xl text-muted-foreground"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            type: 'spring'
          }}
        >
          Pixel Perfect Frontend Developer
        </motion.h4>
        <motion.div
          className="flex items-center justify-center gap-4"
          {...anim(buttonsAnim)}
        >
          <Button asChild variant={'outline'} size={'lg'}>
            <MotionLink href={'about'} variants={buttonChild}>
              About me
            </MotionLink>
          </Button>
          <Button asChild size={'lg'}>
            <MotionLink href={'projects'} variants={buttonChild}>
              Projects
            </MotionLink>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.6,
          duration: 3
        }}
        className="fixed inset-0 -z-10"
      >
        <Gradient />
      </motion.div>
    </>
  )
}
