'use client'

import { Button } from '@/components/ui/button'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import posthog from 'posthog-js'
import { useRef, useState } from 'react'
import { Social } from '../../hero'

interface SocialButtonProps {
  socialMidia: Social
}

export const SocialButton = ({ socialMidia }: SocialButtonProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Button
      variant="outline"
      className="size-10 cursor-pointer"
      size="icon"
      asChild
      onMouseEnter={() => {
        posthog.capture('social_link_hover', { link: socialMidia.name })
        if (lottieRef.current) {
          lottieRef.current.setDirection(1) // Play forward
          lottieRef.current.play()
          setIsAnimating(true) // Start animation
          setIsHovered(true)
        }
      }}
      onMouseLeave={() => {
        if (lottieRef.current) {
          lottieRef.current.setDirection(-1) // Play reverse
          lottieRef.current.play()
          setIsAnimating(socialMidia.loop ? false : true) // Start reverse animation
          setIsHovered(false)
        }
      }}
      onClick={() =>
        posthog.capture('social_link_clicked', { link: socialMidia.name })
      }
    >
      <a href={socialMidia.url} target="_blank" className="group">
        <img
          src={socialMidia.icon}
          alt={socialMidia.name}
          className={`${isAnimating || isHovered ? 'hidden' : 'block'}`}
        />
        <Lottie
          lottieRef={lottieRef}
          animationData={socialMidia.animation}
          loop={socialMidia.loop}
          autoplay={false}
          className={`${isAnimating || isHovered ? 'block' : 'hidden'}`}
          onComplete={() => {
            setIsAnimating(false)
          }}
          width={10}
          height={10}
        />
      </a>
    </Button>
  )
}
