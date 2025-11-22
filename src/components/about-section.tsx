"use client"

import { GraduationCap, Code, Paintbrush, Server } from "lucide-react"

export default function AboutCards() {
  const services = [
    {
      icon: <GraduationCap className="w-10 h-10 text-accent" />,
      title: "Student",
      description:
        "Currently pursuing BS Computer Science at Central Philippine University, focused on learning and growing as a developer.",
    },
    {
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Front-end Focus",
      description:
        "Specialized in front-end development using React, Next.js, and TypeScript, with a goal to become a full-stack developer.",
    },
    {
      icon: <Paintbrush className="w-10 h-10 text-accent" />,
      title: "Artist",
      description:
        "Believe in da Vinci's philosophy of blending art and science; create both digital and traditional art.",
    },
    {
      icon: <Server className="w-10 h-10 text-accent" />,
      title: "Backend Learner",
      description:
        "In my free time, I study backend development, exploring Node.js, databases, and APIs to grow toward full-stack skills.",
    },
  ]

  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-background to-black relative"
    >

      {/* blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-64 h-64 bg-accent/40 blur-[140px] absolute top-10 left-0" />
        <div className="w-64 h-64 bg-purple-500/40 blur-[140px] absolute bottom-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-left mb-20">
        <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4">
          About me
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {services.map((service, idx) => (
          <div
            key={idx}
            className="group p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 relative overflow-hidden shadow-xl"
          >
            {/* neon hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/20 blur-[60px]" />

            <div className="relative z-10 space-y-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-foreground/80">
                {service.description}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}
