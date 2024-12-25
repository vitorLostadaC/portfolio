import { clsx, type ClassValue } from 'clsx'
import { Variant } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type CustomVariant = {
  initial?: Variant
  animate: Variant
  exit?: Variant
}

export function anim(variants: CustomVariant) {
  return {
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants
  }
}
