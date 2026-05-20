import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from "react"


export default function PortfolioWebsite() {
  // ✅ EmailJS hook
  const formRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_wbail0f",
      "template_qbvs44o",
      formRef.current,
      "4GlTSezhbqEdFckKa"
    )
    .then(() => {
      alert("Message sent successfully 🚀")
      formRef.current.reset()
    })
    .catch((error) => {
      console.log(error)
      alert("Failed to send message ❌")
    })
  }

  const projects = [
    {
      title: "LearnHub SaaS",
      description:
        "Modern e-learning platform built with React, Firebase and Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind"],
      link: "https://riyaalearnhubb.vercel.app/"
    },
    {
      title: "LearnHub-1",
      description:
        "Legal-tech website with lawyer listings, subscriptions and modern UI.",
      tech: ["React", "Node.js", "Vite"],
      link: "https://learnhubb-riya.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description:
        "Animated personal portfolio website with responsive design.",
      tech: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://riya-kumari-04.github.io/portfolioo/"
    },
    {
      title: "Aurora-foodie",
      description:
        "Animated personal portfolio website with responsive design.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://restaurant-two-pearl.vercel.app/"
    },
    {
      title: "NextHire",
      description:
        "Animated personal portfolio website with responsive design.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://job-portal-sigma-brown.vercel.app//"
    },
    {
      title: "EstatePro",
      description:
        "Animated personal portfolio website with responsive design.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://estate-pro-wheat.vercel.app/"
    }
    
  ]
  

  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Firebase",
    "Node.js",
    "MongoDB",
    "GitHub",
    "Vercel"
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Riya<span className="text-cyan-400">.dev</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl" />

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            FullStack Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Building Modern
            <br />
            Digital Experiences
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            I create beautiful, responsive and modern web applications using
            React, Tailwind CSS and Firebase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </a>
             <a
    href="/Riya-CV.pdf"
    download
    className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold"
  >
    Download CV
  </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-[450px] rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-3xl bg-zinc-900 flex items-center justify-center text-8xl font-black">
                👩‍💻
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Passionate Developer
              <br />
              From India
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I am a modern frontend developer focused on creating premium UI
              experiences using React ecosystem technologies.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              I love building SaaS products, responsive websites, and modern dashboards with clean UI/UX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-28 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Skills
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies I Use
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-black border border-white/10 hover:border-cyan-400 transition rounded-3xl p-8 text-center"
              >
                <h3 className="text-xl font-semibold">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                  🚀
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Work Together
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Interested in working together or building something amazing?
            Let's connect and create modern digital experiences.
          </p>

          <form
  ref={formRef}
  onSubmit={handleSubmit}
  className="space-y-6 text-left"
>
  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
      required
    />

  </div>

  <textarea
    rows="6"
    name="message"
    placeholder="Your Message"
    className="w-full p-4 rounded-2xl bg-black border border-white/10 focus:border-cyan-400 outline-none"
    required
  />

  <button
    type="submit"
    className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold text-lg"
  >
    Send Message
  </button>
</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500">
        <p>© 2026 Riya.dev — All Rights Reserved.</p>
      </footer>
    </div>
  )
}
