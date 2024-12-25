'use client'

import { MailIcon, PhoneIcon } from 'lucide-react'
import posthog from 'posthog-js'

const links = [
  {
    icon: MailIcon,
    href: 'mailto:vitorlostada@hotmail.com',
    label: 'vitorlostada@hotmail.com'
  },
  {
    icon: PhoneIcon,
    href: 'tel:+5548996241180',
    label: '+55 48 9 9624-1180'
  }
]

export const ContactsLinks = () => {
  return (
    <>
      {links.map((link) => (
        <a
          href={link.href}
          className="group flex items-center gap-2"
          key={link.href}
          onClick={() => {
            posthog.capture('contact_link_clicked', {
              name: link.icon.displayName
            })
          }}
        >
          <link.icon strokeWidth={1.5} />
          <p className="group-hover:underline">{link.label}</p>
        </a>
      ))}
    </>
  )
}
