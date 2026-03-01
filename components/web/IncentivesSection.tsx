'use client'

import Image from 'next/image'
import { Button } from '../ui/button'
import { Check} from 'lucide-react'

const earlyHowItWorks = [
  'Complete your full public profile',
  'Verify your BRN (Agent) or CRN (Brokerage)',
  'Upload at least one property',
  'Property must pass Verified Deal verification',
]

const earlyRewards = [
  '1 complimentary credit per Verified Deal approved listing',
  'Subject to a minimum cap per account',
  'Credits are issued once qualification requirements are met',
  'Credits are non-transferable and cannot be exchanged for cash',
]

const referralRequirements = [
  'Registration is completed',
  'Verification is approved',
  'A paid subscription is activated',
  'The account remains active beyond the minimum billing period',
]

const referralRewards = [
  'Refer 1 successful paid account — 50% off your next billing cycle',
  'Refer 2 successful paid accounts — 100% off your next billing cycle',
]

export function IncentivesSection() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-[1180px]">
        <div className="text-center mb-10 sm:mb-12">
          <div
            className="inline-block rounded-[999px] p-[3px] mb-5"
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
              Incentives
            </Button>
          </div>

          <h2 className="text-[34px] sm:text-[44px] lg:text-6xl font-medium leading-tight text-[#4B4B4B] dark:text-white">
            Rewards for early <span className="text-[#F88379]">adopters.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[760px] mx-auto">
            Build your profile. Upload verified inventory. Invite quality professionals. Be part of the verified foundation of Deal360.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#8A8A8A] dark:text-white/50 max-w-[860px] mx-auto">
            To support a strong, credible launch, Deal360 rewards agents and brokerages who help build high-quality, verified inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-[12px] border border-[#DBDBDB] dark:border-white/10  dark:bg-[#142720] p-5 sm:p-6 flex flex-col">
              <span className="h-[80px] pt-5 mb-10 w-[80px] r">
                <Image src="/icon15.png" alt="referral" width={1000} height={1000} className="h-[80px] w-[80px]" />
              </span>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
                Early Inventory Incentive
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              Agents and brokerages who complete their setup and upload verified listings will receive complimentary Deal360 credits.
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              How It Works?
            </p>
            <ul className="mt-2 space-y-4">
              {earlyHowItWorks.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#F88379] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className='flex items-center gap-2'>
             <div >
              <Image src="/icon11.png" alt="referral" width={1000} height={1000} className="mt-4 h-6 w-6" />
             </div>
            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              Rewards
            </p>
              </div>
            <ul className="mt-2 space-y-4">
              {earlyRewards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#45D3A7] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-3 text-xs sm:text-sm text-[#4B4B4B] dark:text-white/55 pb-[40px]">
              This ensures our launch inventory is verified and ready for real demand from day one.
            </p>

            <div className='pt-[130px]'>
                <div
              className="mt-6 rounded-full p-[4px] "
              style={{
                background:
                  'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <div
                className="rounded-full py-2 px-5 text-base sm:text-lg text-[#4B4B4B] flex items-center justify-center gap-3 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(90deg, #FFEFEE 0%, #FFFFFF 50%, #EBFFF8 100%)',
                }}
              >
                <Image src="/icon2x.png" alt="referral" width={1000} height={1000} className="h-10 w-10" />
               1 credit free for verified listings 
              </div>
            </div>
            </div>
          </div>

          <div className="rounded-[12px] border border-[#DBDBDB] dark:border-white/10  dark:bg-[#2A1F1E] p-5 sm:p-6 flex flex-col">
              <span className="h-[80px] pt-5 mb-10 w-[80px] r">
                <Image src="/icon16.png" alt="referral" width={1000} height={1000} className="h-[80px] w-[80px]" />
              </span>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl sm:text-[32px] font-medium text-[#4B4B4B] dark:text-white">
                Referral Program
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#686868] dark:text-white/70">
              Help us grow a high-quality, verified network and get rewarded. If you refer another agent or brokerage and they activate a paid plan, you will receive a discount on your next billing cycle.
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              How It Works — a referral is successful when:
            </p>
            <p className='mt-3 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white'>A referral is successful when:</p>
            <ul className="mt-2 space-y-2">
              {referralRequirements.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#45D3A7] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className='text-xs text-[#4B5563] mt-4'>
              Free, inactive, duplicate, refunded, or unverified accounts do not qualify.

            </p>
              <div className='flex items-center gap-2'>
             <div >
              <Image src="/icon12.png" alt="referral" width={1000} height={1000} className="mt-4 h-6 w-6" />
             </div>
            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              Rewards
            </p>
              </div>
            <ul className="mt-2 space-y-2">
              {referralRewards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80">
                  <Check className="h-4 w-4 mt-1 text-[#F88379] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#4B4B4B] dark:text-white">
              Terms & Conditions — Referral Rewards
            </p>
            <div className='bg-[#FAFAFA] p-2 rounded-[7px]'>
            
            <p className="mt-1 text-xs  leading-[150%] text-[#939393] dark:text-white/55">
             Referral rewards apply to the referrer&apos;s active paid plan only. A maximum of one 100% discounted billing cycle may be applied per cycle, and discounts cannot be stacked beyond one full month. Self-referrals or referrals between related accounts are not permitted. Rewards are non-transferable, not redeemable for cash, and may be withheld in cases of misuse or abuse of the referral program. These early adopter rewards are available for a limited period as part of our launch phase.

            </p>
              
            </div>

            <div
              className="mt-6 rounded-full p-[4px]"
              style={{
                background:
                  'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <div
                className="rounded-full py-2 px-5 text-base sm:text-lg text-[#4B4B4B] flex items-center justify-center gap-3 cursor-pointer"
                style={{
                  background:
                    'linear-gradient(90deg, #FFEFEE 0%, #FFFFFF 50%, #EBFFF8 100%)',
                }}
              >
                <Image src="/icon14.png" alt="referral" width={1000} height={1000} className="h-10 w-10" />
                1 month free referral program
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
