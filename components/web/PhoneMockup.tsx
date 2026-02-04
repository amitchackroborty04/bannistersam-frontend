import React from "react"
interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Phone Frame */}
      <div className="relative aspect-[9/19.5] w-full max-w-sm rounded-[2.5rem] border-8 border-slate-900 bg-black shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 h-7 w-40 rounded-b-3xl bg-black"></div>

        {/* Content Area */}
        <div className="h-full w-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Reflection */}
      <div className="absolute -bottom-2 left-0 right-0 h-20 bg-gradient-to-b from-transparent via-white/5 to-transparent rounded-full blur-xl"></div>
    </div>
  )
}
