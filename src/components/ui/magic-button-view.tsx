'use client'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ScrollTextIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MagicButtonProps {
  slug: string
  nestedPath: string
  label: string
}

export const MagicButtonView = ({
  slug,
  nestedPath,
  label
}: MagicButtonProps) => {
  const router = useRouter()

  const alreadySeenProject =
    typeof localStorage !== 'undefined' && localStorage.getItem(slug)

  const handleMouseEnter = () => {
    router.prefetch(`/${nestedPath}/${slug}`)
  }

  const handleClick = () => {
    localStorage.setItem(slug, 'seen')
    router.push(`/${nestedPath}/${slug}`)
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
      View {label}
    </RainbowButton>
  )
}
