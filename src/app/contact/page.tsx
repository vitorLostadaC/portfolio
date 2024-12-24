import { MailIcon, PhoneIcon } from 'lucide-react'
import { EmailForm } from './components/EmailForm'

export default function Contact() {
  return (
    <div className="flex h-full flex-1">
      <div className="flex flex-1 flex-col gap-4">
        <p className="font-semibold text-muted-foreground">Contact me </p>
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="max-w-lg text-muted-foreground">
          Hey! Feel free to contact me through the form or by email. I&apos;m
          always open to discussing new opportunities, collaborations, or just
          having a friendly chat about software development.
        </p>

        <a
          href="mailto:vitorlostada@hotmail.com"
          className="group flex items-center gap-2"
        >
          <MailIcon strokeWidth={1.5} />
          <p className="group-hover:underline">vitorlostada@hotmail.com</p>
        </a>
        <a href="tel:+5548996241180" className="group flex items-center gap-2">
          <PhoneIcon strokeWidth={1.5} />
          <p className="group-hover:underline">+55 48 9 9624-1180</p>
        </a>
      </div>
      <div className="flex-1">
        <EmailForm />
      </div>
    </div>
  )
}
