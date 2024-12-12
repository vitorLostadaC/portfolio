'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tag } from '../../data/tags'

export const ProjectStack = ({ stack }: { stack: Tag[] }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="flex flex-wrap gap-2">
      {stack
        .filter((_, index) => index < (showMore ? stack.length : 3))
        .map((tag) => (
          <Badge key={tag} variant={'secondary'}>
            {tag}
          </Badge>
        ))}
      <Button
        variant={'link'}
        onClick={() => setShowMore(!showMore)}
        className="h-fit p-0"
      >
        <span>{showMore ? 'Show less' : 'Show more'}</span>
      </Button>
    </div>
  )
}
