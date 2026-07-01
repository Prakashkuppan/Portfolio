import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Eye, Github } from 'lucide-react'
import { useState } from 'react'
import Parallax from './Parallax'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Gym Related application',
      description: 'Fitness platform for class booking, workout tracking, and analytics. Developed core features and integrations for seamless fitness tracking and class booking experience.',
      image: 'https://cdn.magicdecor.in/com/2023/10/13182750/I-love-gym-M.jpg',
      tech: ['React Expo', 'React', 'PostgreSQL' ,'Nest.js' , 'Type Script'],
      github: 'https://github.com/Prakashkuppan',
      live: '',
      featured: true,
      lead: false,
      details: 'Developed using React Native, Expo, and React for both mobile and web platforms. Implemented analytics, booking, and user management features.'
    },
    {
      id: 2,
      title: 'Stock Management Related Project',
      description: 'Real estate solution for property, user, and process management. Built frontend with React (TypeScript) and backend with NestJS.',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Inventory_Management.jpg',
      tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
      github: 'https://github.com/Prakashkuppan',
      live: '',
      featured: true,
      lead: false,
      details: 'Delivered robust solutions for real estate property and process management, including user authentication, property listings, and admin dashboards.'
    },
    {
      id: 3,
      title: 'Education Management Platform',
      description: 'Comprehensive platform for managing educational resources, student data, and class schedules. Built with a modern tech stack for seamless administration and user experience.',
      image: 'https://img.freepik.com/premium-photo/digital-learning-global-education-concept_661495-39603.jpg',
      tech: ['React', 'TypeScript', 'NestJS', 'MySQL', 'React Native'],
      github: 'https://github.com/Prakashkuppan',
      live: '',
      featured: true,
      lead: false,
      details: 'Developed core modules for student enrollment, resource allocation, and schedule management. Integrated secure authentication and real-time data updates for administrators and users.'
    },
    {
      id: 4,
      title: 'Doctor Payroll Management System',
      description: 'A payroll platform for healthcare staff — automating salary processing, attendance, payslip generation, and compliance for doctors and hospital employees.',
      // TODO: replace with a real screenshot of the project
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL'],
      github: 'https://github.com/Prakashkuppan',
      live: '',
      featured: true,
      lead: false,
      details: 'Built salary/attendance and payslip modules with React + TypeScript on the frontend and NestJS + PostgreSQL on the backend, and implemented role-based access for doctors and hospital staff.'
    },
    {
      id: 5,
      title: 'Investment & Trading Platform',
      description: 'Led the development of a cross-platform (web + mobile) trading platform for portfolio tracking, order management, and real-time market data with live analytics and insights.',
      // TODO: replace with a real screenshot of the project
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
      tech: ['React', 'React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL', 'WebSocket'],
      github: 'https://github.com/Prakashkuppan',
      live: '',
      featured: true,
      lead: true,
      details: 'Led the project end-to-end across web and mobile: built the web trading dashboard and portfolio views with React + TypeScript, a mobile app with React Native + Expo, developed the NestJS + PostgreSQL backend, and implemented real-time price updates and order flow over WebSockets for a responsive live-trading experience.'
    }
  ]

  type Project = typeof projects[number];
  const [modalProject, setModalProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-900 cursor-pointer"
              onClick={() => setModalProject(project)}
            >
              {/* Project Image — drifts on scroll (parallax) + zooms on hover */}
              <div className="relative h-48 overflow-hidden">
                <Parallax amount={24} className="absolute inset-0 -top-6 -bottom-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Parallax>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse">
                    Featured
                  </div>
                )}
                {project.lead && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium shadow">
                    Led
                  </div>
                )}
              </div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal for Project Details */}
        <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-lg w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 text-gray-400 hover:text-blue-600 text-2xl font-bold" onClick={() => setModalProject(null)}>&times;</button>
              <img src={modalProject.image} alt={modalProject.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">{modalProject.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{modalProject.details}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {modalProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={modalProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Github size={16} />
                  Code
                </a>
                {modalProject.live && (
                  <a href={modalProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Prakashkuppan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            <Eye size={20} />
            View More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 