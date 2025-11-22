"use client"

import Navigation from "../components/navigation"
import HeroSection from "@/src/components/hero-section"
import AboutSection from "../components/about-section"
import SkillsSection from "../components/skill-section"
export default function Home() {

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection/>
      <SkillsSection/>
    </main>
  )

}
