'use client'

import { Zap, TrendingUp, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export function AgentsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-2 py-16 sm:py-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Left - Dashboard Card */}
        <div className="flex justify-center relative">
          {/* overlay (ONLY LG) */}
          <div
            className="hidden lg:block h-[950px] w-[730px] absolute top-[50%] left-[50%] -z-30 
              translate-x-[-50%] translate-y-[-50%] 
              bg-center bg-no-repeat bg-cover rounded-[12px]"
            style={{ backgroundImage: "url('/overly.png')" }}
          />

          <div className="w-full bg-[#FBFFFE] dark:bg-[#0b0f14] rounded-[12px] shadow-lg dark:shadow-none border border-transparent dark:border-white/10 overflow-hidden">
            {/* Window Controls */}
            <div className="flex gap-2 px-6 py-4 border-b border-gray-100 dark:border-white/10">
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="w-3 h-3 rounded-full bg-red-400" />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6 border-b border-[#e5e5e5] dark:border-white/10 pb-2 gap-3">
                <h3 className="text-2xl font-normal text-[#4B4B4B] dark:text-white">
                  Live Requirements
                </h3>
                <span className="text-xs bg-[#E2FFF5] text-[#006946] px-3 py-1 rounded whitespace-nowrap">
                  12 Now
                </span>
              </div>

              {/* Agent List */}
              <div className="space-y-3">
                {[
                  { name: 'Ahmed K.', action: 'Buy', match: '95%', location: 'Downtown Dubai' },
                  { name: 'Wade Warren', action: 'Buy', match: '80%', location: 'Downtown Dubai' },
                  { name: 'Cameron Williamson', action: 'Rent', match: '80%', location: 'Downtown Dubai' },
                  { name: 'Jerome Bell', action: 'Buy', match: '85%', location: 'Downtown Dubai' },
                ].map((agent, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#FFFFFF] dark:bg-white/5 shadow-md dark:shadow-none px-4 py-3 rounded-[12px] border border-transparent dark:border-white/10"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-[48px] h-[48px] shrink-0">
                        <Image
                          src="/profile.png"
                          width={1000}
                          height={1000}
                          alt="Avatar"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-base font-medium text-[#4B4B4B] dark:text-white truncate">
                          {agent.name}
                        </p>
                        <p className="text-xs text-[#868686] dark:text-white/60 truncate">
                          AED 2.3M • {agent.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 ml-3 shrink-0">
                      <span className="text-base font-semibold text-[#0DAE78] min-w-fit">
                        {agent.match}
                      </span>
                      <span className="text-xs text-[#868686] dark:text-white/60">
                        Match
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 dark:border-white/10 bg-orange-50 dark:bg-white/5 w-fit">
            <div className="w-2 h-2 rounded-full bg-[#FF6B5B]" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              For Agents
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#4B4B4B] dark:text-white leading-tight">
              No more cold <span className="text-[#F88379]">leads.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#686868] dark:text-white/70 leading-relaxed">
              Stop chasing unqualified inquiries. Deal360 connects you with buyers and renters who
              have verified intent and real budgets. See live requirements matched to your listings.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {[
              { icon: Zap, label: 'Intent-matched leads', desc: 'Only serious buyers' },
              { icon: TrendingUp, label: 'Real-time updates', desc: 'New requirements instantly' },
              { icon: BadgeCheck, label: 'Verified clients', desc: 'No time wasters' },
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-[48px] h-[48px] bg-[#FFEFEE] dark:bg-white/10 rounded-full flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-[#4B4B4B] dark:text-white flex-shrink-0 mt-1" />
                </div>

                <div className="min-w-0">
                  <p className="font-midium text-xl text-[#4B4B4B] dark:text-white">
                    {feature.label}
                  </p>
                  <p className="text-sm text-[#565656] dark:text-white/60">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
