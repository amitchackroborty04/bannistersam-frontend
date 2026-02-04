'use client'

import { HeroSection } from "@/components/web/HeroSection"
import { Navigation } from "@/components/web/Navigation"



export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection/>
  
    </div>
  )
}
 