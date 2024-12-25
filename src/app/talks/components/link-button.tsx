'use client'

import { Button } from '@/components/ui/button'
import { SimpleTooltip } from '@/components/ui/simple-tooltip'
import { cn } from '@/lib/utils'
import { GlobeIcon } from 'lucide-react'
import { Talk } from '../data/talks'
import posthog from 'posthog-js'

export const LinkButton = ({ talk }: { talk: Talk }) => {
  return (
    <div className="flex gap-2">
      <SimpleTooltip content={'website'}>
        <Button variant="outline" size="icon" asChild>
          <a
            href={talk.site}
            target="_blank"
            onClick={() => {
              posthog.capture('talk_website_clicked', {
                talk_slug: talk.slug
              })
            }}
          >
            <GlobeIcon className={cn('size-4', {})} />
          </a>
        </Button>
      </SimpleTooltip>
    </div>
  )
}
