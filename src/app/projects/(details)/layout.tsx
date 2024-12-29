import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects test'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
