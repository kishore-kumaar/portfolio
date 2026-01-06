import profile from "../assets/profile.jpeg"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen pt-24 flex items-center justify-center bg-slate-900 overflow-hidden"
>
<div className="absolute inset-0 opacity-30">
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
  <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
</div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-white"
>
  <span className="block text-lg md:text-xl text-slate-400 font-medium mb-2">
    Hi, I am
  </span>
  <span className="block text-5xl md:text-6xl font-bold">
    Kishore kumaar RK
  </span>
</motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Aspiring software professional exploring multiple domains, building
          scalable and impactful solutions.
        </motion.p>
        </div>
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="flex justify-center md:justify-end"
>
  <img
    src={profile}
    alt="Kishore kumaar RK"
    className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-700 shadow-xl"
  />
</motion.div>

      </div>
    </section>
  )
}

export default Hero
