'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { useState } from 'react'

interface ModalImageProps {
  image: StaticImageData
  alt: string
  className?: string
}

export const ModalImage = ({ image, alt, className }: ModalImageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToogle = () => {
    setIsOpen(!isOpen)
  }

  let newWidth = window.innerWidth * 0.85
  let newHeight = window.innerHeight * 0.85

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
        onClick={handleToogle}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-10 flex justify-center items-center"
          onClick={handleToogle}
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
    </>
  )
}
