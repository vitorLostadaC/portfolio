import { ProjectTag } from '@/app/projects/data/projectTag'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Retouch'

export const heroDescription = [
  <>
    This is the core feature of Resleeve, an infinite canvas where you can
    generate images using AI. It also has integrated retouch tools, allowing you
    to edit images like in Photoshop. You get layers, masks, drawing tools,
    image processing, and more.
  </>,
  <>
    As I'm writing this, the main features are complete, so the focus now is on
    design and UX. So please don't worry if you see something that looks a bit
    ugly, haha. This feature was the coolest and hardest to build. I had to
    learn a lot about graphics, images, canvas, WebGL, and other stuff, but
    working on this opened the door to the canvas world for me.
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
    The first version was just a simple retouch tool, similar to what OpenAI
    offers when you generate an image. But over time, we wanted to improve the
    user experience. The CEO had the idea to turn our application into an
    infinite canvas with integrated generations and retouch tools. To make it
    more useful for our target users, we had to add features like Photoshop
    layers, masks, drawing tools, and more. In summary, we wanted to give users
    the best AI experience and a great environment that wouldn't limit their
    creativity.
  </>
]

export const keyFeaturesTitle = 'Key Features'

export const keyFeaturesDescription = [
  <>
    This project had a lot of features based on ai, but how this is my portfolio
    and the objective is show my skills, I will just talk about features that I
    implemented
  </>,
  <>
    Starting on infinite canvas, you can generate images with loading state, and
    organize your images in several frames
  </>,

  <>
    you can access the frame with retouch view (double click on the frame),
    there you have a lot of things like
  </>,
  <>
    Draw tools that you really change the pixel from the image, and you can
    eraser some piece too
  </>,
  <>
    Selection tools, where you can select a part of the image and create a mask
    or just sent to ai
  </>,
  <>
    Layers, where you can works with several images at the same time, and do
    some operations like merge, duplicate, etc
  </>,
  <>
    Masks, where you can create a mask from some piece of your image, we use it
    to isolate the area that we want the ai changes
  </>,
  <>undo redo system</>,
  <>Colors, to really change the colors of the imgea</>,
  <>Clipping mask, just one place to you put your logo in the images</>,
  <>
    And have more, of course have a lot of things under the hood, that are'nt
    features but is how the things works, but about the features I think that is
    the most important
  </>
]

export const problemsTitle = 'Problems and Thought Process'

export const problemsDescription = [
  <>
    I ran into all the issues you can imagine, haha. So I'll just briefly go
    over some of them.
  </>,
  <>
    Starting out, when I got this task, I was really lost and had no idea how to
    build it. I think the incremental implementation approach really helped me
    figure things out. There isn't much content online about this since it's a
    niche area. I started by trying to understand what a canvas is and exploring
    libraries that could make development easier. I ended up starting with
    Konva.js, taking baby steps and building one feature at a time.
  </>,
  <>
    Structure wise, one of the things I had in mind when planning this project
    was how to create a maintainable structure. To figure this out, I looked at
    open-source projects like Excalidraw to see how they organize their
    structure, and I built something similar.
  </>,
  <>
    Performance became a challenge as the project grew bigger and more complex
    with lots of states. We started having performance issues, so I decided to
    use Zustand for state management and ensured that only the components
    needing updates were re-rendered. I also used `useMemo` and `useCallback` to
    optimize performance. To be honest, it's not perfect yet because we had
    other priorities, but now that the core features are done, improving
    performance will be our next focus.
  </>,
  <>
    Honestly, I could write more than four pages about the issues I faced, but I
    think that might be boring. If you have any questions, feel free to contact
    me I'd be happy to talk about it! 🙂
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project really taught me a lot of things, not just about technical
    programming, but about priority. So I'll split this section into two parts.
  </>,
  <>
    First, this project required me to have good knowledge of graphics, which I
    didn't have before. So I needed to study a lot, and I spent most of my day
    learning the basics I needed. I already had this discipline from university,
    but not as strong. Now I have a good base about graphics, and I keep
    learning and trying to use canvas more, even in small things like shaders on
    my hero.
  </>,
  <>
    Second, to build this project I had to learn a lot, but because Resleeve is
    a startup, I needed to prioritize things. I was working alone and had to
    ship stuff while learning at the same time. What I did was understand what
    features really needed to be built with solid engineering and what could
    just have a duct tape fix that wouldn't cause problems later. I had to think
    about the company's timing, resources, and focus my studies and priorities
    in the same direction.
  </>
]
