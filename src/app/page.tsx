"use client"

import Navigation from "../components/navigation"
import HeroSection from "@/src/components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "../components/skill-section"
import ProjectsSection from "../components/project-section"
import ContactSection from "../components/contact-section"
export default function Home() {

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  )

}
