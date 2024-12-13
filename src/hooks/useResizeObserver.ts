import { useEffect, useState, RefObject } from 'react'

export function useResizeObserver<T extends HTMLElement>(ref: RefObject<T>) {
  const [height, setHeight] = useState<number | 'auto'>('auto')

  useEffect(() => {
    const element = ref.current
    if (element) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height
        setHeight(observedHeight)
      })

      resizeObserver.observe(element)

      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [ref])

  return height
}
