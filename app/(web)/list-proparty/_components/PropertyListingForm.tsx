'use client';

import { useState } from 'react';
import {AlertCircle, Home, Building2, House, Landmark } from 'lucide-react';

const PropertyListingForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    expectedPrice: '',
    idealFor: 'End-Use',
    propertyType: 'Apartment',
    positionType: 'Standard Apartment',
    configuration: '',
    bedrooms: 'Any',
    bathrooms: 'Any',
    builtUpArea: '',
    plotSize: '',
    parkingSpaces: 'Any',
    parkingType: 'Any',
    features: 'Type here',
    propertyCondition: 'All',
    furnishing: 'Any',
    amenities: [],
    preferredFinance: {
      cashBuyer: true,
      mortgageBuyer: false,
      paymentPlan: false,
    },
    targetClosingDate: 'Q1 2026',
    urgencyLevel: 'Quick Sale',
    keywords: '',
    privateListing: true,
    contactName: '',
    contactEmail: '',
    contactNumber: '',
    notes: '',
    listingAgents: '1 Agent ( Exclusive Recommended )',
    commissionYes: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (option: string) => {
    setFormData(prev => ({
      ...prev,
      idealFor: option,
    }));
  };

  const handlePropertyType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      propertyType: type,
    }));
  };

  const handlePositionType = (type: string) => {
    setFormData(prev => ({
      ...prev,
      positionType: type,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const pilotButtonClass = (isActive: boolean) =>
    `px-6 py-2 rounded-full font-medium transition-all ${
      isActive
        ? 'bg-[#FF8B8B] text-white'
        : 'bg-[#FFE8E8] text-gray-700 hover:bg-[#FFDBDB]'
    }`;

  return (
    <div className=" container mx-auto my-8">
      {/* Header */}
      <div className="bg-[#FF8B8B] px-4 md:px-8 py-8 text-white">
        <h1 className="text-2xl md:text-3xl font-bold">List Your Property for Sale</h1>
        <p className="text-sm md:text-base mt-2 opacity-95">Share your property details to connect with serious buyers</p>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="w-full px-4 md:px-6 py-8">
        {/* Location & Expected Price */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Area, community, cluster or building"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            />
          </div>

          {/* Expected Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Price (AED) <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                name="expectedPrice"
                value={formData.expectedPrice}
                onChange={handleInputChange}
                placeholder="e.g. 2,500,000"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              />
              <button
                type="button"
                className="px-4 py-2 bg-[#FF8B8B] text-white rounded-lg hover:bg-[#FF6B6B] font-medium"
              >
                Yes
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-medium"
              >
                No
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-600 space-y-1">
              <div className="flex gap-2 flex-wrap">
                <span className="bg-gray-100 px-2 py-1 rounded">Dishonored</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Below Market</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Quick Sale</span>
                <span className="bg-gray-100 px-2 py-1 rounded">Motivated Seller</span>
              </div>
            </div>
          </div>
        </div>

        {/* DLD Calculation */}
        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-3">4% DLD calculated*</p>
          <input
            type="text"
            placeholder="100,000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
          />
        </div>

        {/* Ideal For */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">Ideal for *</label>
          <div className="flex flex-wrap gap-3">
            {['End-Use', 'Investment', 'Both'].map(option => (
              <button
                key={option}
                type="button"
                onClick={() => handleToggle(option)}
                className={pilotButtonClass(formData.idealFor === option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Property Type <span className="text-red-500">*</span> (Residential)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Apartment', icon: Building2 },
              { name: 'Villa', icon: House },
              { name: 'Townhouse', icon: Home },
              { name: 'Land', icon: Landmark },
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                type="button"
                onClick={() => handlePropertyType(name)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  formData.propertyType === name
                    ? 'border-[#FF8B8B] bg-[#FFE8E8]'
                    : 'border-gray-200 bg-white hover:border-[#FF8B8B]'
                }`}
              >
                <Icon className="mx-auto mb-2 w-6 h-6 text-gray-700" />
                <p className="text-sm font-medium">{name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Position Type */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">Position type</label>
          <div className="flex flex-wrap gap-3">
            {['Standard Apartment', 'Penthouse', 'Duplex', 'Serviced Apartment'].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => handlePositionType(type)}
                className={pilotButtonClass(formData.positionType === type)}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="mt-3 bg-[#FFE8E8] px-4 py-2 rounded-lg">
            <p className="text-xs text-gray-700">
              <span className="font-medium">Select configuration:</span> Apartment - Standard Apartment
            </p>
          </div>
        </div>

        {/* Configuration */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">Configuration</label>
          <input
            type="text"
            name="configuration"
            value={formData.configuration}
            onChange={handleInputChange}
            placeholder="Type Configuration"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
          />
        </div>

        {/* Property Status */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">Property Status*</label>
          
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Occupancy Status</p>
            <div className="flex flex-wrap gap-3">
              {['All', 'Vacant', 'Tenanted'].map(status => (
                <label key={status} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="occupancyStatus"
                    value={status}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Completion Status</p>
            <div className="flex flex-wrap gap-3">
              {['All', 'Ready', 'Off-plan'].map(status => (
                <label key={status} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="completionStatus"
                    value={status}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{status}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Ownership Tenure</p>
            <div className="flex flex-wrap gap-3">
              {['All', 'Freehold', 'Leasehold'].map(status => (
                <label key={status} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ownershipTenure"
                    value={status}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{status}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Bedrooms & Bathrooms */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms <span className="text-red-500">*</span>
            </label>
            <select
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bathrooms <span className="text-red-500">*</span>
            </label>
            <select
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4+</option>
            </select>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Details</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Built-up Area (SqM)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="builtUpArea"
                  value={formData.builtUpArea}
                  onChange={handleInputChange}
                  placeholder="Enter area"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#FF8B8B] text-white rounded-lg hover:bg-[#FF6B6B] font-medium text-sm"
                >
                  Sq. Ft
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Plot Size</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="plotSize"
                  value={formData.plotSize}
                  onChange={handleInputChange}
                  placeholder="Enter size"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#FF8B8B] text-white rounded-lg hover:bg-[#FF6B6B] font-medium text-sm"
                >
                  Sq. Ft
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parking Spaces (Min)</label>
              <select
                name="parkingSpaces"
                value={formData.parkingSpaces}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Any</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Parking Type*</label>
              <select
                name="parkingType"
                value={formData.parkingType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Any</option>
                <option>Open</option>
                <option>Covered</option>
                <option>Garage</option>
              </select>
            </div>
          </div>
        </div>

        {/* Features & Amenities */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <select
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Type here</option>
                <option>Swimming Pool</option>
                <option>Garden</option>
                <option>Balcony</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property condition</label>
              <select
                name="propertyCondition"
                value={formData.propertyCondition}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>All</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Furnishing</label>
              <select
                name="furnishing"
                value={formData.furnishing}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Any</option>
                <option>Furnished</option>
                <option>Semi-furnished</option>
                <option>Unfurnished</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Viewing option</label>
              <select
                name="viewingOption"
                defaultValue="Multi select"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Multi select</option>
                <option>By appointment</option>
                <option>Anytime</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Amenities</label>
            <select
              multiple
              defaultValue={['Multi select']}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            >
              <option>Multi select</option>
              <option>Pool</option>
              <option>Gym</option>
              <option>Security</option>
            </select>
          </div>
        </div>

        {/* Financing & Closing */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferred Finance Method *</h3>
          
          <div className="space-y-3 mb-6">
            {[
              { key: 'cashBuyer', label: 'Cash Buyer' },
              { key: 'mortgageBuyer', label: 'Mortgage Buyer' },
              { key: 'paymentPlan', label: 'Payment Plan (Off-plan)' },
            ].map(item => (
              <label key={item.key} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.preferredFinance[item.key as keyof typeof formData.preferredFinance]}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      preferredFinance: {
                        ...prev.preferredFinance,
                        [item.key]: e.target.checked,
                      },
                    }));
                  }}
                  className="w-4 h-4"
                />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Closing Date*</label>
              <select
                name="targetClosingDate"
                value={formData.targetClosingDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Q1 2026</option>
                <option>Q2 2026</option>
                <option>Q3 2026</option>
                <option>Q4 2026</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Urgency Level*</label>
              <select
                name="urgencyLevel"
                value={formData.urgencyLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
              >
                <option>Quick Sale</option>
                <option>Normal</option>
                <option>Flexible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Keywords */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Keywords or Requirements*
          </label>
          <input
            type="text"
            name="keywords"
            value={formData.keywords}
            onChange={handleInputChange}
            placeholder="e.g. near metro"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
          />
        </div>

        {/* Private Listing */}
        <div className="mb-8 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Private listing (off Market)</label>
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, privateListing: !prev.privateListing }))}
            className={`relative w-12 h-6 rounded-full transition-all ${
              formData.privateListing ? 'bg-[#00D084]' : 'bg-gray-300'
            }`}
          >
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                formData.privateListing ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Contact Details */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h3>
          
          <div className="space-y-4">
            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            />
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            />
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              placeholder="Your Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            />
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Enter your notes here"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
            />
          </div>
        </div>

        {/* Listing Intent Notice */}
        <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Listing Intent Notice</h4>
              <p className="text-sm text-yellow-700">
                A property can only be marketed under a limited number of valid DLD listing permits. You may appoint up to a maximum of three agents. Exclusive agent appointments are often preferred by agents, as it avoids duplicate listings. Improves accountability, and allows stronger commitment to marketing and negotiations.
              </p>
            </div>
          </div>
        </div>

        {/* Listing Agents */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">How many agents will represent this property? *</label>
          <select
            name="listingAgents"
            value={formData.listingAgents}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8B8B]"
          >
            <option>1 Agent ( Exclusive Recommended )</option>
            <option>2 Agents</option>
            <option>3 Agents</option>
          </select>
        </div>

        {/* Commission Stance */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Seller Commission Stance *</h3>
          <p className="text-sm text-gray-600 mb-4">Are you offering a seller-paid commission or not? (Visible to agents)</p>

          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="commission"
                value="yes"
                checked={formData.commissionYes}
                onChange={() => setFormData(prev => ({ ...prev, commissionYes: true }))}
                className="w-4 h-4"
              />
              <span className="text-sm">Yes – Happy to pay a seller commission or a fixed fee</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="commission"
                value="no"
                checked={!formData.commissionYes}
                onChange={() => setFormData(prev => ({ ...prev, commissionYes: false }))}
                className="w-4 h-4"
              />
              <span className="text-sm">No – agent will need to be covered by buyer commission only</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="commission"
                value="negotiable"
                checked={false}
                onChange={() => {}}
                className="w-4 h-4"
              />
              <span className="text-sm">Negotiable – open to discussion</span>
            </label>
          </div>

          <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-yellow-700">
              <span className="font-semibold">Commission Notice:</span> As a seller, you may choose to offer a seller-paid commission or a fixed fee to support the sale. While optional, this contract more buyers, encourage stronger agent engagement and prioritisation. All commissions or fee arrangements are discussed and agreed directly between the parties before proceeding. Please note that some brokerages may have internal policies prioritising a seller offering a commission or fee.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-end">
          <button
            type="button"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-[#FF8B8B] text-white font-medium rounded-lg hover:bg-[#FF6B6B] flex items-center justify-center gap-2"
          >
            Post Listing Intent and Find Agents
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyListingForm;
