import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-6">
      <Link href="/" className="uppercase">
        Vitor Lostada
      </Link>

      <nav className="flex gap-8 text-muted-foreground">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
