'use client'

import { Hero } from './components/hero'
import { Hobbies } from './components/hobbies'
import { Rules } from './components/rules'

export default function About() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Rules />
      <Hobbies />
    </div>
  )
}
