"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [


    {
      id: 1,
      title: "Everything Matcha",
      description:
     "Everything Matcha is a blog website I created to share my passion love and for matcha",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/everything-matcha.png",
      github: "https://github.com/aellyxx/everything-matcha",
      live: "https://everything-matcha.vercel.app/",
    },


    {
      id: 2,
      title: "Sigrab",
      description:
       "Sigrab is a ticketing website for the Sigrab Film Festival. I contributed to the front-end design of the admin panel, working under the guidance of Software Engineering students from CPU.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
      image: "/images/sigrab.png",
      github: "",
      live: "https://www.sigrab.site/",
    },


    {
      id: 3,
      title: "Candelight",
      description:
       "Candelight is a blog where I share my love for candle making, from techniques and ideas to inspiration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/candelight.png",
      github: "https://github.com/aellyxx/candelight",
      live: "https://candelight.vercel.app/",
    },
  ]

  return (

    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-background"
    >


      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-64 h-64 bg-accent/40 blur-[140px] absolute top-10 left-0" />
        <div className="w-64 h-64 bg-purple-500/40 blur-[140px] absolute bottom-10 right-10" />
      </div>




      <div className="max-w-6xl mx-auto relative z-10 mb-20 text-center">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Featured Projects
        </h2>
          <p className="text-lg text-white/60 mt-2 max-w-xl mx-auto">
          Some of the projects I've worked on, showcasing my skills in modern web development.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div

            key={project.id}
            className="group rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 relative overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(0,140,255,0.3)] transition-all"
          >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/20 blur-[60px]" />

            <div className="relative h-48 overflow-hidden bg-linear-to-br from-accent/10 to-secondary/5">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>



            <div className="p-6 space-y-4 relative z-10">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}

              </div>


              <div className="flex gap-3 pt-4 border-t border-white/10">

                {project.github ? (
                  <a
                  target="_blank"
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-white/40 text-sm cursor-not-allowed">
                    Private
                  </div>
                )}

                <a
                  href={project.live}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-accent/10 hover:bg-accent/20 text-accent hover:text-accent rounded-lg transition-colors text-sm font-medium"
                >


                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
