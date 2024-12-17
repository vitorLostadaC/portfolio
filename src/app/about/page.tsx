'use client'

import vitor from './assets/VitorLostada.webp'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="flex gap-16">
      <div className="flex w-full flex-col gap-4">
        <h1 className="text-3xl font-bold">Hello, I&apos;m Vitor! 👋</h1>

        <div className="flex w-full justify-between gap-24">
          <div className="flex max-w-4xl flex-col gap-4 text-justify text-lg text-muted-foreground">
            <p>
              I&apos;m Vitor, a software engineer from Brazil. I&apos;m really
              passionate with UI and build beautiful things with{' '}
              {Array.from('great animations').map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              😍, I started my journey like most developers, I wanted to create
              games, but as you&apos;re looking at this portfolio, maybe some
              things have changed, haha. I still love games, and probably will
              create games one day, but just on the veeery distant future.
            </p>

            <p>
              I have a routine to do all the things without it, I&apos;m lost so
              I always take a time do anything that I want like work, time to
              study, reading, going to the gym, resting, play a game, recording
              videos... and this is a pretty good summary of my last years.
            </p>
            {/* <p>
              when I&apos;m not learning about development, I try improve my
              soft skill, mainly studing about psychology. These knowledge
              really help me to have a different perspective from the world,
              understand more about people and how they work. Also helping me to
              be more dicipline and mental control, focus on the things that I
              want.
            </p> */}

            <p>
              I always teaching what I learn, these is one of the reasons to me
              created a{' '}
              <a
                href="https://www.youtube.com/@vitorlostada"
                target="_blank"
                className="underline"
              >
                youtube channel
              </a>
              , I really like to teach and share my knowledge with others and as
              a bonus I can learn more when I teach
            </p>
          </div>
          <img src={vitor.src} alt="Vitor" className="w-96 rounded-xl border" />
        </div>
      </div>
    </div>
  )
}
