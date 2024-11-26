import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './tooltip'

interface SimpleTooltipProps {
  children: JSX.Element
  content: ReactNode
  delayDuration?: number
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
  className?: string
  sideOffset?: number
}

export const SimpleTooltip = ({
  children,
  content,
  delayDuration,
  side,
  align,
  className,
  sideOffset = 4
}: SimpleTooltipProps) => {
  return (
    <TooltipProvider delayDuration={delayDuration || 200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          side={side}
          align={align}
          className={cn(className)}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
