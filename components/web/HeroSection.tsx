// 'use client'
// import { Button } from '@/components/ui/button'
// import {  CircleArrowOutUpRight } from 'lucide-react'
// import { CountdownTimer } from './CountdownTimer'
// import Image from 'next/image'

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center !rounded-full">
//           {/* Left Content */}
//           <div className="flex flex-col gap-6 sm:gap-8">
//             {/* Badge */}
//            <div>
//             <Image src="/herobutton.png" alt="Badge" width={1000} height={1000} className='w-[263px] h-[56px] ' />
//            </div>


//             {/* Heading */}
//             <div className="flex flex-col gap-4">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-[#4B4B4B]">
//                 A better way to navigate{' '}
//                 <span className="text-[#F88379]">property</span> in the UAE.
//               </h1>
//             </div>

//             {/* Description */}
//             <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-5xl">
//               Deal360 brings verification-first property matching to Dubai connect with Verified agents, find real listings, and make smarter property decisions—whether you&apos;re buying, selling, renting, or investing.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-4">
//               <Button className="bg-[#7FFFD4] rounded-[8px] hover:bg-accent-alt/90 text-[#4B4B4B] text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto">
//                 <span>Find a Property</span>
//                 <CircleArrowOutUpRight className="h-4 w-4" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 rounded-[8px] border-[#F88379] text-[#4B4B4B] hover:bg-accent/10 text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto bg-transparent"
//               >
//                 <span>List a Property</span>
//                 <CircleArrowOutUpRight className="h-4 w-4" />
//               </Button>
//             </div>

//             {/* Mobile Coming Soon Text */}
//             <div className="pt-4 sm:pt-8">
//               <p className="text-sm sm:text-[24px] font-midium text-[#4B4B4B] mb-4">
//                 Mobile Application Coming Soon
//               </p>

//               {/* Countdown */}
//               <CountdownTimer />
//             </div>
//             <div className='flex gap-7'>
//             <Image src="/hero1.png" alt="Badge" width={1000} height={1000} className='w-[140px] h-[40px] hover:cursor-pointer ' />
//             <Image src="/hero2.png" alt="Badge" width={1000} height={1000} className='w-[140px] h-[40px] hover:cursor-pointer ' />
//             </div>
//           </div>

//           {/* Right - Phone Mockups */}
//           <div className="relative hidden lg:flex h-full min-h-[740px] items-center justify-center">
//             <Image src="/banner.png" alt="Hero" width={1000} height={100} className='w-full h-full ' />
//           </div>
//         </div>
//       </div>

     
//     </section>
//   )
// }



'use client'

import { Button } from '@/components/ui/button'
import { CircleArrowOutUpRight } from 'lucide-react'
import { CountdownTimer } from './CountdownTimer'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/herobutton.png"
                alt="Badge"
                width={1000}
                height={1000}
                className="w-[263px] h-[56px]"
              />
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight text-[#4B4B4B]">
                A better way to navigate{' '}
                <span className="text-[#F88379]">property</span> in the UAE.
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-5xl mx-auto lg:mx-0">
              Deal360 brings verification-first property matching to Dubai connect with Verified
              agents, find real listings, and make smarter property decisions—whether you&apos;re
              buying, selling, renting, or investing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <Button className="bg-[#7FFFD4] rounded-[8px] hover:bg-accent-alt/90 text-[#4B4B4B] text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto">
                <span>Find a Property</span>
                <CircleArrowOutUpRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-2 rounded-[8px] border-[#F88379] text-[#4B4B4B] hover:bg-accent/10 text-base h-12 px-6 flex items-center gap-2 w-full sm:w-auto bg-transparent"
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

              <CountdownTimer />
            </div>

            {/* Store buttons */}
            <div className="flex gap-4 sm:gap-7 justify-center lg:justify-start flex-wrap">
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
          {/* ✅ Mobile/Tablet এ দেখাবে, LG unchanged */}
          <div className="relative flex h-[320px] sm:h-[420px] md:h-[520px] lg:h-full lg:min-h-[740px] items-center justify-center">
            <Image
              src="/banner.png"
              alt="Hero"
              width={1000}
              height={100}
              className="w-full h-full object-contain lg:object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
