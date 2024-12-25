import { EmailForm } from './components/email-form'
import { ContactsLinks } from './components/contacts-links'

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

        <ContactsLinks />
      </div>
      <div className="flex-1">
        <EmailForm />
      </div>
    </div>
  )
}
