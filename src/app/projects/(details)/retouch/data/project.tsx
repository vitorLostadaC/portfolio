import { ProjectTag } from '@/app/projects/data/projectTag'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Retouch'

export const heroDescription = [
  <>
    This is the{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      core feature
    </RN>{' '}
    of Resleeve, an{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      infinite canvas
    </RN>{' '}
    where you can generate images using{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      AI
    </RN>
    . It also has integrated retouch tools, allowing you to edit images like in
    <RN type="underline" multiline color="var(--highlight-2)">
      Photoshop
    </RN>
    . You get layers, masks, drawing tools, image processing, and more.
  </>,
  <>
    As I&apos;m writing this, the main features are complete, so the focus now
    is on{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      design and UX
    </RN>
    . So please don&apos;t worry if you see something that looks a bit ugly,
    haha. This feature was the{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      coolest and hardest
    </RN>{' '}
    to build. I had to learn a lot about graphics, images, canvas, WebGL, and
    other stuff, but working on this opened the door to the canvas world for me.
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
    The{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      first version
    </RN>{' '}
    was just a{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      simple retouch tool
    </RN>{' '}
    , similar to what OpenAI offers when you generate an image. But over time,
    we wanted to improve the user experience. The CEO had the idea to turn our
    application into an{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      infinite canvas
    </RN>{' '}
    with integrated generations and retouch tools. To make it more useful for
    our target users, we had to add features like Photoshop layers, masks,
    drawing tools, and more. In summary, we wanted to give users the{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      best AI experience
    </RN>{' '}
    and a great environment that wouldn&apos;t limit their creativity.
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    This project has a lot of AI-based features, but since this is my portfolio
    and the goal is to show my skills, I&apos;ll only talk about the features
    that{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      I implemented
    </RN>{' '}
    on front-end.
  </>,
  <>
    Starting with the{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      infinite canvas
    </RN>
    : you can generate images with a loading state and organize them into
    several frames.
  </>,

  <>
    You can access a frame using the retouch view (double-click on the frame).
    There, you have a lot of tools, like:
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-2)">
      Draw tools
    </RN>
    : These let you directly edit the pixels of the image, and you can erase
    parts of it too.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      Selection tools
    </RN>
    : These allow you to select a part of the image to create a mask or send it
    to AI.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      Layers
    </RN>
    : Work with multiple images at the same time and perform operations like
    merge, duplicate, etc.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-2)">
      Masks
    </RN>
    : Create masks for specific parts of your image to isolate areas you want
    the AI to modify.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-2)">
      Undo/Redo system
    </RN>
    : This allows you to undo and redo your actions.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-1)">
      Colors
    </RN>
    : Adjust and change the colors of the image.
  </>,
  <>
    <RN type="underline" multiline color="var(--highlight-2)">
      Clipping mask
    </RN>
    : A tool to easily place your logo on images.
  </>,
  <>
    And there&apos;s more! Of course, there&apos;s a lot happening{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      under the hood
    </RN>{' '}
    that isn&apos;t directly visible as features but is crucial for making{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      everything work
    </RN>
    . These are the main features I believe are the most important to highlight.
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    I ran into{' '}
    <RN type="circle" multiline color="var(--highlight-1)">
      all
    </RN>{' '}
    the issues you can imagine, haha. So I&apos;ll just briefly go over some of
    them.
  </>,
  <>
    Starting out, when I got this task, I was{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      really lost
    </RN>{' '}
    and had no idea how to build it. I think the incremental implementation
    approach really helped me figure things out. There isn&apos;t much content
    online about this since it&apos;s a niche area. I started by trying to
    understand what a canvas is, the{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      concepts under the hood
    </RN>
    , and exploring libraries that could make development easier. I ended up
    starting with Konva.js, taking{' '}
    <RN type="box" multiline color="var(--highlight-2)">
      baby steps
    </RN>{' '}
    and building one feature at a time.
  </>,
  <>
    Structure wise, one of the things I had in mind when planning this project
    was how to create a{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      maintainable structure
    </RN>
    . To figure this out, I looked at{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      open-source projects
    </RN>{' '}
    like Excalidraw to see how they organize their structure, and I built
    something similar.
  </>,
  <>
    Performance became a challenge as the project grew bigger and more complex
    with{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      lots of states
    </RN>
    . We started having performance issues, so I decided to use{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      Zustand
    </RN>{' '}
    for state management and ensured that only the components needing updates
    were re-rendered. I also used `useMemo` and `useCallback` to optimize
    performance. To be honest, it&apos;s not perfect yet because we had other
    priorities, but now that the core features are done, improving performance
    will be our next focus.
  </>,
  <>
    Honestly, I could write more than four pages about the issues I faced, but I
    think that might be boring. If you have any questions, feel free to{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      contact me
    </RN>{' '}
    I&apos;d be happy to talk about it! 🙂
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project really taught me a lot of things,{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      not just
    </RN>{' '}
    about{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      technical
    </RN>{' '}
    programming, but about{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      priority
    </RN>
    . So I&apos;ll split this section into two parts.
  </>,
  <>
    First, this project required me to have good knowledge of graphics, which I
    didn&apos;t have before. So I needed to{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      study a lot
    </RN>
    , and I spent most of my day learning the basics I needed. I already had
    this discipline from university, but not as strong. Now I have a{' '}
    <RN type="circle" multiline color="var(--highlight-1)">
      good base
    </RN>{' '}
    about graphics, and I keep learning and trying to use canvas more, even
    casually like with the shaders on my hero or for 3d things.
  </>,
  <>
    Second, to build this project I had to learn a lot, but because Resleeve is
    a startup, I needed to prioritize things. I was working alone and had to{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      ship stuff while learning
    </RN>{' '}
    at the same time. What I did was understand what features really needed to
    be built with{' '}
    <RN type="underline" multiline color="var(--highlight-1)">
      solid engineering
    </RN>{' '}
    and what could just have a{' '}
    <RN type="underline" multiline color="var(--highlight-2)">
      duct tape fix
    </RN>{' '}
    that wouldn&apos;t cause problems later. I had to think about the
    company&apos;s timing, resources, and focus my studies and priorities in the{' '}
    <RN type="box" multiline color="var(--highlight-1)">
      same direction
    </RN>
    .
  </>
]
