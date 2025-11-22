"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [

    
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
     "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tenetur est. Aliquam fugit ipsam possimus obcaecati asperiores nesciunt commodi quis debitis quia, sit rem. Illum corrupti officia aspernatur vitae odit?",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "",
      github: "https://github.com",
      live: "https://example.com",
    },


    {
      id: 2,
      title: "Lorem Ipsum",
      description:
       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci voluptate expedita officia neque beatae officiis nostrum quasi similique aperiam. Omnis quo repellendus dolor deleniti quas et reprehenderit incidunt magni",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "",
      github: "https://github.com",
      live: "https://example.com",
    },


    {
      id: 3,
      title: "Lorem Ipsum",
      description:
       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci voluptate expedita officia neque beatae officiis nostrum quasi similique aperiam. Omnis quo repellendus dolor deleniti quas et reprehenderit incidunt magni",

   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "",
      github: "https://github.com",
      live: "https://example.com",
    },
  ]

  return (

    <section
      id="projects"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-background to-black relative"
    >


      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-64 h-64 bg-accent/40 blur-[140px] absolute top-10 left-0" />
        <div className="w-64 h-64 bg-purple-500/40 blur-[140px] absolute bottom-10 right-10" />
      </div>




      <div className="max-w-6xl mx-auto relative z-10 mb-20 text-left">
        <h2 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-white/60 max-w-xl">
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

            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-secondary/5">
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
              <p className="text-foreground/70 text-sm leading-relaxed line-clamp-2">
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
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.live}
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
