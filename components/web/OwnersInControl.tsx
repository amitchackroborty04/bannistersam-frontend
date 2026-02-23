import { Button } from '../ui/button'
import Image from 'next/image'
import { Check } from 'lucide-react'

const controlPoints = [
  'Structured Listing Intent™',
  'Agent proposal comparison',
  'Controlled exposure',
  'Built for serious sellers and landlords',
]

export default function OwnersInControl() {
  return (
    <section className="w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-center lg:text-left">
          <div
            className="inline-block rounded-[999px] p-[3px] mb-6"
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
              Owners in Control
            </Button>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            Sell or Rent <span className="text-[#F88379]">with Control.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
            Owners declare Listing Intent before going live and connect with
            agents aligned to genuine demand, without broadcasting their
            property everywhere.
          </p>

          <ul className="mt-7 space-y-5 text-left">
            {controlPoints.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 justify-start text-[#4B4B4B] dark:text-white text-base sm:text-xl font-medium"
              >
                <span className="h-9 w-9 rounded-full bg-[#E6FFF7] dark:bg-[#17312A] flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-[#37D9A6]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[560px]">
            <Image
              src="/2xbanister.png"
              alt="Owners dashboard preview"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
