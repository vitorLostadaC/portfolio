import { ModalImage } from '@/app/projects/components/modal-image'
import { ProjectSlug } from '@/app/projects/data/project-slug'
import { ProjectTag } from '@/app/projects/data/project-tag'
import { Hero } from '@/components/details/hero-section'
import { Highlight } from '@/components/hightlight'
import { cn } from '@/lib/utils'
import { TextSection } from '../../../../../components/details/text-section'
import a from './assets/a.webp'
import b from './assets/b.webp'
import c from './assets/c.webp'
import d from './assets/d.webp'
import e from './assets/e.webp'
import hero from './assets/hero.webp'

export const heroTitle = 'Retouch'

export const heroDescription = [
  <>
    This is the <Highlight>core feature</Highlight> of{' '}
    <a className="underline" href="https://resleeve.ai" target="_blank">
      Resleeve
    </a>
    , an <Highlight>infinite canvas</Highlight> where you can generate images
    using <Highlight>AI</Highlight>. It also has integrated retouch tools,
    allowing you to edit images like in
    <Highlight>Photoshop</Highlight>. You get layers, masks, drawing tools,
    image processing, and more.
  </>,
  <>
    As I&apos;m writing this, the main features are complete, so the focus now
    is on <Highlight>design and UX</Highlight>. So please don&apos;t worry if
    you see something that looks a bit ugly, haha. This feature was the{' '}
    <Highlight>coolest and hardest</Highlight> to build. I had to learn a lot
    about graphics, images, canvas, WebGL, and other stuff, but working on this
    opened the door to the canvas world for me.
  </>
]

export const tags: ProjectTag[] = [
  ProjectTag.NextJs,
  ProjectTag.Typescript,
  ProjectTag.Tailwind,
  ProjectTag.Sentry,
  ProjectTag.PostHog,
  ProjectTag.Zustand,
  ProjectTag.Konva
]

export const goalTitle = 'Project Purpose and Goal'

export const goalDescription = [
  <>
    The <Highlight>first version</Highlight> was just a{' '}
    <Highlight>simple retouch tool</Highlight> , similar to what OpenAI offers
    when you generate an image. But over time, we wanted to improve the user
    experience. The CEO had the idea to turn our application into an{' '}
    <Highlight>infinite canvas</Highlight> with integrated generations and
    retouch tools. To make it more useful for our target users, we had to add
    features like Photoshop layers, masks, drawing tools, and more. In summary,
    we wanted to give users the <Highlight>best AI experience</Highlight> and a
    great environment that wouldn&apos;t limit their creativity.
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    This project has a lot of AI-based features, but since this is my portfolio
    and the goal is to show my skills, I&apos;ll only talk about the features
    that <Highlight>I implemented</Highlight> on front-end.
  </>,
  <ul className="grid list-disc grid-cols-1 gap-4 text-left md:grid-cols-2">
    <li>
      <Highlight>Infinite canvas</Highlight>: you can generate images with a
      loading state and organize them into several frames.
    </li>
    <li>
      You can access a frame using the retouch view (double-click on the frame).
      There, you have a lot of tools, like:
    </li>
    <li>
      <Highlight>Draw tools</Highlight>: These let you directly edit the pixels
      of the image, and you can erase parts of it too.
    </li>
    <li>
      <Highlight>Selection tools</Highlight>: These allow you to select a part
      of the image to create a mask or send it to AI.
    </li>
    <li>
      <Highlight>Layers</Highlight>: Work with multiple images at the same time
      and perform operations like merge, duplicate, etc.
    </li>
    <li>
      <Highlight>Masks</Highlight>: Create masks for specific parts of your
      image to isolate areas you want the AI to modify.
    </li>
    <li>
      <Highlight>Undo/Redo system</Highlight>: This allows you to undo and redo
      your actions.
    </li>
    <li>
      <Highlight>Colors</Highlight>: Adjust and change the colors of the image.
    </li>
    <li>
      <Highlight>Clipping mask</Highlight>: A tool to easily place your logo on
      images.
    </li>
  </ul>,
  <>
    And there&apos;s more! Of course, there&apos;s a lot happening{' '}
    <Highlight>under the hood</Highlight> that isn&apos;t directly visible as
    features but is crucial for making <Highlight>everything work</Highlight>.
    These are the main features I believe are the most important to highlight.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    I ran into <Highlight>all</Highlight> the issues you can imagine, haha. So
    I&apos;ll just briefly go over some of them.
  </>,
  <>
    Starting out, when I got this task, I was <Highlight>really lost</Highlight>{' '}
    and had no idea how to build it. I think the incremental implementation
    approach really helped me figure things out. There isn&apos;t much content
    online about this since it&apos;s a niche area. I started by trying to
    understand what a canvas is, the{' '}
    <Highlight>concepts under the hood</Highlight>, and exploring libraries that
    could make development easier. I ended up starting with Konva.js, taking{' '}
    <Highlight>baby steps</Highlight> and building one feature at a time.
  </>,
  <>
    Structure wise, one of the things I had in mind when planning this project
    was how to create a <Highlight>maintainable structure</Highlight>. To figure
    this out, I looked at <Highlight>open-source projects</Highlight> like
    Excalidraw to see how they organize their structure, and I built something
    similar.
  </>,
  <>
    Performance became a challenge as the project grew bigger and more complex
    with <Highlight>lots of states</Highlight>. We started having performance
    issues, so I decided to use <Highlight>Zustand</Highlight> for state
    management and ensured that only the components needing updates were
    re-rendered. I also used `useMemo` and `useCallback` to optimize
    performance. To be honest, it&apos;s not perfect yet because we had other
    priorities, but now that the core features are done, improving performance
    will be our next focus.
  </>,
  <>
    Honestly, I could write more than four pages about the issues I faced, but I
    think that might be boring. If you have any questions, feel free to{' '}
    <Highlight>contact me</Highlight> I&apos;d be happy to talk about it! 🙂
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project really taught me a lot of things,{' '}
    <Highlight>not just</Highlight> about <Highlight>technical</Highlight>{' '}
    programming, but about <Highlight>priority</Highlight>. So I&apos;ll split
    this section into two parts.
  </>,
  <>
    First, this project required me to have good knowledge of graphics, which I
    didn&apos;t have before. So I needed to <Highlight>study a lot</Highlight>,
    and I spent most of my day learning the basics I needed. I already had this
    discipline from university, but not as strong. Now I have a{' '}
    <Highlight>good base</Highlight> about graphics, and I keep learning and
    trying to use canvas more, even casually like with the shaders on my hero or
    for 3d things.
  </>,
  <>
    Second, to build this project I had to learn a lot, but because{' '}
    <a className="underline" href="https://resleeve.ai" target="_blank">
      Resleeve
    </a>{' '}
    is a startup, I needed to prioritize things. I was working alone and had to{' '}
    <Highlight>ship stuff while learning</Highlight> at the same time. What I
    did was understand what features really needed to be built with{' '}
    <Highlight>solid engineering</Highlight> and what could just have a{' '}
    <Highlight>duct tape fix</Highlight> that wouldn&apos;t cause problems
    later. I had to think about the company&apos;s timing, resources, and focus
    my studies and priorities in the <Highlight>same direction</Highlight>.
  </>
]

export const retouchDetails = [
  <Hero
    title={heroTitle}
    description={heroDescription}
    stack={tags}
    image={hero}
    slug={ProjectSlug.Retouch}
  />,
  <TextSection title={goalTitle} description={goalDescription} />,
  <TextSection title={keyFeaturesTitle} description={keyFeaturesDescription} />,

  <div className="grid grid-cols-2 items-center gap-6">
    {[a, b, c, d].map((item, index) => (
      <ModalImage
        key={index}
        image={item}
        alt={`antrol-ai-${index}`}
        slug={ProjectSlug.Retouch}
        className={cn('rounded-md border')}
      />
    ))}
  </div>,
  <TextSection title={problemsTitle} description={problemsDescription} />,
  <div className="flex flex-col gap-2">
    <ModalImage
      image={e}
      alt={`antrol-ai-4`}
      className={cn('rounded-md border')}
      slug={ProjectSlug.Retouch}
    />
  </div>,
  <TextSection title={lessonsTitle} description={lessonsDescription} />
]
