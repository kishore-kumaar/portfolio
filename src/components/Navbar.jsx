import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = ["home", "about", "skills", "projects", "contact"]

function Navbar() {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120 // navbar offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActive(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-semibold text-lg">
          Kishore kumaar RK
        </h1>

        <ul className="flex gap-6">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition ${
                  active === section
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navbar
  