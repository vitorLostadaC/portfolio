import { MailIcon } from 'lucide-react'
import { EmailForm } from './components/EmailForm'

export default function Contact() {
  return (
    <div className="flex h-full flex-1">
      <div className="flex flex-1 flex-col gap-4">
        <p className="font-semibold text-muted-foreground">Contact me </p>
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="max-w-lg text-muted-foreground">
          Write a welcoming sentence that encourage contact. Include your
          response time commitment and highlight your team&apos;s readiness to
          help.
        </p>

        <a
          href="mailto:vitorlostada@hotmail.com"
          className="group flex items-center gap-2"
        >
          <MailIcon strokeWidth={1.5} />
          <p className="group-hover:underline">vitorlostada@hotmail.com</p>
        </a>
      </div>
      <div className="flex-1">
        <EmailForm />
      </div>
    </div>
  )
}
