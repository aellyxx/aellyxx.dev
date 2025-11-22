"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  // const handleScroll = (id: string) => {
  //   const element = document.getElementById(id)
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" })
  //   }
  // }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-background to-background/50"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold uppercase tracking-widest">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-accent">Elyon</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Front-End Developer turning ideas into polished, interactive websites
              </p>
            </div>

            <p className="text-foreground/60 leading-relaxed max-w-md">
              I’m a passionate developer and artist. I focus on building intuitive, responsive, and visually engaging web experiences while continuously learning and exploring new technologies.
            </p>

        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
 
          <button
            // onClick={() => handleScroll("contact")}
            // ps. will add this later
            className="px-8 py-3 border border-accent/30 text-accent font-semibold rounded-full hover:bg-accent/5 transition-colors"
          >
            Get in Touch
          </button>

          <button
            // onClick={() => handleScroll("projects")}
            className="px-8 py-3 bg-accent text-background font-semibold rounded-full hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 flex items-center justify-center gap-2 group"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

          </div>


          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">

              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>

              <div className="relative w-full h-full bg-accent/10 rounded-full border border-accent/20 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/elyon.jpg"
                  alt="Developer Portrait"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
