
'use client'

import { AgentsSection } from '@/components/web/AgentsSection'
import Brokerage from '@/components/web/Brokerage'
import { HeroSection } from '@/components/web/HeroSection'
import { IncentivesSection } from '@/components/web/IncentivesSection'
import PropertyIntent from '@/components/web/IntentSection'
import Joindeal from '@/components/web/Joindeal'
import OwnersInControl from '@/components/web/OwnersInControl'
import NotAPortalSection from '@/components/web/NotAPortalSection'
import { PortalSection } from '@/components/web/PortalSection'
import { PricingSection } from '@/components/web/PricingSection'
import PropertyManager from '@/components/web/PropertyManager'
import SmarterFilters from '@/components/web/SmarterFilters'
import SubHeroSection from '@/components/web/SuBHeroSection'
import { VerificationSection } from '@/components/web/VerificationSection'
import WhatsComing from '@/components/web/WhatsComing'

export default function Home() {
  return (
    <div className="">
     

      {/* Requirements */}
      <section id="requirements">
        <HeroSection />
      </section>

      <WhatsComing/>

      <SubHeroSection/>

      <PortalSection />

      <NotAPortalSection />

      {/* Buying Intent */}
      <section id="buying-intent">
        <PropertyIntent />
      </section>

      <VerificationSection />

      {/* Agent */}
      <section id="agent">
        <AgentsSection />
      </section>

      {/* Brokerages */}
      <section id="brokerages">
        <Brokerage />
      </section>
      <SmarterFilters/>
      <OwnersInControl/>
      <PropertyManager/>
      <NotAPortalSection/>
      {/* Investor */}
      {/* <section id="investor">
        <PortfolioSection />
      </section> */}

      <Joindeal />
      <PricingSection />
      <IncentivesSection />
  
    </div>
  )
}
