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
import posthog from 'posthog-js'

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
    <div className="flex w-full flex-col gap-4 lg:h-[calc(100vh-8.3rem)]">
      <h1 className="text-3xl font-bold">Hello, I&apos;m Vitor! 👋</h1>

      <div className="flex w-full items-start justify-between gap-12 xl:gap-24">
        <RG show>
          <div className="flex max-w-4xl flex-col gap-4 text-justify text-lg text-muted-foreground">
            <p>
              A software engineer from{' '}
              <RN type="underline" color="var(--highlight-1)">
                Brazil
              </RN>
              I started my journey like most developers, I wanted to{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                create games
              </RN>{' '}
              , but as you&apos;re looking at this portfolio, maybe some things
              have changed, haha.
            </p>

            <p>
              I follow a daily{' '}
              <RN type="box" multiline color="var(--highlight-1)">
                routine
              </RN>{' '}
              to keep everything in order. Without it, I feel lost (really
              haha). My routine includes time for work, studying, reading, going
              to the gym, resting and recording videos. This routine has been a
              pretty good summary of my last few years.
            </p>
            <p>
              When I’m not learning about development, I focus on improving my
              soft skills, mainly by studying
              <RN type="underline" multiline color="var(--highlight-1)">
                psychology
              </RN>
              . This knowledge helps me see the world from different
              perspectives, understand people better, and learn how they think.
              It also helps me build{' '}
              <RN type="underline" multiline color="var(--highlight-2)">
                dicipline,
              </RN>{' '}
              mental control, and focus on the things I want to achieve.
            </p>

            <p>
              I love{' '}
              <RN type="underline" multiline color="var(--highlight-1)">
                teaching
              </RN>{' '}
              what I learn. That’s one of the reasons I created a{' '}
              <a
                href="https://www.youtube.com/@vitorlostada"
                target="_blank"
                className="underline"
              >
                youtube channel.
              </a>
              Sharing knowledge with others is something I truly enjoy, and as a
              bonus, I learn even more when I teach.
            </p>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  onClick={() =>
                    posthog.capture('social_link_clicked', { link: item.url })
                  }
                >
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
          className="hidden w-80 rounded-xl border lg:block xl:w-96"
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
        className="mx-auto mb-16 mt-auto hidden text-muted-foreground lg:block"
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
