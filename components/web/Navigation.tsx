'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#C9FFED66] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={1000} height={100} className='w-[148px] h-[48px]' />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-base font-medium text-[#4B4B4B] hover:text-accent transition-colors">
              Requirements
            </a>
            <a href="#" className="text-base font-medium text-[#4B4B4B] hover:text-accent transition-colors">
              Buying Intent
            </a>
            <a href="#" className="text-base font-medium text-[#4B4B4B] hover:text-accent transition-colors">
              Agent
            </a>
            <a href="#" className="text-base font-medium text-[#4B4B4B] hover:text-accent transition-colors">
              Brokerages
            </a>
            <a href="#" className="text-base font-medium text-[#4B4B4B] hover:text-accent transition-colors">
              Investor
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-muted rounded-lg p-1">
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  theme === 'light'
                    ? 'bg-[#B7FFE7] text-white'
                    : 'text-foreground hover:text-accent'
                }`}
                aria-label="Light mode"
              >
                <Sun className="h-4 w-4" />
                Light
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  theme === 'dark'
                    ? 'bg-[#B7FFE7] text-background'
                    : 'text-foreground hover:text-accent'
                }`}
                aria-label="Dark mode"
              >
                <Moon className="h-4 w-4" />
                Dark
              </button>
            </div>

            {/* Buttons */}
            <div className="hidden sm:flex gap-2">
              <Button variant="ghost" className="text-accent hover:text-accent">
                Login
              </Button>
              <Button className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B]">
                Registration
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
