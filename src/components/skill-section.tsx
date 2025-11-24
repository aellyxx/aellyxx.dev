"use client"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 60 },
        { name: "Next.js", level: 60 },
        { name: "TypeScript", level: 50 },
        { name: "Tailwind CSS", level: 40 },
      ],
    },
//ps. will transfer this to another file later

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Python", level: 70 },
        { name: "C#", level: 50 },
        { name: "Database Design", level: 70 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-28 px-4 sm:px-6 lg:px-8  to-black relative bg-black"
    >
      <div className="max-w-6xl mx-auto">

        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="w-64 h-64 bg-accent/40 blur-[140px] absolute -top-10 -left-4" />
          <div className="w-64 h-64 bg-purple-500/40 blur-[140px] absolute bottom-0 right-10" />
        </div>

        <div className="relative mb-20 text-center">
          <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-lg text-white/60 mt-2 max-w-xl mx-auto">
            Technologies and tools I use to design and build my projects
          </p>
        </div>




        <div className="relative grid md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 relative overflow-hidden shadow-xl"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-accent/20 blur-[60px]" />

              <h3 className="text-xl font-bold text-accent mb-8 drop-shadow">
             {category.title}
              </h3>

              <div className="space-y-7 relative z-10">
                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium">
                        {skill.name}

                      </span>
                  <span className="text-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10 overflow-hidden shadow-inner">
                      <div
                      className="h-full rounded-full bg-linear-to-r from-accent via-purple-500 to-pink-500 animate-pulse transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                   </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
