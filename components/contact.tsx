"use client"

import { useEffect, useRef } from "react"
import { Mail, Linkedin, Github, ArrowUpRight, FileText } from "lucide-react"

const socialLinks = [
  {
    name: "Direct Email",
    href: "mailto:sohambhalekar18@email.com",
    icon: <Mail size={20} />,
    label: "sohambhalekar18@email.com",
  },
  {
    name: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/soham-bhalekar-145243331",
    icon: <Linkedin size={20} />,
    label: "linkedin.com/in/sohambhalekar",
  },
  {
    name: "GitHub Projects",
    href: "https://github.com/sohambhalekar",
    icon: <Github size={20} />,
    label: "github.com/sohambhalekar",
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px" }
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Label */}
        <div className="reveal opacity-0 flex items-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-primary" />
          <span className="text-sm tracking-[0.2em] text-primary uppercase">
            Get in Touch
          </span>
        </div>

        {/* Heading – OPTION 1 */}
        <h2 className="reveal opacity-0 text-3xl md:text-5xl font-semibold text-foreground mb-6 delay-100">
          UI/UX & Web Developer — Open to Internships
        </h2>

        {/* Improved Description */}
        <div className="reveal opacity-0 space-y-3 max-w-2xl mb-12 delay-200">
          <p className="text-lg text-muted-foreground">
            I’m a UI/UX and Web App Developer focused on building clean,
            modern, and production-ready web applications.
          </p>
          <p className="text-lg text-muted-foreground">
            Currently seeking internship opportunities and real-world projects.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="reveal opacity-0 flex flex-wrap items-center gap-4 mb-14 delay-300">
          <a
            href="mailto:sohambhalekar18@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300"
          >
            Email Me <ArrowUpRight size={18} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FileText size={16} />
            View Resume →
          </a>

          <span className="text-xs text-muted-foreground/70">
            Usually replies within 24 hours
          </span>
        </div>

        {/* Contact Cards */}
        <div className="reveal opacity-0 space-y-4 delay-400">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Direct Email" ? "_blank" : undefined}
              rel={link.name !== "Direct Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-6 rounded-xl glass border border-border hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground group-hover:text-primary transition-colors">
                  {link.icon}
                </span>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {link.name}
                  </div>
                  <div className="text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </div>
                </div>
              </div>

              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="reveal opacity-0 mt-24 pt-12 border-t border-border text-center delay-500">
          <p className="text-sm text-muted-foreground">
            Designed & Built by <span className="text-foreground">Soham Bhalekar</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
