import { useRef } from 'react'
import type { ReactNode } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  /** Vertical travel in px across the element's time in the viewport. Higher = stronger drift. */
  amount?: number
  className?: string
}

/**
 * Scroll-linked parallax wrapper. The child drifts vertically as the element
 * passes through the viewport. Respects prefers-reduced-motion (renders static).
 */
const Parallax = ({ children, amount = 40, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount])

  return (
    <motion.div ref={ref} style={{ y: reduce ? 0 : y }} className={className}>
      {children}
    </motion.div>
  )
}

export default Parallax
