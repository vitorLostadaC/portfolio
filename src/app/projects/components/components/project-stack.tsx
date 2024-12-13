'use client'

import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tag } from '../../data/tags'
import { AnimatePresence, motion } from 'framer-motion'
import { useResizeObserver } from '@/hooks/useResizeObserver'

const BadgeMotion = motion(Badge)
const ButtonMotion = motion(Button)

const SHOWED_BADGES = 3

export const ProjectStack = ({ stack }: { stack: Tag[] }) => {
  const [showMore, setShowMore] = useState(false)
  const alreadyInteracted = useRef(false)

  const containerRef = useRef<HTMLDivElement | null>(null)

  const height = useResizeObserver(containerRef)

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.2 }}
    >
      <div
        ref={containerRef}
        className="flex h-fit flex-wrap items-start justify-start gap-2"
      >
        <AnimatePresence mode="sync">
          {stack
            .filter(
              (_, index) => index < (showMore ? stack.length : SHOWED_BADGES)
            )
            .map((tag, index, array) => (
              <BadgeMotion
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: { delay: (array.length - 1 - index) * 0.1 }
                }}
                key={tag}
                variant={'secondary'}
              >
                {tag}
              </BadgeMotion>
            ))}
        </AnimatePresence>
        {stack.length > SHOWED_BADGES && (
          <ButtonMotion
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay:
                  0.1 *
                  (showMore
                    ? stack.length
                    : alreadyInteracted.current
                      ? stack.length
                      : SHOWED_BADGES)
              }
            }}
            exit={{
              opacity: 0,
              y: -10,
              transition: { delay: 0.1 * (stack.length - SHOWED_BADGES + 1) }
            }}
            key={showMore ? 'show-less' : 'show-more'}
            variant={'link'}
            onClick={() => {
              setShowMore(!showMore)
              alreadyInteracted.current = true
            }}
            className="h-fit p-0"
          >
            <span>{showMore ? 'Show less' : '...'}</span>
          </ButtonMotion>
        )}
      </div>
    </motion.div>
  )
}
