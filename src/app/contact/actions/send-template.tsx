'use server'

import { sendEmail } from '@/actions/sendEmail'
import { EmailTemplate } from '../email-template/email-template'

interface SendTemplateProps {
  message: string
  email: string
}

export const sendTemplate = async ({ message, email }: SendTemplateProps) => {
  return await sendEmail({
    email: 'vitorlostada@hotmail.com',
    subject: 'Contact Received',
    template: EmailTemplate({
      message,
      email
    })
  })
}
