'use client'

import { Hero } from './components/hero'

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />

      <div className="flex w-full flex-col gap-4">
        <h1 className="text-3xl font-bold">Rules of my life</h1>
        <p>Some phrases that summarize my way to think</p>

        <div>
          <blockquote>
            The most impressive human feats are, in reality, the aggregate of
            innumerable isolated elements, each of which, in a certain sense, is
            not extraordinary in itself.
          </blockquote>
          <p>
            My most focus was and is always keep improving, every day even in
            baby steps, learn one new thing, doing one different thing, but
            never stoped. On my mind the key to success is not do a lot of
            things in a small time, is do the same thing for a long time.
          </p>

          <blockquote>"The only way to go fast, is to go well"</blockquote>
          <p>
            Do the things running do the idea you are going very well, but dont
            have a way to run fast running wrong. I always priorize quality over
            quantity.
          </p>

          <blockquote>menos porem melhor</blockquote>
          <p>
            I already tried do a lot of thing at the same moment, but what I
            noticed is, if you try do all thing in a same moment you will be a
            duck, fly, walk, swim, but you will not be able to do any of them
            well. So, I just focus on one thing at a time.
          </p>

          <blockquote>Just focus on one thing at a time</blockquote>
          <p>
            Always will have very good oportunities but are less really
            exceptional, and on this I try focus my time. In just do what have
            more potencial, the classing 80/20 rule.
          </p>
        </div>
      </div>
    </div>
  )
}
