import beatchTennis from '../assets/beatch-tennis.webp'
// import kingDownTwoCrowns from '../assets/kingdom.webp'
import lanscape from '../assets/landscape.webp'
// import girlfriend from '../assets/girlfriend.webp'
import gym from '../assets/gym.webp'
import { ModalImage } from '@/app/projects/components/modal-image'

export const Hobbies = () => {
  return (
    <div className="mt-20 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Hobbies</h1>
      <div className="flex gap-32">
        <div className="flex max-w-2xl flex-col gap-4 text-lg text-muted-foreground">
          <p>
            In my childhood, I spent a lot of time playing games, and my
            favorites were Minecraft, CS:GO, and League of Legends. Each of them
            was my most played game at different stages of my life. Nowadays, I
            don&apos;t have many skills for competitive games every time I try
            to play, I get crushed by kids hahaha.
          </p>
          <p>
            So today, I prefer story-driven and strategy games. My favorite at
            the moment is Kingdom Two Crowns. I love playing games, but I
            don&apos;t play as much anymore because, when I have some free time,
            I&apos;d rather do things away from screens like going to the gym,
            spending time with my girlfriend and family, running, playing beach
            tennis, or going on hikes.
          </p>
          <p>
            My main motivation is to build the life I want to live one where I
            can travel, enjoy the sports I love, and have the quality of life I
            desire, all while creating things I can be proud of.
          </p>{' '}
        </div>
        <div className="grid w-72 grid-cols-2 gap-2">
          <ModalImage
            image={beatchTennis}
            alt="Beatch Tennis"
            className="h-64 rounded-lg object-cover"
          />
          <ModalImage
            image={gym}
            alt="Gym"
            className="h-64 rounded-lg object-cover"
          />
          {/* <img src={girlfriend.src} alt="Girlfriend" /> */}
          <ModalImage
            image={lanscape}
            alt="Lanscape"
            className="col-span-2 w-full rounded-lg object-cover"
          />
          {/* <img src={kingDownTwoCrowns.src} alt="Kingdown Two Crowns" /> */}
        </div>
      </div>
    </div>
  )
}
