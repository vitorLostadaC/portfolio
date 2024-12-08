import { clsx, type ClassValue } from 'clsx'
import { Variant } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type CustomVariant = {
  initial?: Variant
  enter: Variant
  exit?: Variant
}

export function anim(variants: CustomVariant) {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  }
}
