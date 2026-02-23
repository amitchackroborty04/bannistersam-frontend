


'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="py-1 lg:py-0  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-2 sm:gap-4 text-center lg:text-left">
          

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-[34px] sm:text-[44px] lg:text-6xl font-medium dark:text-white leading-tight text-[#4B4B4B]">
                Dubai real estate is about to {""}
                <span className="text-[#F88379]">change</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-5xl mx-auto lg:mx-0">
              A new platform built around verified agents, real demand, and private opportunities.
            </p>
            <h4 className='text-xl sm:text-2xl text-[#4B4B4B] font-semibold'>Launching soon.</h4>
            <h5 className='text-2xl sm:text-3xl text-[#F88379] font-semibold'>Founding Registration</h5>
            <p className='text-base sm:text-lg text-[#4B4B4B] font-normal'>Not everyone will get the same access.</p>
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-5xl mx-auto lg:mx-0">
              Wer&apos;e opening early registration to a select group of agents and brokerages before official launch.
            </p>
            <ol className=' space-y-3 pl-2'>
              <li className='flex items-center gap-2 text-[#4B4B4B] text-base sm:text-lg font-normal'>
                <div className='w-[32px] h-[32px] rounded-full bg-[#F883791A] flex items-center justify-center mb-1'>
                  <Check className="h-4 w-4 text-[#F88379]" />
                </div>
                Priority visibility

              </li>
              <li className='flex items-center gap-2 text-[#4B4B4B] text-base sm:text-lg font-normal'>
                <div className='w-[32px] h-[32px] rounded-full bg-[#F883791A] flex items-center justify-center mb-1'>
                  <Check className="h-4 w-4 text-[#F88379]" />
                </div>
                Early feature access

              </li>
              <li className='flex items-center gap-2 text-[#4B4B4B] text-base sm:text-lg font-normal'>
                <div className='w-[32px] h-[32px] rounded-full bg-[#F883791A] flex items-center justify-center mb-1'>
                  <Check className="h-4 w-4 text-[#F88379]" />
                </div>
                Founding-only benefits

              </li>
            </ol>
            <div className="flex flex-wrap gap-4 w-full max-w-[743px] mt-12 justify-center lg:justify-start">
              <div className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px] !text-base"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
               
                   Submit Requirement
                  </Button>
                </div>
              </div>
                <div className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px] !text-base"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
                    Submit Listing Intent
                  </Button>
                </div>
              </div>
                 <div className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px] !text-base"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
                  User Registration
                  </Button>
                </div>
              </div>
                  <div className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px] !text-base"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
                  Professional Registration
                  </Button>
                </div>
              </div>
                    <div className="w-full sm:w-auto">
                <div
                  className="inline-block w-full sm:w-auto rounded-[8px] p-[4px] !text-base"
                  style={{
                    background:
                      "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                  }}
                >
                  <Button
                    className="w-full sm:w-auto justify-center rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B]"
                    style={{
                      background:
                        "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                    }}
                  >
                  Partner Registration
                  </Button>
                </div>
              </div>
            </div>


            {/* Store buttons */}
            <div className="flex mt-6 gap-4 sm:gap-7 justify-center lg:justify-start flex-wrap">
              <Image
                src="/hero1.png"
                alt="Store 1"
                width={1000}
                height={1000}
                className="w-[140px] h-[40px] hover:cursor-pointer"
              />
              <Image
                src="/hero2.png"
                alt="Store 2"
                width={1000}
                height={1000}
                className="w-[140px] h-[40px] hover:cursor-pointer"
              />
            </div>
          </div>

          {/* Right - Image */}
          {/* ✅ Mobile/Tablet  LG unchanged */}
          <div className="relative flex h-[320px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[940px] items-center justify-center">
            <Image
              src="/new2x.png"
              alt="Hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover  drop-shadow-[0_0_85px_#B9FFE8] "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
