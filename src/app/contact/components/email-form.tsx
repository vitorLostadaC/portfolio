'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CheckIcon, Loader2Icon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { anim } from '@/lib/utils'
import { useState } from 'react'
import { sendTemplate as sendEmail } from '../actions/send-contact-email'
import posthog from 'posthog-js'

const textAnim = anim({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20, scale: 0.95 }
})

export const EmailForm = () => {
  const [formState, setFormState] = useState<'send' | 'loading' | 'sent'>(
    'send'
  )
  const formSchema = z.object({
    email: z.string().email(),
    message: z.string().min(1)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: ''
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    posthog.capture('contact_form_submitted')
    setFormState('loading')
    await sendEmail({
      message: values.message,
      email: values.email
    })
    setFormState('sent')
    form.reset()
    setTimeout(() => {
      setFormState('send')
    }, 1500)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Hi Vitor, lets talk about..."
                  className="min-h-60 resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid || formState === 'loading'}
        >
          <AnimatePresence mode="popLayout">
            {formState === 'send' && (
              <motion.span key="send" {...textAnim}>
                Send
              </motion.span>
            )}
            {formState === 'loading' && (
              <motion.span key="loading" {...textAnim}>
                <Loader2Icon className="h-4 w-4 animate-spin" />
              </motion.span>
            )}
            {formState === 'sent' && (
              <motion.span
                className="flex items-center gap-2"
                key="sent"
                {...textAnim}
              >
                Message sent <CheckIcon className="size-4 text-green-700" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </form>
    </Form>
  )
}
