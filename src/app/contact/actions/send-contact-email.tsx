'use server'

import { sendEmail } from '@/actions/sendEmail'
import { ContactEmailTemplate } from '../contact-email-template/contact-email-template'

interface SendTemplateProps {
  message: string
  email: string
}

export const sendTemplate = async ({ message, email }: SendTemplateProps) => {
  return await sendEmail({
    email: 'vitorlostada@hotmail.com',
    subject: 'Contact Received',
    template: ContactEmailTemplate({
      message,
      email
    })
  })
}
