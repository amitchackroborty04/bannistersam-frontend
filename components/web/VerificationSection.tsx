


'use client'

import { Eye, Pentagon, BadgeCheck } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

export function VerificationSection() {
  return (
    <section className="px-2 py-16 sm:py-20">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
         <div
              className="inline-block rounded-full p-[4px]"
              style={{
                background:
                  "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
              }}
            >
              <Button
                className="rounded-full px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                style={{
                  background:
                    "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                }}
              >
                <span className='w-2 h-2 rounded-full bg-[#00C274]'></span>
                Verification by Design 
              </Button>
            </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#4B4B4B] dark:text-white leading-tight">
              Verification <span className="text-[#F88379]">filters</span> out the{' '}
              <span className="text-[#F88379]">noise.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#686868] dark:text-white/70 leading-relaxed">
              Every agent on Deal360 is verified. Every listing is checked. No more fake
              listings, no more unresponsive agents. Just genuine opportunities with verified
              professionals.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              { icon: BadgeCheck, label: 'Verified Agents' },
              { icon: Pentagon, label: 'Checked Listings' },
              { icon: Eye, label: 'Transparent Pricing' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="bg-[#FFEFEE] dark:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#4B4B4B] dark:text-white flex-shrink-0" />
                </div>
                <span className="text-[#F88379] font-medium text-xl">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Card Component */}
        <div className="flex justify-center">
          {/* NOTE: LG width unchanged. Small device এ full width */}
         <Image
            src="/newlaptop.png"
            alt="Verification feature preview"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-[16px]"
            priority
          />
        </div>
      </div>
    </section>
  )
}
