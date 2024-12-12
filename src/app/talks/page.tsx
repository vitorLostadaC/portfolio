import { TalkCard } from './components/talk-card'
import { talks } from './data/talks'

export default function TalksPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Talks 💬</h1>

      <div className="grid grid-cols-3 gap-4">
        {talks
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((talk) => (
            <TalkCard key={talk.slug} talk={talk} />
          ))}
      </div>
    </div>
  )
}
