'use client'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { AnimatePresence, motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import posthog from 'posthog-js'
import { useEffect, useState } from 'react'

type ModalImageProps = {
  alt: string
  className?: string
  image: StaticImageData
  children?: React.ReactNode
  slug: string
}

export const ModalImage = ({
  image,
  alt,
  className,
  children,
  slug
}: ModalImageProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0
  })

  const handleToggle = () => {
    if (!isOpen) {
      posthog.capture('project_image_clicked', {
        image_name: alt,
        project_slug: slug
      })
    }
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleToggle()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  let newWidth = windowSize?.width * 0.85
  let newHeight = windowSize?.height * 0.85

  const aspectRatio = image.width / image.height

  if (newWidth / newHeight > aspectRatio) {
    newWidth = newHeight * aspectRatio
  } else {
    newHeight = newWidth / aspectRatio
  }

  return (
    <>
      {children ? (
        <Slot onClick={handleToggle}>{children}</Slot>
      ) : (
        <motion.img
          src={image.src}
          alt={alt}
          className={cn(className, 'cursor-pointer')}
          layoutId={alt}
          onClick={handleToggle}
        />
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10 flex items-center justify-center"
            initial={{
              backgroundColor: 'rgba(0,0,0,0)'
            }}
            animate={{
              backgroundColor: 'rgba(0,0,0,0.8)'
            }}
            exit={{
              backgroundColor: 'rgba(0,0,0,0)'
            }}
            onClick={handleToggle}
          >
            <motion.img
              src={image.src}
              alt={alt}
              layoutId={alt}
              style={{
                width: newWidth,
                height: newHeight
              }}
              className={'rounded-md border'}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
