"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Download } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center px-6"
    >
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
        
        {/* LEFT SIDE — TEXT */}
        <div className="md:w-1/2 text-left z-10">
          <p className="reveal opacity-0 text-sm tracking-[0.3em] text-primary uppercase mb-6 delay-100">
            Hello, I&apos;m
          </p>

          <h1 className="reveal opacity-0 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-4 delay-200">
            <span className="text-gradient">Soham Bhalekar</span>
          </h1>

          <p className="reveal opacity-0 text-xl md:text-2xl text-muted-foreground font-light mb-6 delay-300">
            UI/UX + Web App Developer
          </p>

          <p className="reveal opacity-0 text-base md:text-lg lg:text-xl text-muted-foreground/80 max-w-xl mb-10 leading-relaxed delay-400 text-pretty">
            Building clean, modern, and internship-ready web experiences with
            attention to detail and user-centered design.
          </p>

          {/* BUTTONS */}
          <div className="reveal opacity-0 flex flex-col sm:flex-row items-start gap-4 delay-500">
            <a
              href="https://drive.google.com/file/d/1i9-JA6qEeObDsg5Eo4hluZZ_2madYncA/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground rounded-full text-sm font-medium transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/profile.png"
            alt="Soham Bhalekar"
            className="w-[300px] md:w-[420px] lg:w-[480px] rounded-full"
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
