import Image from 'next/image'
import { Button } from '../ui/button'

export default function SmarterFilters() {
  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[560px]">
            <Image
              src="/smarter2x.png"
              alt="Smarter filters preview"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain drop-shadow-[0_0_65px_#FFB1A9] dark:drop-shadow-none"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
          <div>
            <div
              className="inline-block rounded-[999px] p-[3px]"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
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
                Smarter Filters
              </Button>
            </div>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            Better filters. <span className="text-[#F88379]">Less friction.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
            Results are refined using intent, availability, and verification,
            reducing irrelevant listings and helping users reach decisions faster.
          </p>
        </div>
      </div>
    </section>
  )
}
