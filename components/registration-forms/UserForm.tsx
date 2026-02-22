'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export function UserForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    iAm: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, iAm: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('User Form Submitted:', formData)
    // Handle submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-[24px] font-medium text-[#F88379] mb-3">
          User Registration
        </h3>
        <p className="text-sm sm:text-base lg:text-xl text-[#686868] mb-4">
          For buyers, tenants, and investors who want early visibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">Find a Property</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Buy or rent with clarity</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">Submit Requirement</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Priority matching with agents</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">List a Property</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Submit listing intent</p>
          </div>
          <div className="rounded-[8px] bg-[#F7F7F7] p-4">
            <p className="text-sm sm:text-base lg:text-base font-medium text-[#343A40]">For Investors</p>
            <p className="mt-1 text-sm sm:text-base text-[#6C757D]">Manage your property portfolio</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fullName" className="text-base text-[#343A40] font-medium">
            Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]"
          />
        </div>
        <div>
          <Label htmlFor="iAm" className="text-base text-[#343A40] font-medium">
            I am a
          </Label>
          <Select value={formData.iAm} onValueChange={handleSelectChange}>
            <SelectTrigger className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className='bg-white rounded-[4px]'>
              <SelectItem value="buyer">Buyer</SelectItem>
              <SelectItem value="tenant">Tenant</SelectItem>
              <SelectItem value="owner">Owner</SelectItem>
              <SelectItem value="investor">Investor</SelectItem>
              <SelectItem value="agent">Agent</SelectItem>
              <SelectItem value="broker">Broker</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email" className="text-base text-[#343A40] font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hello@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-base text-[#343A40] font-medium">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+971 50 XXX XXXX"
            value={formData.phone}
            onChange={handleInputChange}
            className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]"
          />
        </div>
      </div>

      <p className="text-sm sm:text-base lg:text-base text-[#6C757D] bg-[#F7F7F7] rounded-[8px] p-4">
        User access is free for buyers, tenants, owners, and investors — with
        early registration and priority engagement at launch.
      </p>

      <Button
        type="submit"
        className="w-full bg-[#7FFFD4] hover:bg-[#7FFFD4]/90 text-[#0A0A0A]  h-[48px] rounded-[8px] text-xl"
      >
        Sign Up as a User
      </Button>
    </form>
  )
}
