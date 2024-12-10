'use server'

import { env } from 'process'
import { Resend } from 'resend'

const resend = new Resend(env.RESEND_API_KEY)

interface SendEmailProps {
  email: string
  subject: string
  template: React.ReactNode
}

export const sendEmail = async ({
  email,
  subject,
  template
}: SendEmailProps) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <portfolio@resend.dev>',
      to: [email],
      subject,
      react: template
    })

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 })
    }

    return new Response(JSON.stringify(data))
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
