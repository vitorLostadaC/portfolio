'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/talks', label: 'Talks' },
  { href: '/contact', label: 'Contact' }
]

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-6">
      <Link
        href="/"
        className="uppercase"
        onClick={() => posthog.capture('home_clicked')}
      >
        Vitor Lostada
      </Link>

      <nav className="flex gap-8 text-muted-foreground">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname.includes(link.href) && 'text-primary'
            )}
            onClick={() => {
              posthog.capture('header_link_clicked', {
                link: link.href
              })
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/recommendations">Recommendations</Link>
      </nav>
    </header>
  )
}
