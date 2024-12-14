import { ProjectTag } from '@/app/projects/data/projectTag'
import { RoughNotation as RN } from 'react-rough-notation'

export const heroTitle = 'Retouch'

export const heroDescription = [
  <>
    This is the core feature from resleeve, where we have one infinit canvas
    where you can generate images with AI, and you have the retouch integrated,
    where you can edit the image like a photoshop, so have layers, masks, draw
    tools, image processing and more.
  </>,
  <>
    At the moment as I am writing this, the main features are completed so now
    the focus is design and UX so plese dw if you see some thing very ungly
    haha. This feature was the most cool and harder to build, I really needed
    learn a lot of things about graphics, image, canvas, webgl, and other
    stuffs, but make this opened the doors to the canvas world for me.
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
    The first version was just a simple retouch, like what we have on openai
    when you generate some image, but with the time we wanted start to improve
    the ux to our users, and the CEO had the idea to convert our application in
    a infinite canvas with generations, the retouch view integrate. Ando to make
    more sense with the users that we want we needed implement some features
    like photoshop, layers, masks, draw and other things. So In sumary we wanted
    gave to the user the best experience with ai and a good ambiente to dont
    limit you criativity
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
    Here I had all issues that you can imagined hahah, so I will just talk por
    cima some of them.
  </>,
  <>
    How start, when I receive this task I was really perdido, and I had no idea
    how to build it, I think the incremental implementation really helped to me
    built it, have not so much content on web about this, because is more niche.
    I started try understand better what is canvas, and library that we can use
    to faciliate the development, and start build with Konva.js in baby steps,
    one thing at a time.
  </>,
  <>
    Structure, when I started to think on build this project, the another think
    that I had on mind is, how I can build a good structure, that we can have a
    good maintainance, so what I did was, look on open source projects like
    excalidraw, to understand how they organize your structure, and I build
    something similar
  </>,
  <>
    Performance, with the time we started to had a big project with a lot of
    states,and we start to had issues with performance, so what I did was, use
    Zustand to manage the states and just render the components that need to be
    render, and use useMemo and useCallback to optimize the performance. To be
    hones is not perfect yet, because we was with other priorities, but now how
    we have the core features completed, our focus will be improve it
  </>,
  <>
    And yes I can write more than 4 pages about issues, but I think will be
    boring, so I will stop here and if you have some question, please contanct
    me I will be the pleasure to talk about it 🙂
  </>
]

export const lessonsTitle = 'Lessons Learned'

export const lessonsDescription = [
  <>
    This project, really teaches me a lot of things, dont even about technicall
    programing, but about priority. So I will split this section in two pieces{' '}
  </>,
  <>
    First, this project excijate from me a good knolegbe from graphics that I
    din't had before, so I needed study a lot, I really take all of my day to
    learn a lot of bases that I will needed I already had this dicipline on the
    univercity, but not so strong. So now I had a good base about graphics and I
    continue learning and tring use more canva but in normal things, like the
    shaders on my hero
  </>,
  <>
    Second, to build this project I needed learn a lot but how resleeve is one
    startup, I need priority the things, because I was working alone and I
    needed ship the things at the same time I learn, so what I did is really
    understand what is the features that I really need crete with a very well
    engenharia and what I can just put some fita that will not interferir on the
    project. So understand the time from the enterprise the recourses and direct
    my studies and priorities on the same direction.
  </>
]
