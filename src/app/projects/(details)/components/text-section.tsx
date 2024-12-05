'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RoughNotationGroup as RNG } from 'react-rough-notation'

interface TextProps {
  title: string
  description: JSX.Element | string | (JSX.Element | string)[]
  side?: 'left' | 'right' | 'center'
}

export const TextSection = ({ title, description, side }: TextProps) => {
  const divRef = useRef<HTMLLIElement | HTMLParagraphElement | null>(null)
  const inView = useInView(divRef, {
    once: true
  })

  return (
    <div
      className={cn('flex flex-col gap-4 max-w-4xl', {
        'ml-auto': side === 'right',
        'text-center mx-auto': side === 'center'
      })}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <RNG show={inView}>
        {Array.isArray(description) ? (
          <ul className="flex flex-col gap-4 text-muted-foreground text-lg">
            {description.map((item, index) => (
              <li
                key={index}
                ref={(e) => {
                  if (index === 0) {
                    divRef.current = e
                  }
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="text-muted-foreground text-lg"
            ref={(e) => {
              divRef.current = e
            }}
          >
            {description}
          </p>
        )}
      </RNG>
    </div>
  )
}
