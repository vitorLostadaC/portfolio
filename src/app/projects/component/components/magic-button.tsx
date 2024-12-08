'use client'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ScrollTextIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const MagicButton = ({ slug }: { slug: string }) => {
  const router = useRouter()

  const alreadySeenProject =
    typeof localStorage !== 'undefined' && localStorage.getItem(slug)

  const handleMouseEnter = () => {
    router.prefetch(`/projects/${slug}`)
  }

  const handleClick = () => {
    localStorage.setItem(slug, 'seen')
    router.push(`/projects/${slug}`)
  }

  if (alreadySeenProject)
    return (
      <Button
        variant="outline"
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
      >
        <ScrollTextIcon className="h-4 w-4" />
        View Again
      </Button>
    )

  return (
    <RainbowButton
      className="flex gap-2 text-nowrap"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <ScrollTextIcon className="h-4 w-4" />
      View Project
    </RainbowButton>
  )
}
