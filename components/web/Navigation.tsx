
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname()

  const navItems = useMemo(
    () => [
      { label: 'Requirements', id: 'requirements', href: '/requirement', homeId: 'requirements' },
      { label: 'Listing Intent', id: 'buying-intent', href: '/listing-intent', homeId: 'buying-intent' },
      { label: 'Agent', id: 'agent', href: '/#agent', homeId: 'agent' },
      { label: 'Brokerages', id: 'brokerages', href: '/#brokerages', homeId: 'brokerages' },
      { label: 'Investor', id: 'investor', href: '/#investor', homeId: 'investor' },
    ],
    []
  )

  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState(() => navItems[0]?.id ?? '')
  const [registrationOpen, setRegistrationOpen] = useState(false)

  // mount detect
  useEffect(() => {
    setMounted(true)
  }, [])

  // active section tracking (only after mounted)
  useEffect(() => {
    if (!mounted) return

    const setActiveByPath = () => {
      if (pathname === '/') {
        setActiveSection('')
        return false
      }
      if (pathname === '/requirement') {
        setActiveSection('requirements')
        return true
      }
      if (pathname === '/listing-intent') {
        setActiveSection('buying-intent')
        return true
      }
      if (pathname !== '/') {
        setActiveSection('')
        return true
      }
      return false
    }

    const getActiveFromScroll = () => {
      const offset = 120 // sticky nav offset
      const scrollPos = window.scrollY + offset

      let current = ''

      for (const item of navItems) {
        if (item.id === 'requirements') continue
        if (!item.homeId) continue
        const el = document.getElementById(item.homeId)
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

    if (setActiveByPath()) {
      return
    }

    getActiveFromScroll()
    window.addEventListener('scroll', getActiveFromScroll, { passive: true })
    window.addEventListener('resize', getActiveFromScroll)
    window.addEventListener('hashchange', getActiveFromScroll)

    return () => {
      window.removeEventListener('scroll', getActiveFromScroll)
      window.removeEventListener('resize', getActiveFromScroll)
      window.removeEventListener('hashchange', getActiveFromScroll)
    }
  }, [mounted, navItems, pathname])

  const resolvedTheme = theme === 'system' ? systemTheme : theme

  // ✅ IMPORTANT: return null AFTER all hooks
  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#C9FFED66] shadow-md backdrop-blur dark:bg-[#0F1412]/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex py-[20px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(event) => {
              if (pathname === '/') {
                event.preventDefault()
                setActiveSection('')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
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
          </Link>

          {/* Menu Items (LG unchanged) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#F88379]'
                    : 'text-[#4B4B4B] dark:text-white/80 hover:text-[#F88379]'
                }`}
              >
                {item.label}
              </Link>
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
                        <Link
                          href={item.href}
                          aria-current={activeSection === item.id ? 'page' : undefined}
                          className={`rounded-[10px] px-4 py-3 text-base font-medium transition-colors ${
                            activeSection === item.id
                              ? 'text-[#F88379] bg-black/5 dark:bg-white/10'
                              : 'text-[#4B4B4B] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                          }`}
                        >
                          {item.label}
                        </Link>
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
