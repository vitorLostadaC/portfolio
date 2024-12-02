import { cn } from '@/lib/utils'
import { RoughNotationGroup as RNG } from 'react-rough-notation'

interface TextProps {
  title: string
  description: JSX.Element | string | (JSX.Element | string)[]
  side?: 'left' | 'right' | 'center'
}

export const TextSection = ({ title, description, side }: TextProps) => {
  return (
    <div
      className={cn('flex flex-col gap-4 max-w-4xl', {
        'ml-auto': side === 'right',
        'text-center mx-auto': side === 'center'
      })}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <RNG show>
        {Array.isArray(description) ? (
          <ul className="flex flex-col gap-4 text-muted-foreground text-lg">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground text-lg">{description}</p>
        )}
      </RNG>
    </div>
  )
}
