import React from 'react'

import { cn } from '@/lib/utils'

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'group relative inline-flex h-9 animate-rainbow cursor-pointer items-center justify-center rounded-md border-0 !border-[hsl(var(--input))_hsl(var(--input))_transparent_hsl(var(--input))] bg-[length:200%] px-4 py-2 font-medium text-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] hover:duration-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',

        // before styles
        'before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-[12%] before:w-4/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:hover:duration-700',

        // light mode colors
        'dark:bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(#121213_80%,rgba(18,18,19,0.6)_20%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',

        // k mode colors
        'bg-[linear-gradient(hsl(var(--background)),hsl(var(--background))),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',

        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
