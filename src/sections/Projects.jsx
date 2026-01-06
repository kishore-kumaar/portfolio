import { motion } from "framer-motion"

const projects = [
  {
    title: "Personal Finance Tracker",
    description:
      "A full stack application to track income and expenses with category-wise analysis and monthly summaries.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://ai-finance-analyzer-ten.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with modern UI, animations, and clean design.",
    tech: ["React", "Tailwind CSS"],
    link: "#",
  },

  {
    title: "Role-Based SaaS Productivity & Operations Platform",
    description:
      "A full-stack SaaS application to manage role-based workflows, tasks, and operational data with analytics-driven insights.",
    tech: ["Python", "SQL", "JWT Authentication"],
    link: "#",
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">

      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition transform hover:-translate-y-1 hover:shadow-lg"

            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-indigo-400 hover:underline"
>
  View Project →
</a>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
