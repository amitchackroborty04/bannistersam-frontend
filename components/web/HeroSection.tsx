'use client'
import { Button } from '@/components/ui/button'
import {  CircleArrowOutUpRight } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'
import { PhoneMockup } from './PhoneMockup'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center !rounded-full">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Badge */}
            <span
              className=" w-[306px] text-xl font-medium text-[#F88379] px-6 py-3 rounded-full "
              style={{
                border: "4px solid ",
                borderImageSource: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
                borderRadius: "999px" ,
                borderImageSlice: 1,
                background:
                  "linear-gradient(90deg, rgba(248, 131, 121, 0.1) 0%, rgba(225, 255, 109, 0.1) 50%, rgba(127, 255, 212, 0.1) 100%)",

              }}
            >
              Launching in Dubai, UAE1
            </span>


            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-[#4B4B4B]">
                A better way to navigate{' '}
                <span className="text-[#F88379]">property</span> in the UAE.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-5xl">
              Deal360 brings verification-first property matching to Dubai connect with Verified agents, find real listings, and make smarter property decisions—whether you&apos;re buying, selling, renting, or investing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button className="bg-[#7FFFD4] hover:bg-accent-alt/90 text-[#4B4B4B] text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto">
                <span>Find a Property</span>
                <CircleArrowOutUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#F88379] text-[#4B4B4B] hover:bg-accent/10 text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto bg-transparent"
              >
                <span>List a Property</span>
                <CircleArrowOutUpRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Coming Soon Text */}
            <div className="pt-4 sm:pt-8">
              <p className="text-sm sm:text-[24px] font-midium text-[#4B4B4B] mb-4">
                Mobile Application Coming Soon
              </p>

              {/* Countdown */}
              <CountdownTimer />
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative hidden lg:flex h-full min-h-[740px] items-center justify-center">
            <Image src="/banner.png" alt="Hero" width={1000} height={100} className='w-full h-full ' />
          </div>
        </div>
      </div>

      {/* Mobile View - Show Phones Stacked */}
      <div className="lg:hidden px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex justify-around">
            <PhoneMockup className="w-32">
              <div className="w-full h-full bg-gradient-to-b from-secondary via-white to-secondary p-2 flex flex-col gap-2">
                <div className="text-[10px] font-semibold">Browse</div>
                <div className="flex-1 bg-accent rounded-lg"></div>
              </div>
            </PhoneMockup>
            <PhoneMockup className="w-32">
              <div className="w-full h-full bg-gradient-to-b from-white via-gray-50 to-white p-2 flex flex-col gap-2">
                <div className="text-[10px] font-semibold">Details</div>
                <div className="flex-1 bg-accent/20 rounded-lg"></div>
              </div>
            </PhoneMockup>
            <PhoneMockup className="w-32">
              <div className="w-full h-full bg-gradient-to-b from-white via-gray-50 to-accent/10 p-2 flex flex-col gap-2">
                <div className="text-[10px] font-semibold">Listing</div>
                <div className="flex-1 bg-accent rounded-lg"></div>
              </div>
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  )
}
