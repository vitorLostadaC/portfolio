import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    RESEND_API_KEY: z.string().min(1)
  },

  clientPrefix: 'NEXT_PUBLIC_',

  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string().min(1),
    NEXT_PUBLIC_POSTHOG_HOST: z.string().min(1)
  },

  runtimeEnv: process.env,

  emptyStringAsUndefined: true
})
