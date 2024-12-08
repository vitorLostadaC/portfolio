'use client'

import dynamic from 'next/dynamic'

const Gradient = dynamic(() => import('./test').then((mod) => mod.Gradient), {
  ssr: false,
  loading: () => <div>Loading...</div>
})

export default function Home() {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-8xl font-bold">Vitor Lostada</h1>
        <h4 className="text-4xl text-muted-foreground">
          Pixel Perfect Frontend Developer
        </h4>
      </div>
      <Gradient />
    </>
  )
}
