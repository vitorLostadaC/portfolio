'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { RoughNotationGroup as RNG } from 'react-rough-notation'

interface TextProps {
  title: string
  description: JSX.Element | string | (JSX.Element | string)[]
  side?: 'left' | 'right' | 'center'
  marginView?: string
}

export const TextSection = ({
  title,
  description,
  side,
  marginView: margin
}: TextProps) => {
  const divRef = useRef<HTMLLIElement | HTMLParagraphElement | null>(null)
  const inView = useInView(divRef, {
    once: true,
    margin: margin ?? ('-150px' as any) // framer-motion MarginType are not exported
  })

  return (
    <div
      className={cn('flex max-w-4xl flex-col gap-4', {
        'ml-auto': side === 'right',
        'mx-auto text-center': side === 'center'
      })}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <RNG show={inView}>
        {Array.isArray(description) ? (
          <ul className="flex flex-col gap-4 text-lg text-muted-foreground">
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
            className="text-lg text-muted-foreground"
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
