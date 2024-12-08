import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <Link href="/" className="uppercase">
        Vitor Lostada
      </Link>

      <nav className="flex gap-8 text-muted-foreground">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/talks">Talks</Link>
        <Link href="/recommendations">Recommendations</Link>
      </nav>
    </header>
  )
}
