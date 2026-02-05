


'use client'

import { Eye, Pentagon, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export function VerificationSection() {
  return (
    <section className="px-2 sm:px-2 py-16 sm:py-20">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-green-50 dark:border-white/10 dark:bg-white/5 w-fit">
            <div className="w-2 h-2 rounded-full bg-[hsl(168,89%,45%)]" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              Verification by Design
            </span>
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
          <div className="w-full lg:w-[643px] bg-[#FBFFFE] dark:bg-[#0b0f14] rounded-[12px] p-6 shadow-[0px_0px_10px_0px_#00000026] dark:shadow-none border border-transparent dark:border-white/10">
            {/* Card Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3 bg-[#FFFFFF] dark:bg-white/5 shadow-md dark:shadow-none px-4 py-3 rounded-[12px] w-full border border-transparent dark:border-white/10">
                <div className="w-[60px] h-[60px]">
                  <Image
                    src="/profile.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-contain rounded-[8px]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-midium text-[#4B4B4B] dark:text-white">Ahmed K.</p>
                  <p className="text-xs text-[#4B4B4B] dark:text-white/70">
                    Senior Agent • Marina View
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-3">
                    <span className="!px-4 py-2 bg-[#E2FFF5] text-[#006946] text-xs font-normal rounded-full">
                      127 Deals
                    </span>
                    <span className="px-4 py-2 bg-[#FFA11D]/20 text-[#4B4B4B] dark:text-white text-xs font-normal rounded-full">
                      Top Rated
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Properties */}
            <div className="space-y-4">
              {[
                {
                  title: 'IBR - Downtown • Marina View',
                  location: 'Dubai Marina, Tower 1',
                  price: 'AED 1,950,000',
                  verified: true,
                  daysAgo: 'Listed 2 days ago',
                },
                {
                  title: '3BR Villa • Private Pool',
                  location: 'Palm Jumeirah, Frond M',
                  price: 'AED 1,500,000',
                  verified: true,
                  daysAgo: 'Listed 2 days ago',
                },
              ].map((prop, idx) => (
                <div
                  key={idx}
                  className="pb-4 bg-[#FFFFFF] dark:bg-white/5 shadow-md dark:shadow-none px-4 py-3 rounded-[12px] border border-transparent dark:border-white/10"
                >
                  <div className="flex justify-between gap-3">
                    <p className="font-medium text-[#4B4B4B] dark:text-white text-base truncate">
                      {prop.title}
                    </p>

                    {prop.verified && (
                      <span className="text-green-600 text-xs flex bg-[#E2FFF5] py-1 px-2 rounded-full shrink-0">
                        <span>
                          <BadgeCheck className="w-4 h-4 mr-1" />
                        </span>
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#868686] dark:text-white/60 mt-1 border-b border-[#e5e5e5] dark:border-white/10 pb-2">
                    {prop.location}
                  </p>

                  <div className="flex items-center justify-between mt-2 gap-3">
                    <p className="font-midium text-[#4B4B4B] dark:text-white text-xl">
                      {prop.price}
                    </p>
                    <p className="text-xs text-[#868686] dark:text-white/60 mt-1">
                      {prop.daysAgo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
