'use client'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import posthog from 'posthog-js'

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/talks', label: 'Talks' },
  { href: '/contact', label: 'Contact' },
  { href: '/recommendations', label: 'Recommendations' }
]

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between p-4">
      <Link
        href="/"
        className="uppercase"
        onClick={() => posthog.capture('home_clicked')}
      >
        Vitor Lostada
      </Link>

      <nav className="hidden gap-8 text-muted-foreground md:flex">
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
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="sr-only">Menu</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4 text-center">
            {links.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link href={link.href}>{link.label}</Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
