import { motion } from "framer-motion"

const skills = [
  "Languages: ",
  "Python",
  "JavaScript",
  "SQL",
  "Frontend: ",
  "HTML",
  "CSS",
  "React",
  "Backend: ",
  "Node.js",
  "Express",
  "Rest APIs",
  "Tools: ",
  "Git,Github",
  "AI APIs",
  "",
  "Databases: ",
  "MongoDB"
]

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-lg py-4 text-center text-slate-200 font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
