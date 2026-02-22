import { Check, CheckCircle, Clock, Shield } from 'lucide-react'
import { Button } from '../ui/button'

const registrationTypes = [
  'Submit Requirement',
  'Submit Listing Intent',
  'Professional Registration',
  'User Registration',
  'Partner Registration',
]

const topHighlights = [
  {
    icon: Clock,
    title: 'No payment upfront',
    description:
      'No payment is taken upfront during registration. Billing begins only once the platform is live and the account is activated on a paid plan.',
    bg: 'bg-[#E6FFF7] dark:bg-[#18342A]',
  },
  {
    icon: Shield,
    title: 'Limited & verified',
    description:
      'Early registration availability is limited and subject to verification. We are onboarding a select group of verified professionals first.',
    bg: 'bg-[#FFEFEE] dark:bg-[#2A1F1E]',
  },
  {
    icon: CheckCircle,
    title: 'Shape the platform',
    description:
      'Your feedback directly influences features and improvements. Early access to platform features as they are released.',
    bg: 'bg-[#E6FFF7] dark:bg-[#18342A]',
  },
]

const Joindeal = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1180px]">
        <div className="text-center">
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
              Early Access Program
            </Button>
          </div>

          <h2 className="text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            Join <span className="text-[#F88379]">Deal360</span> early.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#686868] dark:text-white/70 max-w-[820px] mx-auto">
            Agents and brokerages secure early-registration rates. Buyers, owners, and investors get priority onboarding at launch.
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#8A8A8A] dark:text-white/50 max-w-[980px] mx-auto">
            Deal360 is not a lead portal. It is a transparent property platform built around verified listings, real intent, and better decision-making.
          </p>

          <div className="my-5 h-px bg-[#E6E6E6] dark:bg-white/10" />

          <div className="flex flex-wrap gap-3 max-w-[620px] mx-auto justify-center">
            {registrationTypes.map((type) => (
              <div
                key={type}
                className="inline-block rounded-[10px] p-[2px]"
                style={{
                  background:
                    'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
                }}
              >
                <Button
                  className="h-[38px] rounded-[8px] px-4 text-xs sm:text-sm text-[#4B4B4B]"
                  style={{
                    background:
                      'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                  }}
                >
                  {type}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {topHighlights.map((item) => (
            <div key={item.title} className={`rounded-[12px] p-5 text-center ${item.bg}`}>
              <span className="mx-auto mb-3 h-11 w-11 rounded-full bg-white dark:bg-black/20 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-[#4B4B4B] dark:text-white" />
              </span>
              <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-[12px] bg-[#FFEFEE] dark:bg-[#2A1F1E] p-5 sm:p-6">
            <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
              What Early Access Means
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              Early registration allows agents and brokerages to join Deal360 ahead of public release and secure preferential rates, valid for 12 months from activation.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Priority onboarding before public launch',
                'Early setup of profiles, teams, and inventory before full platform rollout.',
                'Priority access to new features ahead of wider release.',
                'Preferential pricing secured ahead of full platform release.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80"
                >
                  <Check className="h-4 w-4 mt-1 text-[#4B4B4B] dark:text-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[12px] bg-[#EEFFF9] dark:bg-[#18342A] p-5 sm:p-6">
            <h3 className="text-2xl font-medium text-[#4B4B4B] dark:text-white">
              Why It Matters
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#686868] dark:text-white/70">
              Not everyone will get the same access. Establishing your presence early means better positioning when the platform goes public.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Help shape a platform built for UAE property',
                'Establish your presence before competitors',
                'Lock in founder-level pricing',
                'Build relationships with verified professionals',
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm sm:text-base text-[#4B4B4B] dark:text-white/80"
                >
                  <Check className="h-4 w-4 mt-1 text-[#4B4B4B] dark:text-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Joindeal
