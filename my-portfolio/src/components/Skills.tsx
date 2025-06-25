import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', proficiency: 90 },
        { name: 'TypeScript', proficiency: 85 },
        { name: 'Next.js', proficiency: 80 },
        { name: 'Tailwind CSS', proficiency: 95 },
        { name: 'HTML/CSS', proficiency: 90 },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Nest.js', proficiency: 85 },
        { name: 'MySQL', proficiency: 80 },
        { name: 'PostgreSQL', proficiency: 75 },
        { name: 'MongoDB', proficiency: 70 },
        { name: 'GraphQL', proficiency: 75 }, 
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', proficiency: 90 },
        { name: 'Docker', proficiency: 70 },
        { name: 'AWS', proficiency: 65 },
        { name: 'CI/CD', proficiency: 75 },
        { name: 'Testing', proficiency: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis. 
            I'm constantly learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'Python', 'Java', 'C++', 'PHP', 'Ruby',
              'Vue.js', 'Angular', 'Svelte', 'Redux', 'Zustand', 'React Query',
              'MySQL', 'Redis', 'Firebase', 'Supabase', 'Prisma', 'Sequelize',
              'Jest', 'Cypress', 'Playwright', 'Storybook', 'Webpack', 'Vite',
              'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Notion'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 