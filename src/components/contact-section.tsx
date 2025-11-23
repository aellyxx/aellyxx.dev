"use client"

import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail size={24} className="text-accent" />,
      title: "Email",
      value: "elyonfrancinebana5@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&to=elyonfrancinebana5@gmail.com&su=Hello&body=Hi%20Elyon,",

      color: "from-pink-500 via-purple-500 to-blue-500",
    },

    
    {
      icon: <Linkedin size={24} className="text-accent" />,
      title: "LinkedIn",
      value: "/in/elyonfrancine",
      link: "https://linkedin.com",
      color: "from-blue-500 via-cyan-400 to-indigo-500",
    },


    {
      icon: <Github size={24} className="text-accent" />,
      title: "GitHub",
      value: "@aellyxx",
      link: "https://github.com/aellyxx",
      color: "from-green-400 via-teal-400 to-cyan-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-28 px-4 sm:px-6 lg:px-8 relative bg-linear-to-b from-black via-background to-black"
    >

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="w-64 h-64 bg-pink-500/30 blur-[140px] absolute -top-10 -left-10" />
        <div className="w-64 h-64 bg-purple-500/30 blur-[140px] absolute bottom-0 right-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-8">
            Let's Connect
          </h2>



        <p className="text-white/70 text-lg max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, id) => (
            <a
              key={id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-3xl p-8 bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden shadow-xl hover:shadow-[0_0_30px] hover:shadow-pink-500/40 transition-all duration-500`}
            >
      

              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r ${contact.color} blur-[60px]`}
              />



              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/10">
                  {contact.icon}
                </div>
           <h3 className="text-xl font-semibold text-accent drop-shadow">{contact.title}</h3>

            <p className="text-white/60 font-medium leading-relaxed">{contact.value}</p>


              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
