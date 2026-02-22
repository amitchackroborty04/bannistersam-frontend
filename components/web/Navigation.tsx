
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, LogOut } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { RegistrationModal } from '../registration-forms/RegistrationModal'

export function Navigation() {
  const { theme, setTheme, systemTheme } = useTheme()

  const navItems = useMemo(
    () => [
      { label: 'Requirements', id: 'requirements' },
      { label: 'Buying Intent', id: 'buying-intent' },
      { label: 'Agent', id: 'agent' },
      { label: 'Brokerages', id: 'brokerages' },
      { label: 'Investor', id: 'investor' },
    ],
    []
  )

  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState(() => navItems[0].id)
   const [registrationOpen, setRegistrationOpen] = useState(false)

  // mount detect
  useEffect(() => {
    setMounted(true)
  }, [])

  // active section tracking (only after mounted)
  useEffect(() => {
    if (!mounted) return

    const getActive = () => {
      const offset = 120 // sticky nav offset
      const scrollPos = window.scrollY + offset

      let current = navItems[0].id

      for (const item of navItems) {
        const el = document.getElementById(item.id)
        if (!el) continue

        const top = el.offsetTop
        const height = el.offsetHeight

        if (scrollPos >= top && scrollPos < top + height) {
          current = item.id
          break
        }
      }

      setActiveSection(current)
    }

    getActive()
    window.addEventListener('scroll', getActive, { passive: true })
    window.addEventListener('resize', getActive)

    return () => {
      window.removeEventListener('scroll', getActive)
      window.removeEventListener('resize', getActive)
    }
  }, [mounted, navItems])

  const resolvedTheme = theme === 'system' ? systemTheme : theme

  const handleNavClick = (id: string) => {
    setActiveSection(id)
  }

  // ✅ IMPORTANT: return null AFTER all hooks
  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#C9FFED66] shadow-md backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex py-[20px] items-center justify-between">
          {/* Logo */}
          <a
            href="#requirements"
            onClick={() => handleNavClick('requirements')}
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={100}
              className="w-[148px] h-[48px]"
              priority
            />
          </a>

          {/* Menu Items (LG unchanged) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#F88379]'
                    : 'text-[#4B4B4B] dark:text-white/80 hover:text-[#F88379]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle (Desktop only, LG unchanged) */}
            <div
              className="hidden sm:flex items-center gap-1 rounded-[8px] p-2"
              style={{
                background: 'linear-gradient(90deg, #E8E8E8 0%, #E5E5E5 100%)',
              }}
            >
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex items-center gap-2 px-3 py-2 rounded-[8px] text-sm font-medium transition-all ${
                  resolvedTheme === 'light'
                    ? 'bg-[#BAFFE8] text-[#4B4B4B]'
                    : 'text-[#4B4B4B] hover:text-[#F88379]'
                }`}
                aria-label="Light mode"
              >
                <Sun className="h-4 w-4" />
                Light
              </button>

              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-[12px] text-sm font-medium transition-all ${
                  resolvedTheme === 'dark'
                    ? 'bg-[#BAFFE8] text-[#4B4B4B]'
                    : 'text-[#4B4B4B] hover:text-[#F88379]'
                }`}
                aria-label="Dark mode"
              >
                <Moon className="h-4 w-4" />
                Dark
              </button>
            </div>

            {/* Buttons (Desktop only, LG unchanged) */}
            <div className="hidden sm:flex gap-2">
           
              <Button
                onClick={() => setRegistrationOpen(true)}
                className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B] h-[50px] rounded-[8px]"
              >
              <span><LogOut className="h-4 w-4" /></span>
                Pre - Registration
              </Button>
            </div>

            {/* Mobile Sheet Trigger */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5 text-[#4B4B4B] dark:text-white" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[320px] sm:w-[360px] bg-white dark:bg-[#1E1E1E]"
                >
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={400}
                        height={80}
                        className="w-[80px] h-auto"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  {/* Menu Items */}
                  <div className="mt-8 flex flex-col gap-3">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={() => handleNavClick(item.id)}
                          className={`rounded-[10px] px-4 py-3 text-base font-medium transition-colors ${
                            activeSection === item.id
                              ? 'text-[#F88379] bg-black/5 dark:bg-white/10'
                              : 'text-[#4B4B4B] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                          }`}
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </div>

                  {/* Theme Toggle (Mobile) */}
                  <div
                    className="mt-6 flex items-center gap-1 rounded-[10px] p-2"
                    style={{
                      background:
                        'linear-gradient(90deg, #E8E8E8 0%, #E5E5E5 100%)',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setTheme('light')}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[10px] text-sm font-medium transition-all ${
                        resolvedTheme === 'light'
                          ? 'bg-[#BAFFE8] text-[#4B4B4B]'
                          : 'text-[#4B4B4B] hover:text-[#F88379]'
                      }`}
                    >
                      <Sun className="h-4 w-4" />
                      Light
                    </button>

                    <button
                      type="button"
                      onClick={() => setTheme('dark')}
                      className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-[10px] text-sm font-medium transition-all ${
                        resolvedTheme === 'dark'
                          ? 'bg-[#BAFFE8] text-[#4B4B4B]'
                          : 'text-[#4B4B4B] hover:text-[#F88379]'
                      }`}
                    >
                      <Moon className="h-4 w-4" />
                      Dark
                    </button>
                  </div>

                  {/* Mobile Buttons */}
                  <div className="mt-6 grid grid-cols-1 gap-3">
                 
                    <Button
                      onClick={() => setRegistrationOpen(true)}
                      className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B] h-[50px] rounded-[8px]"
                    >
                      Pre - Registration
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
        {/* Registration Modal */}
      <RegistrationModal
        open={registrationOpen}
        onOpenChange={setRegistrationOpen}
      />
    </nav>
  )
}
