import { motion } from "framer-motion"
import { FiMail } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import emailjs from "@emailjs/browser"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus("Sending...")

   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.from_name,
    reply_to: formData.reply_to,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setStatus("Message sent successfully!")
          setFormData({ from_name: "", reply_to: "", message: "" })
        },
        (error) => {
          console.error(error)
          setStatus("Failed to send message. Please try again.")
        }
      )
  }

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Contact
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE — CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-slate-300">
              <FiMail size={22} />
              <span>Kishorekumaar.rk@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <FaGithub size={22} />
              <a
                href="https://github.com/kishore-kumaar?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline-offset-4 hover:underline transition"
              >
                Link to GitHub
              </a>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <GoDotFill className="text-green-400" />
              <span>Open to opportunities</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Form
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your message"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-indigo-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-2 rounded-lg"
              >
                Submit
              </button>

              {status && (
                <p className="text-sm text-slate-400 mt-3">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
