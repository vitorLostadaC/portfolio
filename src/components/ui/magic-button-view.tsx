'use client'

import { Button } from '@/components/ui/button'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ScrollTextIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import posthog from 'posthog-js'

interface MagicButtonProps {
  slug: string
  nestedPath: string
  label: string
  isTalk?: boolean
}

export const MagicButtonView = ({
  slug,
  nestedPath,
  label,
  isTalk = false
}: MagicButtonProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const alreadySeenProject =
    typeof localStorage !== 'undefined' && localStorage.getItem(slug)

  const handleMouseEnter = () => {
    router.prefetch(`/${nestedPath}/${slug}`)
  }

  const handleClick = () => {
    localStorage.setItem(slug, 'seen')
    router.push(`/${nestedPath}/${slug}`)
    posthog.capture('magic_button_clicked', { slug, pathname, isTalk })
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
