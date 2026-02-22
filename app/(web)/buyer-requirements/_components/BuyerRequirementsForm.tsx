// 'use client';

// import { useState } from 'react';
// import { ChevronLeft, AlertCircle, Building2, Home, Warehouse, Trees, Check } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Textarea } from '@/components/ui/textarea';

// interface FormData {
//   preferredLocations: string;
//   budgetMin: string;
//   budgetMax: string;
//   useType: 'end-use' | 'investment' | 'both' | '';
//   buyerSignals: {
//     readyToProcess: boolean;
//     activelyLooking: boolean;
//     investorBuyer: boolean;
//     seriousBuyer: boolean;
//   };
//   propertyType: 'apartment' | 'villa' | 'townhouse' | 'land' | '';
//   positionType: 'standalone' | 'twin' | '';
//   rowType: 'single' | 'back-to-back' | '';
//   configuration: string;
//   occupancyStatus: string;
//   completionStatus: string;
//   ownershipTenure: string;
//   bedrooms: string;
//   bathrooms: string;
//   builtUpArea: string;
//   builtUpUnit: string;
//   plotSize: string;
//   parkingSpaces: string;
//   parkingType: string;
//   mustHaveFeatures: string;
//   furnishing: string;
//   amenities: string;
//   viewingOption: string;
//   financeMethod: {
//     cash: boolean;
//     mortgage: boolean;
//     paymentPlan: boolean;
//   };
//   targetClosingDate: string;
//   urgencyLevel: string;
//   additionalKeywords: string;
//   contactName: string;
//   contactEmail: string;
//   contactNumber: string;
//   contactNotes: string;
// }

// export default function BuyerRequirementsForm() {
//   const [formData, setFormData] = useState<FormData>({
//     preferredLocations: '',
//     budgetMin: '',
//     budgetMax: '',
//     useType: '',
//     buyerSignals: {
//       readyToProcess: false,
//       activelyLooking: false,
//       investorBuyer: false,
//       seriousBuyer: false,
//     },
//     propertyType: '',
//     positionType: '',
//     rowType: '',
//     configuration: '',
//     occupancyStatus: '',
//     completionStatus: '',
//     ownershipTenure: '',
//     bedrooms: '',
//     bathrooms: '',
//     builtUpArea: '',
//     builtUpUnit: '',
//     plotSize: '',
//     parkingSpaces: '',
//     parkingType: '',
//     mustHaveFeatures: '',
//     furnishing: '',
//     amenities: '',
//     viewingOption: '',
//     financeMethod: {
//       cash: false,
//       mortgage: false,
//       paymentPlan: false,
//     },
//     targetClosingDate: '',
//     urgencyLevel: '',
//     additionalKeywords: '',
//     contactName: '',
//     contactEmail: '',
//     contactNumber: '',
//     contactNotes: '',
//   });

//   const handleInputChange = (field: keyof FormData, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleNestedChange = (section: string, field: string, value: boolean) => {
//     setFormData(prev => ({
//       ...prev,
//       [section]: {
//         ...(prev[section as keyof FormData] as Record<string, boolean>),
//         [field]: value,
//       },
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const PropertyTypeCard = ({ icon: Icon, label, value }: any) => (
//     <button
//       type="button"
//       onClick={() => handleInputChange('propertyType', value)}
//       className={`flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
//         formData.propertyType === value
//           ? 'border-cyan-400 bg-cyan-50'
//           : 'border-gray-200 bg-white hover:border-gray-300'
//       }`}
//     >
//       <Icon className="w-8 h-8 mb-2 text-gray-600" />
//       <span className="text-sm font-medium text-gray-700">{label}</span>
//     </button>
//   );

//   const ToggleButton = ({ label, value, selected, onClick }: any) => (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`px-4 py-2 rounded-lg font-medium text-sm transition-all border ${
//         selected
//           ? 'bg-cyan-100 border-cyan-400 text-cyan-700'
//           : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
//       }`}
//     >
//       {label}
//     </button>
//   );

//   return (
//     <form onSubmit={handleSubmit} className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="bg-cyan-100 px-4 md:px-8 py-6 md:py-8">
//         <button type="button" className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-800">
//           <ChevronLeft className="w-4 h-4" />
//           <span className="text-sm">Back to Search</span>
//         </button>
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Buyer Requirements</h1>
//         <p className="text-gray-600 text-sm md:text-base">
//           Post your requirements to receive matched deals from verified agents
//         </p>
//       </div>

//       {/* Form Content */}
//       <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
//         {/* Required Information Section */}
//         <div className="mb-8">
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
//             <h2 className="text-lg font-semibold text-gray-800">Required Information</h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             {/* Preferred Locations */}
//             <div>
//               <Label htmlFor="locations" className="flex items-center gap-1 text-gray-700 font-medium mb-2">
//                 Preferred locations <span className="text-red-500">*</span>
//                 <span className="text-gray-400 text-xs ml-1">ⓘ</span>
//               </Label>
//               <Select value={formData.preferredLocations} onValueChange={(value) => handleInputChange('preferredLocations', value)}>
//                 <SelectTrigger id="locations">
//                   <SelectValue placeholder="Area, community, cluster or building" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="dubai">Dubai</SelectItem>
//                   <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
//                   <SelectItem value="sharjah">Sharjah</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Budget */}
//             <div>
//               <Label className="flex items-center gap-1 text-gray-700 font-medium mb-2">
//                 Budget (AED) <span className="text-red-500">*</span>
//               </Label>
//               <div className="flex gap-2 items-end">
//                 <div className="flex-1">
//                   <Select value={formData.budgetMin} onValueChange={(value) => handleInputChange('budgetMin', value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="min" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="100000">100,000</SelectItem>
//                       <SelectItem value="500000">500,000</SelectItem>
//                       <SelectItem value="1000000">1,000,000</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className="flex-1">
//                   <Select value={formData.budgetMax} onValueChange={(value) => handleInputChange('budgetMax', value)}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Max" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1000000">1,000,000</SelectItem>
//                       <SelectItem value="5000000">5,000,000</SelectItem>
//                       <SelectItem value="10000000">10,000,000</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Buyer Signals */}
//               <div className="mt-4">
//                 <p className="text-xs text-gray-600 font-medium mb-3">Buyer signals</p>
//                 <div className="space-y-2">
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <Checkbox
//                       checked={formData.buyerSignals.readyToProcess}
//                       onCheckedChange={(checked) => handleNestedChange('buyerSignals', 'readyToProcess', checked as boolean)}
//                     />
//                     <span className="text-xs text-gray-700">Ready to Process</span>
//                   </label>
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <Checkbox
//                       checked={formData.buyerSignals.activelyLooking}
//                       onCheckedChange={(checked) => handleNestedChange('buyerSignals', 'activelyLooking', checked as boolean)}
//                     />
//                     <span className="text-xs text-gray-700">Actively Looking</span>
//                   </label>
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <Checkbox
//                       checked={formData.buyerSignals.investorBuyer}
//                       onCheckedChange={(checked) => handleNestedChange('buyerSignals', 'investorBuyer', checked as boolean)}
//                     />
//                     <span className="text-xs text-gray-700">Investor Buyer</span>
//                   </label>
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <Checkbox
//                       checked={formData.buyerSignals.seriousBuyer}
//                       onCheckedChange={(checked) => handleNestedChange('buyerSignals', 'seriousBuyer', checked as boolean)}
//                     />
//                     <span className="text-xs text-gray-700">Serious buyer</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Use Type */}
//           <div>
//             <Label className="text-gray-700 font-medium mb-3 block">
//               Use Type <span className="text-gray-400 text-xs ml-1">ⓘ</span>
//             </Label>
//             <div className="flex flex-wrap gap-2">
//               <ToggleButton
//                 label="End-Use"
//                 value="end-use"
//                 selected={formData.useType === 'end-use'}
//                 onClick={() => handleInputChange('useType', 'end-use')}
//               />
//               <ToggleButton
//                 label="Investment"
//                 value="investment"
//                 selected={formData.useType === 'investment'}
//                 onClick={() => handleInputChange('useType', 'investment')}
//               />
//               <ToggleButton
//                 label="Both"
//                 value="both"
//                 selected={formData.useType === 'both'}
//                 onClick={() => handleInputChange('useType', 'both')}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Property Type Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Property Type <span className="text-gray-500 text-base">( Residential )</span>
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <PropertyTypeCard icon={Building2} label="Apartment" value="apartment" />
//             <PropertyTypeCard icon={Home} label="Villa" value="villa" />
//             <PropertyTypeCard icon={Warehouse} label="Townhouse" value="townhouse" />
//             <PropertyTypeCard icon={Trees} label="Land" value="land" />
//           </div>
//         </div>

//         {/* Position Type & Row Type */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//           <div>
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">Position type</h3>
//             <div className="space-y-2">
//               <ToggleButton
//                 label="Stand alone"
//                 value="standalone"
//                 selected={formData.positionType === 'standalone'}
//                 onClick={() => handleInputChange('positionType', 'standalone')}
//               />
//               <ToggleButton
//                 label="Twin Villa"
//                 value="twin"
//                 selected={formData.positionType === 'twin'}
//                 onClick={() => handleInputChange('positionType', 'twin')}
//               />
//             </div>
//           </div>
//           <div>
//             <h3 className="text-sm font-semibold text-gray-800 mb-3">Row type</h3>
//             <div className="space-y-2">
//               <ToggleButton
//                 label="Single Row"
//                 value="single"
//                 selected={formData.rowType === 'single'}
//                 onClick={() => handleInputChange('rowType', 'single')}
//               />
//               <ToggleButton
//                 label="Back-to-Back"
//                 value="back-to-back"
//                 selected={formData.rowType === 'back-to-back'}
//                 onClick={() => handleInputChange('rowType', 'back-to-back')}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Selection Summary */}
//         {(formData.propertyType || formData.positionType || formData.rowType) && (
//           <div className="bg-cyan-100 p-4 rounded-lg mb-8">
//             <p className="text-sm text-cyan-700 font-medium">
//               Select configuration: {formData.propertyType && formData.propertyType.charAt(0).toUpperCase() + formData.propertyType.slice(1)}
//               {formData.positionType && ` - ${formData.positionType === 'standalone' ? 'Stand alone' : 'Twin Villa'}`}
//               {formData.rowType && ` - ${formData.rowType === 'single' ? 'Single row' : 'Back-to-Back'}`}
//             </p>
//           </div>
//         )}

//         {/* Configuration */}
//         <div className="mb-8">
//           <h3 className="text-sm font-semibold text-gray-800 mb-3">Configuration</h3>
//           <Input
//             placeholder="Type Configuration"
//             value={formData.configuration}
//             onChange={(e) => handleInputChange('configuration', e.target.value)}
//             className="bg-white border-gray-200"
//           />
//         </div>

//         {/* Strong Preferences Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-6">Strong Preferences <span className="text-red-500">*</span></h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Occupancy Status */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">Occupancy Status</p>
//               <div className="space-y-2">
//                 <ToggleButton
//                   label="All"
//                   value="all"
//                   selected={formData.occupancyStatus === 'all'}
//                   onClick={() => handleInputChange('occupancyStatus', 'all')}
//                 />
//                 <ToggleButton
//                   label="Vacant"
//                   value="vacant"
//                   selected={formData.occupancyStatus === 'vacant'}
//                   onClick={() => handleInputChange('occupancyStatus', 'vacant')}
//                 />
//                 <ToggleButton
//                   label="Tenanted"
//                   value="tenanted"
//                   selected={formData.occupancyStatus === 'tenanted'}
//                   onClick={() => handleInputChange('occupancyStatus', 'tenanted')}
//                 />
//               </div>
//             </div>

//             {/* Completion Status */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">Completion Status</p>
//               <div className="space-y-2">
//                 <ToggleButton
//                   label="All"
//                   value="all"
//                   selected={formData.completionStatus === 'all'}
//                   onClick={() => handleInputChange('completionStatus', 'all')}
//                 />
//                 <ToggleButton
//                   label="Ready"
//                   value="ready"
//                   selected={formData.completionStatus === 'ready'}
//                   onClick={() => handleInputChange('completionStatus', 'ready')}
//                 />
//                 <ToggleButton
//                   label="Off - plan"
//                   value="off-plan"
//                   selected={formData.completionStatus === 'off-plan'}
//                   onClick={() => handleInputChange('completionStatus', 'off-plan')}
//                 />
//               </div>
//             </div>

//             {/* Ownership Tenure */}
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-3">Ownership Tenure</p>
//               <div className="space-y-2">
//                 <ToggleButton
//                   label="All"
//                   value="all"
//                   selected={formData.ownershipTenure === 'all'}
//                   onClick={() => handleInputChange('ownershipTenure', 'all')}
//                 />
//                 <ToggleButton
//                   label="Freehold"
//                   value="freehold"
//                   selected={formData.ownershipTenure === 'freehold'}
//                   onClick={() => handleInputChange('ownershipTenure', 'freehold')}
//                 />
//                 <ToggleButton
//                   label="Leasehold"
//                   value="leasehold"
//                   selected={formData.ownershipTenure === 'leasehold'}
//                   onClick={() => handleInputChange('ownershipTenure', 'leasehold')}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Property Details Section */}
//         <div className="mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <Label htmlFor="bedrooms" className="flex items-center gap-1 text-gray-700 font-medium mb-2">
//                 Bedrooms (Min) <span className="text-gray-400 text-xs ml-1">ⓘ</span>
//               </Label>
//               <Select value={formData.bedrooms} onValueChange={(value) => handleInputChange('bedrooms', value)}>
//                 <SelectTrigger id="bedrooms">
//                   <SelectValue placeholder="Any" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="any">Any</SelectItem>
//                   <SelectItem value="1">1</SelectItem>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="3">3</SelectItem>
//                   <SelectItem value="4">4</SelectItem>
//                   <SelectItem value="5">5+</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="bathrooms" className="flex items-center gap-1 text-gray-700 font-medium mb-2">
//                 Bathrooms (Min) <span className="text-gray-400 text-xs ml-1">ⓘ</span>
//               </Label>
//               <Select value={formData.bathrooms} onValueChange={(value) => handleInputChange('bathrooms', value)}>
//                 <SelectTrigger id="bathrooms">
//                   <SelectValue placeholder="Any" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="any">Any</SelectItem>
//                   <SelectItem value="1">1</SelectItem>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="3">3</SelectItem>
//                   <SelectItem value="4">4+</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <Label className="text-gray-700 font-medium mb-2 block">Built-Up Area(BUA)</Label>
//               <div className="flex gap-2">
//                 <Input
//                   placeholder="Enter area"
//                   value={formData.builtUpArea}
//                   onChange={(e) => handleInputChange('builtUpArea', e.target.value)}
//                   className="flex-1 bg-white border-gray-200"
//                 />
//               </div>
//             </div>

//             <div>
//               <Label className="text-gray-700 font-medium mb-2 block">Plot Size</Label>
//               <Input
//                 placeholder="Enter size"
//                 value={formData.plotSize}
//                 onChange={(e) => handleInputChange('plotSize', e.target.value)}
//                 className="bg-white border-gray-200"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <Label htmlFor="parking-spaces" className="flex items-center gap-1 text-gray-700 font-medium mb-2">
//                 Parking Spaces (Min) <span className="text-gray-400 text-xs ml-1">ⓘ</span>
//               </Label>
//               <Select value={formData.parkingSpaces} onValueChange={(value) => handleInputChange('parkingSpaces', value)}>
//                 <SelectTrigger id="parking-spaces">
//                   <SelectValue placeholder="Any" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="any">Any</SelectItem>
//                   <SelectItem value="1">1</SelectItem>
//                   <SelectItem value="2">2</SelectItem>
//                   <SelectItem value="3">3+</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="parking-type" className="text-gray-700 font-medium mb-2 block">
//                 Parking Type <span className="text-red-500">*</span>
//               </Label>
//               <Select value={formData.parkingType} onValueChange={(value) => handleInputChange('parkingType', value)}>
//                 <SelectTrigger id="parking-type">
//                   <SelectValue placeholder="Any" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="any">Any</SelectItem>
//                   <SelectItem value="covered">Covered</SelectItem>
//                   <SelectItem value="open">Open</SelectItem>
//                   <SelectItem value="both">Both</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>

//         {/* Must-Have Features & Furnishing */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div>
//             <Label htmlFor="must-have" className="text-gray-700 font-medium mb-2 block">
//               Must-Have Features
//             </Label>
//             <Select value={formData.mustHaveFeatures} onValueChange={(value) => handleInputChange('mustHaveFeatures', value)}>
//               <SelectTrigger id="must-have">
//                 <SelectValue placeholder="Any" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="any">Any</SelectItem>
//                 <SelectItem value="balcony">Balcony</SelectItem>
//                 <SelectItem value="garden">Garden</SelectItem>
//                 <SelectItem value="pool">Pool</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label htmlFor="furnishing" className="text-gray-700 font-medium mb-2 block">
//               Furnishing
//             </Label>
//             <Select value={formData.furnishing} onValueChange={(value) => handleInputChange('furnishing', value)}>
//               <SelectTrigger id="furnishing">
//                 <SelectValue placeholder="Any" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="any">Any</SelectItem>
//                 <SelectItem value="furnished">Furnished</SelectItem>
//                 <SelectItem value="unfurnished">Unfurnished</SelectItem>
//                 <SelectItem value="semi">Semi-Furnished</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Amenities & Viewing Option */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div>
//             <Label htmlFor="amenities" className="text-gray-700 font-medium mb-2 block">
//               Choose Amenities
//             </Label>
//             <Select value={formData.amenities} onValueChange={(value) => handleInputChange('amenities', value)}>
//               <SelectTrigger id="amenities">
//                 <SelectValue placeholder="Multi select" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="gym">Gym</SelectItem>
//                 <SelectItem value="pool">Pool</SelectItem>
//                 <SelectItem value="parking">Parking</SelectItem>
//                 <SelectItem value="security">24/7 Security</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label htmlFor="viewing" className="text-gray-700 font-medium mb-2 block">
//               Viewing option
//             </Label>
//             <Select value={formData.viewingOption} onValueChange={(value) => handleInputChange('viewingOption', value)}>
//               <SelectTrigger id="viewing">
//                 <SelectValue placeholder="Multi select" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="virtual">Virtual Tour</SelectItem>
//                 <SelectItem value="in-person">In-Person</SelectItem>
//                 <SelectItem value="both">Both</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Property Condition & Additional Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div>
//             <Label htmlFor="property-condition" className="text-gray-700 font-medium mb-2 block">
//               Property condition
//             </Label>
//             <Select value={formData.mustHaveFeatures} onValueChange={(value) => handleInputChange('mustHaveFeatures', value)}>
//               <SelectTrigger id="property-condition">
//                 <SelectValue placeholder="All" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="all">All</SelectItem>
//                 <SelectItem value="excellent">Excellent</SelectItem>
//                 <SelectItem value="good">Good</SelectItem>
//                 <SelectItem value="fair">Fair</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label htmlFor="additional-keywords" className="text-gray-700 font-medium mb-2 block">
//               Additional Keywords or Requirements <span className="text-red-500">*</span>
//             </Label>
//             <Textarea
//               id="additional-keywords"
//               placeholder="e.g. High floor apartment, sea view, near metro"
//               value={formData.additionalKeywords}
//               onChange={(e) => handleInputChange('additionalKeywords', e.target.value)}
//               className="bg-white border-gray-200 min-h-20"
//             />
//           </div>
//         </div>

//         {/* Buyer Profile Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-6">Buyer Profile <span className="text-red-500">*</span></h3>

//           {/* Finance Method */}
//           <div className="mb-6">
//             <Label className="text-gray-700 font-medium mb-3 block">Finance Method <span className="text-red-500">*</span></Label>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Checkbox
//                   checked={formData.financeMethod.cash}
//                   onCheckedChange={(checked) => handleNestedChange('financeMethod', 'cash', checked as boolean)}
//                 />
//                 <span className="text-sm text-gray-700">Cash Buyer</span>
//               </label>
//               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Checkbox
//                   checked={formData.financeMethod.mortgage}
//                   onCheckedChange={(checked) => handleNestedChange('financeMethod', 'mortgage', checked as boolean)}
//                 />
//                 <span className="text-sm text-gray-700">Mortgage Buyer</span>
//               </label>
//               <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
//                 <Checkbox
//                   checked={formData.financeMethod.paymentPlan}
//                   onCheckedChange={(checked) => handleNestedChange('financeMethod', 'paymentPlan', checked as boolean)}
//                 />
//                 <span className="text-sm text-gray-700">Payment Plan ( Off-plan )</span>
//               </label>
//             </div>
//           </div>

//           {/* Target Closing Date & Urgency Level */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//             <div>
//               <Label htmlFor="closing-date" className="text-gray-700 font-medium mb-2 block">
//                 Target Closing Date <span className="text-red-500">*</span>
//               </Label>
//               <Select value={formData.targetClosingDate} onValueChange={(value) => handleInputChange('targetClosingDate', value)}>
//                 <SelectTrigger id="closing-date">
//                   <SelectValue placeholder="Q1 2026" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="q1-2026">Q1 2026</SelectItem>
//                   <SelectItem value="q2-2026">Q2 2026</SelectItem>
//                   <SelectItem value="q3-2026">Q3 2026</SelectItem>
//                   <SelectItem value="q4-2026">Q4 2026</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label htmlFor="urgency" className="text-gray-700 font-medium mb-2 block">
//                 Urgency Level <span className="text-red-500">*</span>
//               </Label>
//               <Select value={formData.urgencyLevel} onValueChange={(value) => handleInputChange('urgencyLevel', value)}>
//                 <SelectTrigger id="urgency">
//                   <SelectValue placeholder="Actively Looking" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="actively">Actively Looking</SelectItem>
//                   <SelectItem value="browsing">Just Browsing</SelectItem>
//                   <SelectItem value="planning">Planning to Buy</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </div>

//         {/* Contact Details Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h3>
//           <div className="space-y-4">
//             <Input
//               placeholder="Your Full Name"
//               value={formData.contactName}
//               onChange={(e) => handleInputChange('contactName', e.target.value)}
//               className="bg-white border-gray-200"
//             />
//             <Input
//               placeholder="Your Email"
//               type="email"
//               value={formData.contactEmail}
//               onChange={(e) => handleInputChange('contactEmail', e.target.value)}
//               className="bg-white border-gray-200"
//             />
//             <Input
//               placeholder="Your Number"
//               type="tel"
//               value={formData.contactNumber}
//               onChange={(e) => handleInputChange('contactNumber', e.target.value)}
//               className="bg-white border-gray-200"
//             />
//             <Textarea
//               placeholder="Enter your notes here"
//               value={formData.contactNotes}
//               onChange={(e) => handleInputChange('contactNotes', e.target.value)}
//               className="bg-white border-gray-200 min-h-24"
//             />
//           </div>
//         </div>

//         {/* Commission Notice */}
//         <Alert className="bg-yellow-50 border-yellow-200 mb-8">
//           <AlertCircle className="h-4 w-4 text-yellow-600" />
//           <AlertDescription className="text-yellow-800 text-sm">
//             <strong>Commission Notice:</strong> Buyer's commission and government fees are typically paid by the buyer. All commission and fee details are discussed and agreed directly with the agent handling the transaction.
//           </AlertDescription>
//         </Alert>

//         {/* Action Buttons */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <Button
//             type="button"
//             variant="outline"
//             className="w-full py-6 text-base font-semibold border-gray-300 hover:bg-gray-50"
//           >
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             className="w-full py-6 text-base font-semibold bg-cyan-400 hover:bg-cyan-500 text-white"
//           >
//             <Check className="w-4 h-4 mr-2" />
//             Post Requirements & Find Agents
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// }



import React from 'react'

const BuyerRequirementsForm = () => {
  return (
    <div>
      asds
    </div>
  )
}

export default BuyerRequirementsForm
