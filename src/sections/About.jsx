import { motion } from "framer-motion"

function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg leading-relaxed"
        >
          I am a Computer Science graduate with a strong interest in
          building reliable software systems and understanding how technology
          solves real-world problems. I enjoy learning across domains, from
          backend development to data and product-oriented roles, and I am
          continuously improving my technical and problem-solving skills.<br />
          <br />
          University:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vellore Institute of Technology (VIT), Vellore &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2021-25]
        </motion.p>
      </div>
    </section>
  )
}

export default About
