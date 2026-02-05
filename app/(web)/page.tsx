'use client'

import { AgentsSection } from "@/components/web/AgentsSection"
import { HeroSection } from "@/components/web/HeroSection"
import PropertyIntent from "@/components/web/IntentSection"
import { Navigation } from "@/components/web/Navigation"
import { PortalSection } from "@/components/web/PortalSection"
import { VerificationSection } from "@/components/web/VerificationSection"



export default function Home() {
  return (
    <div className="">
      <Navigation />
      <HeroSection/>
      <PortalSection/>
      <PropertyIntent/>
      <VerificationSection/>
      <AgentsSection/>
    </div>
  )
}
 