import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2023 - Present',
      description: 'Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a customer portal serving 100K+ users',
        'Improved application performance by 40% through optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ],
      tech: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: 'Mar 2022 - Dec 2022',
      description: 'Developed and maintained multiple web applications for a fast-growing startup. Worked closely with product managers and designers.',
      achievements: [
        'Built a real-time dashboard that increased user engagement by 35%',
        'Integrated third-party APIs and payment gateways',
        'Reduced bug reports by 50% through improved testing practices',
        'Collaborated with cross-functional teams in an agile environment'
      ],
      tech: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'Stripe API']
    },
    {
      id: 3,
      title: 'Frontend Developer Intern',
      company: 'Digital Solutions Ltd.',
      location: 'Remote',
      period: 'Jun 2021 - Feb 2022',
      description: 'Gained hands-on experience in frontend development while contributing to client projects and learning modern web technologies.',
      achievements: [
        'Developed responsive user interfaces for 3 client projects',
        'Learned and implemented modern CSS frameworks and JavaScript libraries',
        'Participated in code reviews and team meetings',
        'Contributed to open-source projects and documentation'
      ],
      tech: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git']
    },
    {
      id: 4,
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Various',
      period: 'Jan 2021 - Present',
      description: 'Working with clients to build custom web solutions, from simple landing pages to complex web applications.',
      achievements: [
        'Completed 15+ projects for various clients across different industries',
        'Maintained 100% client satisfaction rate',
        'Developed expertise in multiple frameworks and technologies',
        'Built a strong portfolio of diverse projects'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

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
            href="/resume.pdf"
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