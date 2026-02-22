'use client'

import { Check } from 'lucide-react'
import { Button } from '../ui/button'

type PricingPlan = {
  name: string
  earlyRate: string
  standardRate: string
  monthlyCredits: string
  includes: string[]
  priceNote: string
  isPopular?: boolean
}

const agentPlans: PricingPlan[] = [
  {
    name: 'Agent Lite',
    earlyRate: 'Free',
    standardRate: 'AED 299/mo',
    monthlyCredits: '0',
    includes: [
      'Basic agent profile',
      'Low search visibility',
      'Unlimited standard listings',
      'SmartLink & QR referrals',
      'Requirement leads access',
      'Listing intent leads access',
    ],
    priceNote: 'Free Limited Access',
  },
  {
    name: 'Agent Basic',
    earlyRate: 'AED 149/mo',
    standardRate: 'AED 699/mo',
    monthlyCredits: '20',
    includes: [
      'Enhanced agent profile',
      'Medium search visibility',
      'Unlimited standard listings',
      'Priority in target areas',
      'Proposal tools',
      'Verified agent status',
      'Access to buyer & tenant requirements',
    ],
    priceNote: 'No Payment Upfront',
  },
  {
    name: 'Agent Plus',
    earlyRate: 'AED 299/mo',
    standardRate: 'AED 699/mo',
    monthlyCredits: '50',
    includes: [
      'Verified Agent badge (approval required)',
      'High search visibility',
      'Priority profile placement',
      'Unlimited standard listings',
      'Smart Link & QR referrals',
      'A2A access',
      'Property Manager',
    ],
    priceNote: 'No Payment Upfront',
    isPopular: true,
  },
  {
    name: 'Agent Elite',
    earlyRate: 'AED 499/mo',
    standardRate: 'AED 999/mo',
    monthlyCredits: '100',
    includes: [
      'Elite profile marker',
      'Top search visibility',
      'Priority ranking in selected areas',
      'Unlimited standard listings',
      'Proposal tools',
      'A2A access',
      'Property Manager',
    ],
    priceNote: 'No Payment Upfront',
  },
]

const brokeragePlans: PricingPlan[] = [
  {
    name: 'Brokerage Lite',
    earlyRate: 'Free',
    standardRate: 'AED 0/mo',
    monthlyCredits: '0',
    includes: [
      'Brokerage profile',
      'Office branding on agent profiles',
      'Link agents to brokerage',
      'View list of linked agents',
    ],
    priceNote: 'Free Limited Access',
  },
  {
    name: 'Brokerage Core',
    earlyRate: 'AED 599/mo',
    standardRate: 'AED 999/mo',
    monthlyCredits: '70',
    includes: [
      'Brokerage profile & branding',
      'Agent management',
      'Inventory management',
      'Shared credit pool',
      'Assign credits to agents',
      'View credit usage',
      'Property Manager',
    ],
    priceNote: 'No Payment Upfront',
  },
  {
    name: 'Brokerage Pro',
    earlyRate: 'AED 1,499/mo',
    standardRate: 'AED 2,499/mo',
    monthlyCredits: '210',
    includes: [
      'Brokerage profile & branding',
      'Agent management',
      'Inventory management',
      'Shared credit pool',
      'Assign credits to agents',
      'Team activity overview',
      'Property Manager',
    ],
    priceNote: 'No Payment Upfront',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    earlyRate: 'AED 2,999/mo',
    standardRate: 'AED 4,999/mo',
    monthlyCredits: '420',
    includes: [
      'Brokerage profile & branding',
      'Multi-office & enterprise management',
      'Agent management at scale',
      'Large shared credit pool',
      'Office-level activity overview',
      'Property Manager',
      'Custom integrations',
    ],
    priceNote: 'No Payment Upfront',
  },
]

export function PricingSection() {
  return (
    <section className="relative overflow-hidden  py-14 sm:py-20 px-3 sm:px-6">
      <div className="absolute top-[560px] left-[10%] h-[260px] w-[260px] bg-[#74F9D3] opacity-60 blur-[90px] rounded-full" />

      <div className="relative container mx-auto">
        <div className="text-center">
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
              Pricing
            </Button>
          </div>

          <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] leading-tight font-medium text-[#4B4B4B] max-w-[924px] mx-auto dark:text-white">
            Plans built for <span className="text-[#F88379]">UAE property</span>{' '}
            professionals.
          </h2>
        </div>

        <div className="mt-10 space-y-6">
          <PricingGroup title="Agent Plans - Early Registration" plans={agentPlans} />
          <PricingGroup title="Brokerage Plans - Early Registration" plans={brokeragePlans} />
        </div>
      </div>
    </section>
  )
}

function PricingGroup({ title, plans }: { title: string; plans: PricingPlan[] }) {
  return (
    <div className="rounded-[16px] border border-[#D9D9DD] bg-white dark:bg-[#111316] dark:border-[#2A2D31] p-3 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
      <h3 className="text-[26px] sm:text-[36px] font-medium text-[#4B4B4B] dark:text-white mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  )
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const cardClass = plan.isPopular
    ? 'bg-[#D6F8EC] dark:bg-[#14382F] border-[#7FE0BF]'
    : 'bg-[#FFFFFF] dark:bg-[#16191D] border-[#E8E8EC] dark:border-[#2C3137]'

  return (
    <div className={`relative rounded-[14px] border p-4 sm:p-5 flex flex-col min-h-[620px] ${cardClass}`}>
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#6DE6BE] px-3 py-1 text-xs font-medium text-[#114336]">
          Most Popular
        </div>
      )}

      <h4 className="text-[20px] font-medium text-[#2E2E32] dark:text-white">
        {plan.name}
      </h4>

      <p className="mt-2 text-xs text-[#828289] dark:text-white/60">Early-registration rate:</p>
      <p className="text-[34px] leading-none font-semibold text-[#1E1E22] dark:text-white mt-1">
        {plan.earlyRate}
      </p>
      <p className="mt-1 text-sm text-[#6F6F75] dark:text-white/60">Standard Rate : {plan.standardRate}</p>

      <div className="mt-4 rounded-[10px] bg-[#FFEFEE] dark:bg-[#2D2324] px-3 py-2 text-sm text-[#5A5A60] dark:text-white/80 flex items-center justify-between">
        <span>Monthly Credits Included</span>
        <span className="font-semibold">{plan.monthlyCredits}</span>
      </div>

      <p className="mt-4 text-sm text-[#8A8A90] dark:text-white/60">Includes</p>
      <ul className="mt-2 space-y-2 flex-1">
        {plan.includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-[#56565D] dark:text-white/75">
            <Check className="h-4 w-4 text-[#49CFA2] mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <div
          className="w-full rounded-full py-2 text-center text-[20px] text-[#F88379] font-medium bg-[#F5F5F6] dark:bg-[#1F2328]"
          style={{
            background:
              plan.priceNote === 'No Payment Upfront' || plan.priceNote === 'Free Limited Access'
                ? 'linear-gradient(90deg, rgba(255, 246, 245, 0.93) 0%, rgba(251, 255, 237, 0.93) 50%, rgba(240, 255, 250, 0.93) 100%)'
                : undefined,
          }}
        >
          {plan.priceNote}
        </div>
        <p className="mt-3 text-xs text-[#8F8F95] dark:text-white/50">Annual options available</p>
        <Button
          variant="outline"
          className={`mt-2 h-[44px] w-full rounded-[8px] text-[20px] border-[#F5A59D] ${
            plan.isPopular
              ? 'bg-[#75E8C3] hover:bg-[#64ddb6] text-[#1F5A47] border-[#75E8C3]'
              : 'bg-transparent text-[#F88379] hover:bg-[#FFF5F4] dark:hover:bg-[#2A1F1E]'
          }`}
        >
          Register Early
        </Button>
      </div>
    </div>
  )
}
