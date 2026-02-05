


// 'use client'

// import { useEffect, useState } from 'react'
// import { useTheme } from 'next-themes'
// import Image from 'next/image'
// import { Button } from '@/components/ui/button'
// import { Moon, Sun } from 'lucide-react'

// export function Navigation() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme } = useTheme()

//   useEffect(() => setMounted(true), [])
//   if (!mounted) return null

//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-border bg-[#C9FFED66] dark:bg-[#0b0f14]/60 backdrop-blur">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               width={1000}
//               height={100}
//               className="w-[148px] h-[48px]"
//             />
//           </div>

//           {/* Menu Items */}
//           <div className="hidden md:flex items-center gap-8">
//             {['Requirements', 'Buying Intent', 'Agent', 'Brokerages', 'Investor'].map(
//               (item) => (
//                 <a
//                   key={item}
//                   href="#"
//                   className="text-base font-medium text-[#4B4B4B] dark:text-white/80 hover:text-[#F88379] transition-colors"
//                 >
//                   {item}
//                 </a>
//               )
//             )}
//           </div>

//           {/* Right Actions */}
//           <div className="flex items-center gap-3 sm:gap-4">
//             {/* Theme Toggle */}
//             <div
//               className="hidden sm:flex items-center gap-1 rounded-[8px] p-2"
//               style={{
//                 background: "linear-gradient(90deg, #E8E8E8 0%, #E5E5E5 100%)",
//               }}
//             >
//               <button
//                 type="button"
//                 onClick={() => setTheme("light")}
//                 className={`flex items-center gap-2 px-3 py-2 rounded-[8px] text-sm font-medium transition-all ${theme === "light"
//                     ? "bg-[#BAFFE8] text-[#4B4B4B]"
//                     : "text-[#4B4B4B] hover:text-[#F88379]"
//                   }`}
//                 aria-label="Light mode"
//               >
//                 <Sun className="h-4 w-4" />
//                 Light
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setTheme("dark")}
//                 className={`flex items-center gap-2 px-3 py-1.5 rounded-[12px] text-sm font-medium transition-all ${theme === "dark"
//                     ? "bg-[#BAFFE8] text-[#4B4B4B]"
//                     : "text-[#4B4B4B] hover:text-[#F88379]"
//                   }`}
//                 aria-label="Dark mode"
//               >
//                 <Moon className="h-4 w-4" />
//                 Dark
//               </button>
//             </div>


//             {/* Buttons */}
//             <div className="hidden sm:flex gap-2">
//               <Button
//                 variant="ghost"
//                 className="text-[#F88379] border border-[#F88379] h-[50px] px-[32px] rounded-[8px] hover:text-[#F88379]"
//               >
//                 Login
//               </Button>
//               <Button className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B] h-[50px] rounded-[8px]">
//                 Registration
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }




'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const resolvedTheme = theme === 'system' ? systemTheme : theme

  const navItems = ['Requirements', 'Buying Intent', 'Agent', 'Brokerages', 'Investor']

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex py-[25px] items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={100}
              className="w-[148px] h-[48px]"
              priority
            />
          </div>

          {/* Menu Items (LG unchanged) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-medium text-[#4B4B4B] dark:text-white/80 hover:text-[#F88379] transition-colors"
              >
                {item}
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
                variant="ghost"
                className="text-[#F88379] border border-[#F88379] h-[50px] px-[32px] rounded-[8px] hover:text-[#F88379]"
              >
                Login
              </Button>
              <Button className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B] h-[50px] rounded-[8px]">
                Registration
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

                <SheetContent side="right" className="w-[320px] sm:w-[360px] bg-white dark:bg-[#1E1E1E]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt="Logo"
                        width={600}
                        height={80}
                        className="w-[130px] h-auto"
                      />
                    </SheetTitle>
                  </SheetHeader>

                  {/* Menu Items */}
                  <div className="mt-8 flex flex-col gap-3">
                    {navItems.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="rounded-[10px] px-4 py-3 text-base font-medium text-[#4B4B4B] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                      >
                        {item}
                      </a>
                    ))}
                  </div>

                  {/* Theme Toggle (Mobile) */}
                  <div
                    className="mt-6 flex items-center gap-1 rounded-[10px] p-2"
                    style={{
                      background: 'linear-gradient(90deg, #E8E8E8 0%, #E5E5E5 100%)',
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
                      variant="ghost"
                      className="text-[#F88379] border border-[#F88379] h-[50px] rounded-[8px] hover:text-[#F88379]"
                    >
                      Login
                    </Button>
                    <Button className="bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#4B4B4B] h-[50px] rounded-[8px]">
                      Registration
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
