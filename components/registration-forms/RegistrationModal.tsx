'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { ProfessionalForm } from './ProfessionalForm'
import { UserForm } from './UserForm'
import { CompanyForm } from './CompanyForm'
import Image from 'next/image'

interface RegistrationModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function RegistrationModal({
  open,
  onOpenChange,
}: RegistrationModalProps) {
  const [activeTab, setActiveTab] = useState('professional')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:w-[92vw] lg:max-w-[1000px] max-h-[96vh] overflow-y-auto no-scrollbar bg-white !rounded-[12px] p-3 sm:p-4 lg:p-6">
        {/* HEADER */}
        <DialogHeader className="pb-4 b">
          <div className="flex items-center gap-2">
            <div >
              <Image src="/minilogo.png" alt="Rocket Icon" width={1000} height={1000} className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            </div>
            <div className='flex items-center gap-2 sm:gap-3'>
              <DialogTitle className="text-base sm:text-lg lg:text-xl text-[#F88379] font-semibold">
                Deal 360
              </DialogTitle>
              <p className="text-base sm:text-lg lg:text-xl text-[#FF6B6B] font-medium">
                Early Registration
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* TABS */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 gap-1 sm:gap-2 bg-[#0000000D] p-1 sm:p-2 h-[48px] sm:h-[56px] rounded-[8px] mb-4 sm:mb-6">
            {/* PROFESSIONAL */}
            <TabsTrigger
              value="professional"
              className="
                h-full
                rounded-[8px]
                text-xs sm:text-sm
                font-medium
                transition-all
                bg-gray-200
                text-gray-700
                data-[state=active]:bg-[#7FFFD4]
                data-[state=active]:text-[#0A0A0A]
                data-[state=active]:text-sm sm:data-[state=active]:text-base
              "
            >
              Professional
            </TabsTrigger>

            {/* USER */}
            <TabsTrigger
              value="user"
              className="
                h-full
                rounded-[8px]
                text-xs sm:text-sm
                font-medium
                transition-all
                bg-gray-200
                text-gray-700
                data-[state=active]:bg-[#7FFFD4]
                data-[state=active]:text-[#0A0A0A]
                data-[state=active]:text-sm sm:data-[state=active]:text-base
              "
            >
              User
            </TabsTrigger>

            {/* COMPANY */}
            <TabsTrigger
              value="company"
              className="
                h-full
                rounded-[8px]
                text-xs sm:text-sm
                font-medium
                transition-all
                bg-gray-200
                text-gray-700
                data-[state=active]:bg-[#7FFFD4]
                data-[state=active]:text-[#0A0A0A]
                data-[state=active]:text-sm sm:data-[state=active]:text-base
              "
            >
              Company
            </TabsTrigger>
          </TabsList>

          <TabsContent value="professional">
            <ProfessionalForm />
          </TabsContent>

          <TabsContent value="user">
            <UserForm />
          </TabsContent>

          <TabsContent value="company">
            <CompanyForm />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
