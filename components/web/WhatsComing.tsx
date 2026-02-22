import { Building2, Lock, Shield, Target } from "lucide-react";
import { Button } from "../ui/button";

export default function WhatsComing() {
  return (
    <section className="w-full pt-20 px-4">
      <div className="container mx-auto text-center">
        <div
              className="inline-block rounded-full p-[4px] mb-[48px] !text-base"
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
               What&apos;s Coming
              </Button>
            </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-[64px] font-medium text-[#4B4B4B] mb-14">
          More than a <span className="text-[#F88379]">portal</span>. Here&apos;s <span className="text-[#F88379]">why.</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1 */}
          <div className="rounded-xl bg-emerald-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-white rounded-full border  text-rose-400">
               <Shield />
            </div>
            <h3 className="font-medium text-[24px] text-[#4B4B4B] mb-1">
              Verified agent marketplace
            </h3>
            <p className="text-[14px] font-normal text-[#4B4B4B]">
              Visibility won’t be equal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-rose-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 bg-white items-center justify-center rounded-full border  text-rose-400">
                  <Lock />
            </div>
            <h3 className="font-medium text-[24px] text-[#4B4B4B] mb-1">
              Private & off-market opportunities
            </h3>
            <p className="text-[14px] font-normal text-[#4B4B4B]">
              Some inventory will never be public.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-rose-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-white text-rose-400">
               <Target />
            </div>
            <h3 className="font-medium text-[24px] text-[#4B4B4B] mb-1">
              Demand-first discovery
            </h3>
            <p className="text-[14px] font-normal text-[#4B4B4B]">
              Less noise. More intent.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl bg-emerald-50 p-10 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-white text-[#7FFFD4]">
                <Building2 />
            </div>
            <h3 className="font-medium text-[24px] text-[#4B4B4B] mb-1">
              Brokerage-level control
            </h3>
            <p className="text-[14px] font-normal text-[#4B4B4B]">
              Built for teams, not just individuals.
            </p>
          </div>
        </div>

        {/* CTA */}
   <div
              className="inline-block rounded-[8px] p-[4px] mb-[48px] !text-base"
              style={{
                background: 'linear-gradient(180deg, #79FFD2 0%, #017850 100%)',
              }}
            >
              <Button
                className="rounded-[8px] px-6 md:px-8 h-[48px] text-sm md:text-base text-[#4B4B4B] 5555bg-transparent"
                style={{
                  background:
                    'linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)',
                }}
              >
               Register Early
              </Button>
            </div>
      </div>
    </section>
  );
}
