


'use client'

import Image from 'next/image'
import { Button } from '../ui/button'

export function PortalSection() {
  return (
    <section className="flex items-center px-2 sm:px-8 py-[100px]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-center">
        
        {/* Left Content */}
        <div className="order-1 lg:order-1">
                  {/* Badge */}
         <div
              className="inline-block rounded-full p-[4px] mb-6"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                className="rounded-full px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B] 5555bg-transparent"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
                <span className='w-2 h-2 rounded-full bg-[#00C274]'></span>
                Not just a portal
              </Button>
            </div>
          <h1 className="text-[34px] sm:text-[44px] lg:text-[64px] !leading-tight font-medium text-[#4B4B4B] dark:text-white">
            Clearer intent. <span className="text-[#F88379]">Better</span>
            <br />
            <span className="text-[#FF6B5B]">property</span> decisions.
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[740px]">
           Deal360 isn&lsquo;t another property portal. It&lsquo;`s a verification-first platform that connects you with verified agents, real listings, and genuine intent—so you can make smarter property decisions in the UAE.
          </p>
        </div>

        {/* Right Image */}
        <div className="order-2 lg:order-2 h-[260px] sm:h-[360px] lg:h-[516px] flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="/red2x.png"
            alt="Portal Preview"
            width={1000}
            height={1000}
            className="w-full h-full object-contain lg:object-cover rounded-[16px]"
            priority
          />
        </div>

      </div>
    </section>
  )
}
