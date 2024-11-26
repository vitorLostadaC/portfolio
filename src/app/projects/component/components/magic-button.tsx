'use client'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ScrollTextIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const MagicButton = ({ slug }: { slug: string }) => {
  const router = useRouter()

  const alreadySeenProject = localStorage.getItem(slug)

  const handleClick = () => {
    localStorage.setItem(slug, 'seen')
    router.push(`/projects/${slug}`)
  }

  if (alreadySeenProject)
    return (
      <Button variant="outline" onClick={handleClick}>
        <ScrollTextIcon className="w-4 h-4" />
        View Again
      </Button>
    )

  return (
    <RainbowButton className="text-nowrap flex gap-2" onClick={handleClick}>
      <ScrollTextIcon className="w-4 h-4" />
      View Project
    </RainbowButton>
  )
}
