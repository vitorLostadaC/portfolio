import vitor from './assets/VitorLostada.jpeg'

export default function About() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Summary</h1>

        <div className="flex flex-col gap-4 text-muted-foreground text-justify">
          <p>Hey there! I love building and sprinkling everything with code.</p>
          <p>
            My first experience with programming was when I was 13. Like most
            developers, I wanted to create games, but as you&apos;re looking at
            this portfolio, maybe some things have changed, haha...
          </p>
          <p>
            I am a fullstack developer and have built several completed
            projects. But to be honest, my true love is frontend. Creating
            professional and visually cool websites is my dream.
          </p>
          <p>
            I am an organized person, so I have a routine to do all the things I
            enjoy. I reserve time for work, learning, reading, going to the gym,
            resting, recording videos... and this is a pretty good summary of my
            last five years.
          </p>
          <p>
            I’m also finding more time to record videos and create technical
            content, always trying to share everything I’ve learned along the
            way.
          </p>
        </div>
      </div>

      <img
        src={vitor.src}
        alt="Vitor Lostada"
        className="w-96 rounded-xl shadow-2xl h-fit"
      />
    </div>
  )
}
