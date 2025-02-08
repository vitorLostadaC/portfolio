'use client'

import beatchTennis from '../assets/beatch-tennis.webp'
// import kingDownTwoCrowns from '../assets/kingdom.webp'
import lanscape from '../assets/landscape.webp'
// import girlfriend from '../assets/girlfriend.webp'
import { ModalImage } from '@/app/projects/components/modal-image'
import { Highlight } from '@/components/hightlight'
import gym from '../assets/gym.webp'

export const Hobbies = () => {
  return (
    <div className="mt-20 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Hobbies</h1>
      <div className="flex flex-col gap-32 lg:flex-row">
        <div className="flex max-w-2xl flex-col gap-4 hyphens-manual text-justify leading-8 text-muted-foreground">
          <p>
            In my <Highlight>childhood</Highlight>, I spent a lot of time{' '}
            <Highlight>playing games</Highlight>, and my favorites were
            Minecraft, csgo, and League of Legends. Each of them was my most
            played game at different stages of my life.{' '}
            <Highlight>Nowadays</Highlight>, I don&apos;t have many skills for
            competitive games every time I try to play, I get crushed by kids
            hahaha.
          </p>
          <p>
            So <Highlight>today</Highlight>, I prefer story-driven and strategy
            games. My favorite at the moment is Kingdom Two Crowns. I love
            playing games, but I don&apos;t play as much anymore because, when I
            have some <Highlight>free time</Highlight>, I&apos;d rather do
            things <Highlight>away from screens</Highlight> like going to the
            gym, spending time with my girlfriend and family, running, playing
            beach tennis, or going on hikes.
          </p>
          <p>
            My <Highlight>main motivation</Highlight> is to{' '}
            <Highlight>build the life I want to live</Highlight> one where I can
            travel, enjoy the sports I love, and have the{' '}
            <Highlight>quality of life</Highlight> I desire, all while creating
            things I can be proud of.
          </p>{' '}
        </div>
        <div className="mx-auto grid w-72 grid-cols-2 gap-2 lg:mx-0">
          <ModalImage
            slug="about"
            image={beatchTennis}
            alt="Beatch Tennis"
            className="h-80 rounded-lg object-cover lg:h-64"
          />
          <ModalImage
            slug="about"
            image={gym}
            alt="Gym"
            className="h-80 rounded-lg object-cover lg:h-64"
          />
          <ModalImage
            slug="about"
            image={lanscape}
            alt="Lanscape"
            className="col-span-2 w-full rounded-lg object-cover lg:h-40"
          />
        </div>
      </div>
    </div>
  )
}
