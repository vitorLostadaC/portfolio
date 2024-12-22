import Image from 'next/image'
import vitor from '../assets/VitorLostada.webp'
import { motion } from 'framer-motion'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  RoughNotation as RN,
  RoughNotationGroup as RG
} from 'react-rough-notation'

const social = [
  {
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/vitorlostada/'
  },
  {
    icon: GithubIcon,
    url: 'https://github.com/vitorlostadaC'
  },
  {
    icon: YoutubeIcon,
    url: 'https://www.youtube.com/@vitorlostada'
  },
  {
    icon: InstagramIcon,
    url: 'https://www.instagram.com/vitor.lostada/'
  }
]

export const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-8.3rem)] w-full flex-col gap-4">
      <h1 className="text-3xl font-bold">Hello, I&apos;m Vitor! 👋</h1>

      <div className="flex w-full items-start justify-between gap-24">
        <RG show>
          <div className="flex max-w-4xl flex-col gap-4 text-justify text-lg text-muted-foreground">
            <p>
              A software engineer from{' '}
              <RN type="underline" color="var(--highlight-1)">
                Brazil
              </RN>
              . I&apos;m really passionate with UI and build beautiful things
              with{' '}
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
              😍, I started my journey like most developers, I wanted to{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                create games
              </RN>{' '}
              , but as you&apos;re looking at this portfolio, maybe some things
              have changed, haha. I still love games, and probably will create
              games one day, but just on the veeery distant future.
            </p>

            <p>
              I have a{' '}
              <RN type="box" multiline color="var(--highlight-1)">
                routine
              </RN>{' '}
              to do{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                all the things
              </RN>{' '}
              without it, I&apos;m lost so I always take a time do anything that
              I want like work, time to study, reading, going to the gym,
              resting, play a game, recording videos... and this is a pretty
              good summary of my last years.
            </p>
            <p>
              when I&apos;m not learning about development, I try improve my
              soft skill, mainly studing about{' '}
              <RN type="underline" multiline color="var(--highlight-1)">
                psychology
              </RN>
              . These knowledge really help me to have a different perspective
              from the world, understand more about people and how they work.
              Also helping me to be{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                more dicipline
              </RN>{' '}
              and{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                mental control
              </RN>
              , focus on the things that I want.
            </p>

            <p>
              I always{' '}
              <RN type="underline" multiline color="var(--highlight-1)">
                teaching
              </RN>{' '}
              what I learn, these is one of the reasons to me created a{' '}
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
            <div className="flex gap-4">
              {social.map((item, index) => (
                <Button key={index} variant="outline" size="icon" asChild>
                  <a href={item.url} target="_blank">
                    <item.icon />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </RG>
        <Image
          src={vitor.src}
          alt="Vitor"
          width={384}
          height={433}
          className="w-96 rounded-xl border"
        />
      </div>

      <motion.svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mx-auto mb-16 mt-auto text-muted-foreground"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <rect x="5" y="2" width="14" height="20" rx="7" />
        <motion.path
          d="M12 6v4"
          animate={{
            y: [0, 3, 0],
            opacity: [1, 0, 1, 0],
            transition: {
              y: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }
          }}
        />
      </motion.svg>
    </div>
  )
}
