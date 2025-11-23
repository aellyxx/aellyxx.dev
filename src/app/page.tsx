"use client"
import {useState} from "react"
import Navigation from "../components/navigation"
import HeroSection from "@/src/components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "../components/skill-section"
import ProjectsSection from "../components/project-section"
import ContactSection from "../components/contact-section"
import Footer from "../components/footer"

export default function Home() {
    const [activeSection, setActiveSection] = useState("home")

  const handleNavClick = (section: string) => {
    setActiveSection(section)
  }

  return (
    <main className="bg-background text-foreground min-h-screen">
        <Navigation activeSection={activeSection} onNavClick={handleNavClick} />
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  )

  
}
