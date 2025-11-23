"use client"

import { useState } from "react"

interface NavigationProps {
  activeSection: string
  onNavClick: (section: string) => void
}

export default function Navigation({activeSection, onNavClick}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onNavClick(id)
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg z-50 border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div>
            <h1 className="text-xl font-extrabold text-accent drop-shadow-[0_0_8px_rgba(0,140,255,0.7)]">
              Aellyxx Dev
            </h1>
          </div>


         <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`text-sm font-medium drop-shadow-sm transition-colors ${
                activeSection === link.id
                  ? "text-pink-500"
                  : "text-white/80 hover:text-accent"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>


          <div className="md:hidden p-4 text-white">
            <button title="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 drop-shadow-md"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-4 border-t border-secondary/20 space-y-2 bg-black/70 backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={()=>handleScroll(link.id)}
                className="block w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-accent hover:shadow-[0_0_12px_rgba(0,140,255,0.4)] transition-all"
              >
                {link.name}
              </button>
            ))}

            <button 
            onClick={()=>handleScroll("contact")}
            className="w-full px-4 py-2 bg-accent text-background rounded-full font-semibold 
              hover:shadow-[0_0_20px_rgba(0,140,255,0.45)] hover:-translate-y-0.5 transition-all mt-2">
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
