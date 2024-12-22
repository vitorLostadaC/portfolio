'use client'

import { Hero } from './components/hero'
import statue from './assets/statue.png'
import { motion } from 'framer-motion'

const rules: {
  title: string
  description: string
}[] = [
  {
    title:
      'The most impressive human feats are, in reality, the aggregate of innumerable isolated elements, each of which, in a certain sense, is not extraordinary in itself.',
    description:
      "My main focus has always been and still is to keep improving every day, even if it's just baby steps—learning one new thing, doing something different—but never stopping. In my mind, the key to success is not doing a lot of things in a short time but doing the same thing consistently over a long period."
  },
  {
    title: 'The only way to go fast, is to go well.',
    description:
      'Rush things could give the idea that things are going well, but there’s no way to run fast while running wrong. I always prioritize quality over quantity.'
  },

  {
    title: 'Just focus on one thing at a time.',
    description:
      "I already tried doing a lot of things at the same time, but what I noticed is that if you try to do everything at once, you'll be like a duck—flying, walking, and swimming, but not doing any of them well. So, I just focus on one thing at a time."
  },
  {
    title: 'Less but better.',
    description:
      "There will always be very good opportunities, but fewer are truly exceptional, and that's where I try to focus my time. I do what has more potential, following the classic 80/20 rule."
  },
  {
    title: 'Stop to be a learner, be a doer.',
    description:
      'The most important thing I always do is use what I learn as soon as possible.'
  }
]

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />

      <div className="flex w-full flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Rules of my life</h1>
          <p className="max-w-2xl text-muted-foreground">
            Some phrases that summarize my way of thinking and approaching life.
            These are principles I&pos;ve developed over time through experience
            and reflection, helping me stay focused and productive in both
            personal and professional endeavors.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex max-w-2xl flex-col gap-8">
            {rules.map((rule) => (
              <div key={rule.title}>
                <blockquote className="my-4 border-l-4 border-muted-foreground pl-4 text-lg font-semibold italic">
                  {rule.title}
                </blockquote>
                <p className="text-muted-foreground">{rule.description}</p>
              </div>
            ))}
          </div>
          <motion.img
            src={statue.src}
            alt="statue"
            className="h-full w-1/2"
            initial={{ opacity: 0, scale: 0.8, rotateX: 45, perspective: 1000 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
            }}
            onMouseMove={(e) => {
              const { currentTarget, clientX, clientY } = e
              const { left, top, width, height } =
                currentTarget.getBoundingClientRect()
              const x = (clientX - left - width / 2) / 25
              const y = (clientY - top - height / 2) / 25
              currentTarget.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1)`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
            }}
          />
        </div>
      </div>
    </div>
  )
}
