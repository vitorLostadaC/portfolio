import { cn } from '@/lib/utils'
import { JSX } from 'react'

interface TextProps {
  title: string
  description: JSX.Element | string | (JSX.Element | string)[]
}

export const TextSection = ({ title, description }: TextProps) => {
  return (
    <div className={cn('mx-auto flex max-w-4xl flex-col gap-4', {})}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {Array.isArray(description) ? (
        <ul className="flex flex-col gap-4 leading-8 text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  )
}
