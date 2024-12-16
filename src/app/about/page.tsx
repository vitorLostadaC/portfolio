import vitor from './assets/VitorLostada.webp'

export default function About() {
  return (
    <div className="flex gap-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Hello, I&apos;m Vitor! 👋</h1>

        <div className="flex gap-8">
          <div className="flex flex-col gap-4 text-justify text-lg text-muted-foreground">
            <p>
              I&apos;m Vitor, a software engineer from Brazil. I&apos;m really
              passionate with ui and build beautiful things with great
              animations 😍, I start my journey as the most developers, I wanted
              to create games, but as you&apos;re looking at this portfolio,
              maybe some things have changed, haha. I still love games, and
              probably will create games one day, but just on the veeery distant
              future.
            </p>
            <p>
              I have a routine to do all the things without it, I&apos;m lost so
              I always take a time do anything that I want like work, time to
              study, reading, going to the gym, resting, play a game, recording
              videos... and this is a pretty good summary of my last years.
            </p>
            <p>
              when I&apos;m not learning about development, I try improve my
              soft skill, mainly studing about psychology. These knowledge
              really help me to have a different perspective from the world,
              understand more about people and how they work. Also helping me to
              be more dicipline and mental control, focus on the things that I
              want.
            </p>
            <p>
              and when I&apos;m not doing something for my professional I like
              to spend a time with my girlfriend or playing a game, I really
              like play games, I play a lot of games, and I always try teaches
              everthing that I learn, I think with this I learn more because
              when I teach I try explain the best way I can
            </p>
            <p>
              I always teaching what I learn, these is one of the reasons to me
              created a youtube channel, I really like to teach and share my
              knowledge with others and as a bonus I can learn more when I teach
            </p>
          </div>
          <img
            src={vitor.src}
            alt="Vitor Lostada"
            className="h-fit w-96 rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  )
}
