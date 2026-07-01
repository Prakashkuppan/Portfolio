import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'

const ROLES = [
  'Full Stack Developer',
  'React & React Native Dev',
  'NestJS Backend Engineer',
  'UI / UX Enthusiast',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-linked: fade + drift the hero out as you scroll past it
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120])

  // Rotate through roles
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2600)
    return () => clearInterval(id)
  }, [])

  // Mouse parallax for the floating blobs
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const blob1X = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const blob1Y = useTransform(springY, [-0.5, 0.5], [-30, 30])
  const blob2X = useTransform(springX, [-0.5, 0.5], [40, -40])
  const blob2Y = useTransform(springY, [-0.5, 0.5], [40, -40])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window
    mouseX.set(e.clientX / innerWidth - 0.5)
    mouseY.set(e.clientY / innerHeight - 0.5)
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background — drifts down slightly as you scroll for depth */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      >
        <div className="absolute inset-0 opacity-50 dark:opacity-70" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </motion.div>

      {/* Floating Elements — react to both idle animation and mouse parallax */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-20 left-10 w-20 h-20"
      >
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full bg-blue-500/10 rounded-full blur-xl"
        />
      </motion.div>
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="absolute bottom-20 right-10 w-32 h-32"
      >
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full bg-purple-500/10 rounded-full blur-xl"
        />
      </motion.div>

      {/* Main Content — drifts up and fades as you scroll away */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name with animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient"
          >
            Prakash kuppan
          </motion.h1>

          {/* Rotating Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-10 md:h-12 mb-8 flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400"
              >
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with modern technologies.
            Passionate about building scalable, user-friendly applications
            that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Get In Touch
            </motion.button>

            <motion.a
              href="/Prakash Kuppan.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold rounded-lg transition-colors"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-600"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
