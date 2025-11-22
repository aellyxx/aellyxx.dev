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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
    <div className="max-w-7xl mx-auto w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About me</h2>
      </div>



      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
        <div
            key={idx}
            className="bg-secondary/10 rounded-2xl p-6 flex flex-col items-left text-left justify-start hover:shadow-xl transition-shadow duration-300"
         
         
         >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
            <p className="text-foreground/80">{service.description}</p>
          </div>
        ))}

        
      </div>
    </section>
  )
}
