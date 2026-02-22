'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'

export function ProfessionalForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    serviceCategory: '',
    companyName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    briefDescription: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceCategory: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Professional Form Submitted:', formData)
    // Handle submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#F88379] mb-4">
          Partner Registration - by Invitation
        </h3>
        <p className="text-sm sm:text-base text-[#6C757D] font-normal mb-4">
          We are onboarding a limited number of professionals ahead of launch.
          Selected partners may showcase that company profile and services
          within the Deals360 company through sponsored brand partnership
          opportunities.
        </p>
        <div className="space-y-2 mb-4 text-[#6C757D] bg-[#F8F9FA] p-4 rounded-lg">
          <p className='text-sm sm:text-base font-medium text-[#343A40] '>This includes services such as:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Real Estate Developers</li>
            <li>Short-term & holiday rentals</li>
            <li>Furniture & interior solutions</li>
            <li>Mortgage & financing providers</li>
            <li>Conveyancing & legal services</li>
            <li>Property management & maintenance</li>
            <li>Other</li>
          </ul>
        </div>
        <p className="text-sm sm:text-base text-[#6C757D]">
         Partners registering early will be considered for priority visibility, early integrations, and first rollout consideration as the platform expands.

        </p>
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
          <Label htmlFor="serviceCategory" className="text-base text-[#343A40] font-medium">
            Service Category
          </Label>
          <Select value={formData.serviceCategory} onValueChange={handleSelectChange}>
            <SelectTrigger className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className='bg-white rounded-[4px]'>
              <SelectItem value="developers">Real Estate Developers</SelectItem>
              <SelectItem value="rentals">Short-term & Holiday Rentals</SelectItem>
              <SelectItem value="furniture">Furniture & Interior Solutions</SelectItem>
              <SelectItem value="mortgage">Mortgage & Financing Providers</SelectItem>
              <SelectItem value="legal">Conveyancing & Legal Services</SelectItem>
              <SelectItem value="management">Property Management & Maintenance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyName" className="text-base text-[#343A40] font-medium">
            Company / Brokerage
          </Label>
          <Input
            id="companyName"
            name="companyName"
            placeholder="Company or brokerage name"
            value={formData.companyName}
            onChange={handleInputChange}
            className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]"
          />
        </div>
        <div>
          <Label htmlFor="websiteUrl" className="text-base text-[#343A40] font-medium">
            Company Website
          </Label>
          <Input
            id="websiteUrl"
            name="websiteUrl"
            placeholder="Website link or name"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            className="text-xs mt-2 border border-[#C0C3C1] h-[48px] rounded-[4px] placeholder:text-[#6C757D]"
          />
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

      <div>
        <Label htmlFor="briefDescription" className="text-base text-[#343A40] font-medium">
          Brief description of your service
        </Label>
        <Textarea
          id="briefDescription"
          name="briefDescription"
          placeholder="Tell us about your service....."
          value={formData.briefDescription}
          onChange={handleInputChange}
          className="text-xs mt-2 min-h-[114px] border border-[#C0C3C1] rounded-[4px] placeholder:text-[#6C757D]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-[#7FFFD4] h-[48px] rounded-[4px] hover:bg-[#7FFFD4]/90 text- font-medium "
      >
        Partner With Us Request
      </Button>
    </form>
  )
}
