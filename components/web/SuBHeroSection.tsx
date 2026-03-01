'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { RegistrationModal } from '../registration-forms/RegistrationModal'

export default function SubHeroSection() {
  const router = useRouter()
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [registrationTab, setRegistrationTab] = useState<
    'professional' | 'user' | 'company'
  >('professional')

  const openRegistration = (tab: 'professional' | 'user' | 'company') => {
    setRegistrationTab(tab)
    setRegistrationOpen(true)
  }

  const actions: Array<{
    label: string
    href?: string
    tab?: 'professional' | 'user' | 'company'
  }> = [
    { label: 'Submit Requirement', href: '/requirement' },
    { label: 'Submit Listing Intent', href: '/listing-intent' },
    { label: 'User Registration', tab: 'user' },
    { label: 'Professional Registration', tab: 'professional' },
    { label: 'Partner Registration', tab: 'company' },
  ]

  return (
    <>
      <section className="relative overflow-hidden py-14 lg:py-0">
        <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          <div className="flex flex-col gap-2 sm:gap-4 text-center lg:text-left">
          <div>
            <div
              className="inline-block rounded-full p-[4px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                className="rounded-full h-[48px] px-6 md:px-8 text-sm md:text-base text-[#4B4B4B]"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#00C274]"></span>
                Launching in Dubai, UAE
              </Button>
            </div>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-6xl font-medium leading-tight text-[#4B4B4B] dark:text-white">
            A better way to <br />
            navigate <span className="text-[#F88379]">property</span> in <br />
            the <span className="text-[#F88379]">UAE</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#686868] dark:text-white leading-relaxed max-w-5xl mx-auto lg:mx-0">
            We help buyers, sellers, agents, brokerages, and investors make
            clearer property decisions by aligning real demand with verified
            supply launching in Dubai and expanding across the UAE.
          </p>

          <div className="flex flex-wrap gap-4 w-full max-w-[743px] mt-6 justify-center lg:justify-start">
            {actions.map((action) => (
              <div key={action.label} className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px]"
                  style={{
                    background:
                      'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                  }}
                >
                  <Button
                    onClick={() => {
                      if (action.href) {
                        router.push(action.href)
                        return
                      }
                      if (action.tab) {
                        openRegistration(action.tab)
                      }
                    }}
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                    }}
                  >
                    {action.label}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div className="relative flex h-[320px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[940px] items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/hero44.png"
                alt="App screen"
                width={1000}
                height={1000}
                className="w-full h-full object-cover drop-shadow-[0_0_85px_#B9FFE8] dark:drop-shadow-none"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
        initialTab={registrationTab}
      />
    </>
  )
}
