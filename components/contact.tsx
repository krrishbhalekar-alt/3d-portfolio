"use client"

import { useEffect, useRef } from "react"
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:sohambhalekar18@email.com",
    icon: <Mail size={20} />,
    label: "sohambhalekar18@email.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-bhalekar-145243331",
    icon: <Linkedin size={20} />,
    label: "linkedin.com/in/sohambhalekar",
  },
  {
    name: "GitHub",
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

        {/* Heading */}
        <h2 className="reveal opacity-0 text-3xl md:text-5xl font-semibold text-foreground mb-6 delay-100">
          Open for Internships & Projects
        </h2>

        {/* Description */}
        <p className="reveal opacity-0 text-lg text-muted-foreground max-w-2xl mb-12 delay-200">
          I’m a UI/UX and Web App Developer actively seeking internship opportunities
          and real-world projects. If you’re a recruiter, startup, or founder,
          let’s connect and build impactful digital experiences.
        </p>

        {/* Primary CTA */}
        <div className="reveal opacity-0 mb-12 delay-250">
          <a
            href="mailto:sohambhalekar18@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium glow-mint hover:scale-[0.97] transition-all duration-300"
          >
            Email Me
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Contact Links */}
        <div className="reveal opacity-0 space-y-4 delay-300">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between p-6 rounded-xl glass hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {link.icon}
                </span>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {link.name}
                  </div>
                  <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.label}
                  </div>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="reveal opacity-0 mt-24 pt-12 border-t border-border text-center delay-400">
          <p className="text-sm text-muted-foreground">
            Designed & Built by{" "}
            <span className="text-foreground">Soham Bhalekar</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
