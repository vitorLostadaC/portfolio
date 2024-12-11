'use server'

import { sendEmail } from '@/actions/sendEmail'
import { EmailTemplate } from './email-template'

interface SendTemplateProps {
  feedback: string
  email: string
}

export const sendTemplate = async ({ feedback, email }: SendTemplateProps) => {
  return await sendEmail({
    email: 'vitorlostada@hotmail.com',
    subject: 'Feedback Received',
    template: EmailTemplate({
      feedback,
      email
    })
  })
}
