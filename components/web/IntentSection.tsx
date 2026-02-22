"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const intentPoints = [
  "Submit structured requirements",
  "Use precision filters to narrow aligned availability",
  "Save and refine your criteria",
];

export default function PropertyIntent() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="w-full">
          <div className="relative mx-auto lg:mx-0 w-full max-w-[560px] ">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/newphon2.png"
                alt="Intent feature preview"
                fill
                className="object-contain"
                priority
              />
          
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
          <div>
            <div
              className="inline-block rounded-[999px] p-[3px]"
              style={{
                background: "linear-gradient(180deg, #79FFD2 0%, #017850 100%)",
              }}
            >
              <Button
                className="h-[40px] rounded-[999px] px-5 text-sm text-[#F88379]"
                style={{
                  background:
                    "linear-gradient(90deg, #E8FFF7 0%, #FFF3F2 50%, #D5FFF1 100%)",
                }}
              >
                <span className="h-2 w-2 rounded-full bg-[#00C274]" />
                Intent First
              </Button>
            </div>
          </div>

          <h2 className="text-[38px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-medium text-[#4B4B4B] dark:text-white">
            Start with{" "}
            <span className="text-[#F88379]">Requirements.</span> Not Endless
            Searching.
          </h2>

          <div className="space-y-3">
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
              Buyers and tenants define exactly what they&apos;re looking for
              through structured requirements, supported by precision filters
              designed to reduce noise and surface aligned availability.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#686868] dark:text-white/70 max-w-[640px] mx-auto lg:mx-0">
              Deal360 connects real intent with real supply, not guesswork.
            </p>
          </div>

          <ul className="space-y-5 pt-1">
            {intentPoints.map((point) => (
              <li
                key={point}
                className="flex items-center justify-center lg:justify-start gap-3 text-[#4B4B4B] dark:text-white text-base sm:text-xl font-medium"
              >
                <span className="h-9 w-9 rounded-full bg-[#FFEAE6] dark:bg-[#2D2421] flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-[#F88379]" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
