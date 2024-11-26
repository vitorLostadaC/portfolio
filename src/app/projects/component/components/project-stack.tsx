'use client'

import { useState } from 'react'
import { Tag } from '../../data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const ProjectStack = ({ stack }: { stack: Tag[] }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="flex gap-2 flex-wrap">
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
        className="p-0 h-fit"
      >
        <span>{showMore ? 'Show less' : 'Show more'}</span>
      </Button>
    </div>
  )
}
