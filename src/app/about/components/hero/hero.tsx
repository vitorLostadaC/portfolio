import twitterLottie from '@/../public/assets/icons/twitter.json'
import twitter from '@/../public/assets/icons/twitter.svg'

import githubLottie from '@/../public/assets/icons/github.json'
import github from '@/../public/assets/icons/github.svg'

import linkedinLottie from '@/../public/assets/icons/linkedin.json'
import linkedin from '@/../public/assets/icons/linkedin.svg'

import youtubeLottie from '@/../public/assets/icons/youtube.json'
import youtube from '@/../public/assets/icons/youtube.svg'

import instagramLottie from '@/../public/assets/icons/instagram.json'
import instagram from '@/../public/assets/icons/instagram.svg'

import { Highlight } from '@/components/hightlight'
import Image from 'next/image'
import vitor from '../../assets/VitorLostada.webp'
import { SocialButton } from './components/social-button'

export interface Social {
  name: string
  icon: string
  animation: unknown
  url: string
  loop: boolean
}

const social: Social[] = [
  {
    name: 'Twitter',
    icon: twitter.src,
    animation: twitterLottie,
    url: 'https://twitter.com/vitorlostada',
    loop: true
  },
  {
    name: 'Github',
    icon: github.src,
    animation: githubLottie,
    url: 'https://github.com/vitorlostadaC',
    loop: true
  },
  {
    name: 'Linkedin',
    icon: linkedin.src,
    animation: linkedinLottie,
    url: 'https://www.linkedin.com/in/vitorlostada/',
    loop: true
  },
  {
    name: 'Youtube',
    icon: youtube.src,
    animation: youtubeLottie,
    url: 'https://www.youtube.com/@vitorlostada',
    loop: false
  },
  {
    name: 'Instagram',
    icon: instagram.src,
    animation: instagramLottie,
    url: 'https://www.instagram.com/vitor.lostada/',
    loop: false
  }
]

export const Hero = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        Hello, I&apos;m Vitor!
      </h1>

      <div className="flex w-full items-start justify-between gap-12 xl:gap-24">
        <div className="flex max-w-4xl flex-col gap-4 text-justify text-base leading-8 text-muted-foreground">
          <p>
            A software engineer from <Highlight>Brazil</Highlight>, I started my
            journey like most developers, I wanted to create games , but as
            you&apos;re looking at this portfolio, maybe some things have
            changed, haha.
          </p>

          <p>
            I follow a <Highlight>daily routine</Highlight> to keep everything
            in order. Without it, I feel lost (really haha). My routine includes
            time for work, studying, reading, going to the gym, resting and
            recording videos. This routine has been a pretty good summary of my
            last few years.
          </p>
          <p>
            When I&apos;m not learning about development, I focus on improving
            my soft skills, mainly by <Highlight>studying psychology</Highlight>
            . This knowledge helps me see the world from different perspectives,
            understand people better, and learn how they think. It also helps me
            build <Highlight>dicipline,</Highlight> mental control, and focus on
            the things I want to achieve.
          </p>

          <p>
            I love <Highlight>teaching</Highlight> what I learn. That&apos;s one
            of the reasons I created a{' '}
            <a
              href="https://www.youtube.com/@vitorlostada"
              target="_blank"
              className="underline"
            >
              youtube channel
            </a>
            . Sharing knowledge with others is something I truly enjoy, and as a
            bonus, I learn even more when I teach.
          </p>
          <div className="flex gap-4">
            {social.map((item) => (
              <SocialButton socialMidia={item} key={item.name} />
            ))}
          </div>
        </div>
        <Image
          src={vitor.src}
          alt="Vitor"
          width={384}
          height={433}
          className="hidden w-80 rounded-xl border lg:block xl:w-96"
        />
      </div>
    </div>
  )
}
