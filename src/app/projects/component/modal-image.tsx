'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

interface ModalImageProps {
  image: StaticImageData
  alt: string
  className?: string
}

export const ModalImage = ({ image, alt, className }: ModalImageProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [windowSize, setWindowSize] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0
  })

  const handleToggle = () => {
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
      <motion.img
        src={image.src}
        alt={alt}
        className={cn(className, 'cursor-pointer')}
        layoutId={alt}
        onClick={handleToggle}
      />
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/10 z-10 flex justify-center items-center"
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
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
