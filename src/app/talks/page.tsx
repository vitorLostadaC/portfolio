import { TalkCard } from './components/talk-card'
import { talks } from './data/talks'

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="flex items-center text-2xl font-bold">Talks</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {talks
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((talk) => (
            <TalkCard key={talk.slug} talk={talk} />
          ))}
      </div>
    </div>
  )
}
