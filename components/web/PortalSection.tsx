


'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function PortalSection() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  const imageSrc =
    currentTheme === 'dark'
      ? '/new.png'   
      : '/potal.png'  

  return (
    <section className="flex items-center px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
                  {/* Badge */}
        <div className="mb-[48px]">
            <Image src="/potalbutton.png" alt="Badge" width={1000} height={1000} className='w-[263px] h-[61px] object-cover' />
        </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-[#4B4B4B] dark:text-white">
            Clearer intent. <span className="text-[#F88379]">Better</span>
            <br />
            <span className="text-[#FF6B5B]">property</span> decisions.
          </h1>

          <p className="mt-4 text-[#686868] dark:text-white/70 max-w-[740px]">
           Deal360 isn&lsquo;t another property portal. It&lsquo;`s a verification-first platform that connects you with verified agents, real listings, and genuine intent—so you can make smarter property decisions in the UAE.
          </p>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 h-auto flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="Portal Preview"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            priority
          />
        </div>

      </div>
    </section>
  )
}
