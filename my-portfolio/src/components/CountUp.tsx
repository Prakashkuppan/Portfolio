import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

type Props = {
  end: number
  suffix?: string
  duration?: number
}

/** Animates a number from 0 → end once it scrolls into view. */
const CountUp = ({ end, suffix = '', duration = 1500 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    let raf = 0
    let start: number | null = null
    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      // easeOutCubic for a nice deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default CountUp
