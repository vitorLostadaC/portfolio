import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1)
  },

  clientPrefix: 'PUBLIC_',

  client: {
    PUBLIC_POSTHOG_KEY: z.string().min(1),
    PUBLIC_POSTHOG_HOST: z.string().min(1)
  },

  runtimeEnv: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST
  },

  emptyStringAsUndefined: true
})
