'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { RegistrationModal } from '../registration-forms/RegistrationModal'
import {
  BadgeCheck,
  Bolt,
  ClipboardList,
  FolderKanban,
  Lock,
  Target,
  Check,
} from 'lucide-react'

const leadFlowPoints = [
  {
    icon: Target,
    title: 'Intent-Matched Requirements',
    desc:
      'Engage with buyers and tenants who have clearly defined what they need, aligned to your areas and inventory.',
  },
  {
    icon: ClipboardList,
    title: 'Early Access to Listing Intent',
    desc:
      'Engage with owners planning to sell or rent by securing interest before properties formally go live.',
  },
  {
    icon: Bolt,
    title: 'Structured Lead Engagement',
    desc:
      'No bulk exposure game. Clear visibility on demand, activity, and engagement.',
  },
  {
    icon: BadgeCheck,
    title: 'Real-Time Demand Signals',
    desc:
      'Receive notifications when new buyer and tenant requirements enter the system.',
  },
  {
    icon: FolderKanban,
    title: 'Professional Tools Included',
    desc: 'Structured lead management, pipeline control, and performance visibility.',
  },
]

const whyDifferent = [
  'No recycled databases.',
  'No paying just to be seen.',
  'No competing for cold, duplicated enquiries.',
  'Deal360 aligns expertise with genuine demand.',
]

export function AgentsSection() {
  const [registrationOpen, setRegistrationOpen] = useState(false)

  return (
    <>
      <section className="px-4 sm:px-6 lg:px-2 py-16 sm:py-20">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 ">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[540px]">
              <Image
                src="/2xcold.png"
                alt="Agent requirements preview"
                width={900}
                height={900}
                className="w-full h-auto object-contain drop-shadow-[0_0_85px_#B9FFE8] dark:drop-shadow-none"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
            <div>
              <div
                className="inline-block rounded-[999px] p-[3px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  className="h-[40px] rounded-[999px] px-5 text-sm text-[#F88379]"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-[#00C274]" />
                  For Agents
                </Button>
              </div>
            </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            No more cold <span className="text-[#F88379]">leads.</span>
          </h2>

          <div className="space-y-3">
            <p className="text-lg sm:text-xl font-medium text-[#4B4B4B] dark:text-white">
              Built for Agents Who Want Real Deal Flow.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              Deal360 connects agents with live buyer and tenant requirements aligned to their expertise and inventory.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70">
              Designed for commission-based professionals who want structure, speed, and serious engagement.
            </p>
          </div>

          <div className="space-y-4 pt-1">
            {leadFlowPoints.map((item) => (
              <div
                key={item.title}
                className="flex gap-3 sm:gap-4 items-start justify-start text-left"
              >
                <span className="mt-1 h-8 w-8 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-[#F88379]" />
                </span>
                <div>
                  <p className="text-[22px] leading-tight font-medium text-[#4B4B4B] dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-[#686868] dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
              Why It&apos;s Different?
            </h3>

            <ul className="space-y-2 text-left">
              {whyDifferent.map((point) => (
                <li
                  key={point}
                  className="flex items-center justify-start gap-3 text-sm sm:text-base text-[#686868] dark:text-white/70"
                >
                  <span className="h-6 w-6 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#F88379]" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div>
              <div
                className="inline-block rounded-[10px] p-[2px]"
                style={{
                  background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  onClick={() => setRegistrationOpen(true)}
                  className="rounded-[8px] h-[48px] px-6 text-base text-[#4B4B4B]"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  Early Agent Registration
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              <Lock className="h-3.5 w-3.5 text-[#F88379] shrink-0" />
              Private &amp; off-market opportunities, some inventory will never be public.
            </div>
          </div>
        </div>
        </div>
      </section>

      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
      />
    </>
  )
}
