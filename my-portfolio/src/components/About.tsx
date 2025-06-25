import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Shield,
  GitBranch,
  Cpu
} from 'lucide-react'

const About = () => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-500' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-400' },
    { name: 'Next.js', icon: Globe, color: 'text-black dark:text-white' },
    { name: 'React Native', icon: Smartphone, color: 'text-blue-500' },
    { name: 'GraphQL', icon: Zap, color: 'text-pink-500' },
    { name: 'Docker', icon: Shield, color: 'text-blue-600' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Full Stack Developer
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated Full Stack Developer with over 3 years of experience 
                building modern web applications. My journey in software development 
                started with a curiosity about how things work on the internet, and 
                it has evolved into a passion for creating meaningful digital experiences.
              </p>
              <p>
                I specialize in JavaScript/TypeScript ecosystems, with expertise in 
                React, Node.js, and modern web technologies. I believe in writing 
                clean, maintainable code and staying up-to-date with the latest 
                industry trends and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I'm always excited to take on new 
                challenges and learn from every project.
              </p>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} mb-2`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              20+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Client Satisfaction
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 