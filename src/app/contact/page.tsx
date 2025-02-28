import { ContactsLinks } from './components/contacts-links'
import { EmailForm } from './components/email-form'

export default function Contact() {
  return (
    <div className="flex h-full flex-1 flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
      <div className="flex flex-1 flex-col gap-6">
        <h1 className="text-3xl font-bold">Get in touch</h1>
        <p className="font-semibold text-muted-foreground">Contact me </p>
        <p className="max-w-lg leading-7 text-muted-foreground">
          Hey! Feel free to contact me through the form or by email. I&apos;m
          always open to discussing new opportunities, collaborations, or just
          having a friendly chat about software development.
        </p>

        <ContactsLinks />
      </div>
      <div className="w-full flex-1">
        <EmailForm />
      </div>
    </div>
  )
}
