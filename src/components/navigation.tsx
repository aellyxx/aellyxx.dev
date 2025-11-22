"use client"

interface NavigationProps {}

export default function Navigation({}: NavigationProps) {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Me", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h1 className="text-xl font-bold text-accent">Aellyxx Dev</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className="text-sm font-medium text-foreground/70 hover:text-foreground"
              >
                {link.name}
              </button>
            ))}

            <button className="px-4 py-2 bg-accent text-background rounded-full font-medium hover:bg-accent/90 transition-colors">
              Get in Touch
            </button>
          </div>
          <div className="md:hidden p-2 text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>

     <div className="md:hidden pt-4 pb-4 border-t border-secondary/10 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="block w-full text-left px-4 py-2 rounded-md text-foreground/70 hover:bg-secondary/5"
            >
              {link.name}
            </button>
          ))}

          <button className="w-full px-4 py-2 bg-accent text-background rounded-md font-medium hover:bg-accent/90 mt-2">
            Get in Touch
     </button>
        </div>
      </div>
    </nav>
  )
}
