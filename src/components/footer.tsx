"use client"

import { Phone, Facebook, Instagram } from "lucide-react"
import { useState } from "react"
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const [showPhone, setShowPhone] = useState(false)

  const socials = [
    {
      type: "phone",
      icon: <Phone size={24} />,
      value: "09975725766",
      color: "text-green-400",
    },


    {
      type: "link",
      icon: <Facebook size={24} />,
      link: "https://www.facebook.com/share/1ByRoJdSre/",
      color: "text-blue-500",
    },
    {
      type: "link",
      icon: <Instagram size={24} />,
      link: "https://www.instagram.com/aell_yon?igsh=MWpwcGE0dWJxOXh2",
      color: "text-pink-500",
    },
  ]

  return (
    <footer className="bg-background/50 border-t border-secondary/20 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-48 h-48 bg-green-400/20 blur-[100px] absolute -top-10 -left-10" />
        <div className="w-48 h-48 bg-pink-500/20 blur-[100px] absolute -bottom-10 -right-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center space-y-4">
        <div className="flex gap-6">

          {socials.map((social, id) =>
            social.type === "phone" ? (
              <div
                key={id}
                className={`relative cursor-pointer hover:scale-110 transition-transform duration-300 drop-shadow-md ${social.color}`}
                onMouseEnter={() => setShowPhone(true)}
                onMouseLeave={() => setShowPhone(false)}
              >
                {social.icon}
                {showPhone && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 text-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    {social.value}
                  </div>
                )}
              </div>


            ) : (
              <a
                key={id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform duration-300 drop-shadow-md ${social.color}`}
              >
                {social.icon}
              </a>
            )
          )}
        </div>


        <p className="text-foreground/60 text-sm text-center">
          Copyright {currentYear} Elyon Francine. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
