'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

export const Deprecated = () => {
  useEffect(() => {
    setTimeout(() => {
      toast.error("This portfolio is deprecated. I'm working on new one.", {
        position: 'top-right',
        duration: 10000
      })
    }, 1000)
  }, [])
  return (
    <div>
      <h1>Deprecated</h1>
    </div>
  )
}
