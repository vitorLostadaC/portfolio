// app/providers.js
'use client'
import { env } from '@/env'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(env.PUBLIC_POSTHOG_KEY, {
    api_host: env.PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only'
  })
}
export function PostHogProviderWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
