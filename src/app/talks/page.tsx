import { ChatIcon } from './components/ChatIcon'
import { TalkCard } from './components/talk-card'
import { talks } from './data/talks'

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="flex items-center gap-2 text-3xl font-bold">
        Talks <ChatIcon />
      </h1>

      <div className="grid grid-cols-3 gap-8">
        {talks
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((talk) => (
            <TalkCard key={talk.slug} talk={talk} />
          ))}
      </div>
    </div>
  )
}
