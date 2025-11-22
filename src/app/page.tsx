"use client"

import Navigation from "../components/navigation"
import HeroSection from "@/src/components/hero-section"
export default function Home() {

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <HeroSection />

    </main>
  )
}
