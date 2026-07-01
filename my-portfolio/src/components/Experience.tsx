import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Associate Trainee – Full Stack Developer',
      company: 'Finstein',
      location: 'Chennai',
      period: 'July 2024 – Present',
      description: 'Leading and contributing to the development of key projects at Finstein, focusing on scalable web and mobile solutions.',
      details: [
        'Gym application: Developed using React Native, Expo, and React for both mobile and web platforms. Implemented core features and integrations for a seamless fitness tracking and class booking experience.',
        'Shriram Properties Web App: Built frontend with React (TypeScript) and backend with NestJS, delivering robust solutions for real estate property and process management.',
        'Doctor Payroll Management System: Developed a payroll platform for healthcare staff — salary processing, attendance, payslip generation, and role-based access — using React, TypeScript, NestJS, and PostgreSQL.',
        'Investment & Trading Platform: Led development of a cross-platform (web + React Native/Expo mobile) trading app with portfolio tracking, order management, and real-time market data over WebSockets, backed by NestJS and PostgreSQL.',
        'Designing, coding, and maintaining scalable applications, while following best practices in JavaScript, TypeScript, API design, and security.',
        'Managing data modeling, migrations, and querying with PostgreSQL and MariaDB databases.',
        'Coordinating with cross-functional teams to define requirements, improve user experience, and ensure timely project delivery.',
        'Ensuring code quality through regular reviews, unit testing, and comprehensive documentation.'
      ],
      tech: ['React', 'React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL', 'WebSocket', 'MariaDB', 'JavaScript', 'MySQL']
    },
    {
      id: 2,
      title: 'Project Intern',
      company: 'Flipkart Warehouse',
      location: 'Chennai',
      period: 'Oct 2023 – Nov 2023',
      description: 'Assisted in optimizing inventory management and order fulfillment processes.',
      details: [
        'Gained hands-on experience in logistics operations and supply chain management.'
      ],
      tech: ['Logistics', 'Supply Chain']
    },
    {
      id: 3,
      title: 'Business Development Associate',
      company: 'BrightGeeks Technology',
      location: 'Bangalore',
      period: 'Feb 2024 – Apr 2024',
      description: 'Coordinated internal teams, performed market research, and managed client relationships.',
      details: [
        'Developed strong skills in business development, communication, and project management.'
      ],
      tech: ['Business Development', 'Market Research']
    }
  ]

  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development, from internships to senior roles, 
            has equipped me with diverse skills and experiences.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-200 to-blue-400 dark:from-blue-700 dark:via-blue-900 dark:to-blue-700"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center shadow-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-blue-100 dark:border-blue-900">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <ExternalLink size={14} />
                          {experience.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {experience.location}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium">
                        <Calendar size={14} />
                        {experience.period}
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    {/* Expandable Details */}
                    <button
                      className="text-blue-600 dark:text-blue-400 underline text-sm mb-2 focus:outline-none"
                      onClick={() => setExpanded(expanded === experience.id ? null : experience.id)}
                      aria-expanded={expanded === experience.id}
                    >
                      {expanded === experience.id ? 'Hide Details' : 'Show More'}
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: expanded === experience.id ? 'auto' : 0, opacity: expanded === experience.id ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: 'hidden' }}
                    >
                      {expanded === experience.id && (
                        <ul className="space-y-1 mb-4">
                          {experience.details.map((item, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/Prakash Kuppan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={20} />
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 