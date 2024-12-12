import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarIcon, GlobeIcon } from 'lucide-react'
import { Talk } from '../data/talks'
import { DynamicTitle } from '@/components/ui/dynamic-title'
import { Button } from '@/components/ui/button'
import { SimpleTooltip } from '@/components/ui/simple-tooltip'
import { cn } from '@/lib/utils'
import { MagicButtonView } from '@/components/ui/magic-button-view'

export const TalkCard = ({ talk }: { talk: Talk }) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <img
          src={talk.image}
          alt={talk.title}
          className="aspect-video w-96 rounded-md object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <DynamicTitle
            className="text-base"
            title={talk.title}
            slug={talk.slug}
          />
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span className="text-sm">
              {talk.date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </span>
          </div>
        </div>

        <p className="mb-2 h-10 text-sm text-muted-foreground">
          {talk.description}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex h-full w-full justify-between gap-2">
          <MagicButtonView slug={talk.slug} nestedPath="talks" label="Talk" />
          <div className="flex gap-2">
            <SimpleTooltip content={'website'}>
              <Button variant="outline" size="icon">
                <a href={talk.site} target="_blank">
                  <GlobeIcon className={cn('size-4', {})} />
                </a>
              </Button>
            </SimpleTooltip>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
