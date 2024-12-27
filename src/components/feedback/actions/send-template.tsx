'use server'

import { sendEmail } from '@/actions/sendEmail'
import { EmailTemplate } from '../email-template/email-template'

interface SendTemplateProps {
  feedback: string
  email: string
  pathname: string
}

export const sendTemplate = async ({
  feedback,
  email,
  pathname
}: SendTemplateProps) => {
  return await sendEmail({
    email: 'vitorlostada@hotmail.com',
    subject: 'Feedback Received',
    template: EmailTemplate({
      feedback,
      email,
      pathname
    })
  })
}
