import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false)
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  const x = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.4 })
  const y = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.4 })

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse) and no reduced-motion preference
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasFinePointer || reducedMotion) return

    setEnabled(true)
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 192)
      mouseY.set(e.clientY - 192)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed top-0 left-0 z-[55] h-96 w-96 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl"
    />
  )
}

export default CursorGlow
