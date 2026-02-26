'use client';

import { useMemo, useState } from 'react';
import { BadgeInfo, ChevronLeft, Info, MapPin, Send } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

type PropertyType = 'residential' | 'commercial';
type TransactionType = 'rent' | 'sale';

type DealSignal = 'distressed' | 'below-market' | 'quick-sale' | 'motivated-seller';
type IdealFor = 'end-use' | 'investment' | 'both';

type PropertyStatus = {
  occupancy?: 'all' | 'vacant' | 'tenanted';
  completion?: 'all' | 'ready' | 'off-plan';
  ownership?: 'all' | 'freehold' | 'leasehold';
};

type FormData = {
  location: string;

  expectedPrice: string;
  negotiable: boolean;

  // SALE only
  idealFor: IdealFor;
  dealSignals: DealSignal[];
  dldCalculated: string;

  // RENT only
  depositAmount: string;
  priceType: 'monthly' | 'annually';
  serviceCharges: string;

  configuration: string;
  selectedSubType: string;
  positionType: string; // residential only
  rowType: string; // residential only (townhouse/villa)

  propertyStatus: PropertyStatus;
  availableFrom: string; // rent only
  occupancyRent: 'vacant' | 'tenanted'; // rent only

  bedrooms: string;
  bathrooms: string;

  bua: string;
  buaUnit: 'sqft' | 'sqm';
  plotSize: string;
  parkingSpaces: string;
  parkingType: string;
  features: string;
  propertyCondition: string;
  furnishing: string;
  chequePreference: string;
  amenities: string;
  viewingOption: string;

  financeMethod: string[];
  targetClosingDate: string;
  urgencyLevelSale: string;

  keyMoney: 'yes' | 'no' | 'any';
  keyMoneyType: string;
  tenantPreference: string;
  preferredLeaseLength: string;
  moveInDate: string;
  urgencyLevelRent: string;

  keywords: string;

  privateListingOffMarket: boolean;

  name: string;
  email: string;
  phone: string;
  notes: string;

  agentsCount: string;
  sellerCommissionStance: string;
};

const residentialSubTypes = [
  { id: 'apartment', label: 'Apartment', icon: '/icon/1.png' },
  { id: 'villa', label: 'Villa', icon: '/icon/2.png' },
  { id: 'townhouse', label: 'Townhouse', icon: '/icon/3.png' },
  { id: 'land', label: 'Land', icon: '/icon/4.png' },
];

const commercialSubTypes = [
  { id: 'office', label: 'Office', icon: '/icon/5.png' },
  { id: 'retail', label: 'Retail / Shop', icon: '/icon/6.png' },
  { id: 'warehouse', label: 'Warehouse', icon: '/icon/7.png' },
  { id: 'showroom', label: 'Showroom', icon: '/icon/8.png' },
  { id: 'restaurant', label: 'Restaurant / Cafe', icon: '/icon/9.png' },
  { id: 'industrial', label: 'Industrial', icon: '/icon/10.png' },
  { id: 'mixed', label: 'Mixed Use', icon: '/icon/11.png' },
  { id: 'commercial-land', label: 'Commercial Land', icon: '/icon/12.png' },
];

const rowTypes = ['Single Row', 'Back-to-Back'];

const RES_POSITION_TYPES: Record<string, string[]> = {
  apartment: ['Standard Apartment', 'Penthouse', 'Duplex', 'Serviced Apartment'],
  villa: ['Stand alone', 'Twin Villa'],
  townhouse: ['Corner Unit', 'End Unit', 'middle Unit'],
  land: [],
};

const COM_POSITION_TYPES: Record<string, string[]> = {
  office: [],
  retail: ['Ground Floor', 'Mall Unit', 'Street level', 'High Street'],
  warehouse: [],
  showroom: ['Ground Floor', 'Mezzanine', 'Multi-level'],
  restaurant: ['Stand alone'],
  industrial: [],
  mixed: [],
  'commercial-land': [],
};

const COM_CONFIG_FALLBACK: Record<string, string> = {
  office: 'Full Floor',
  retail: '',
  warehouse: '',
  showroom: '',
  restaurant: '',
  industrial: '',
  mixed: '',
  'commercial-land': '',
};

const getPositionTypeOptions = (property: PropertyType, subType: string) => {
  return property === 'residential' ? RES_POSITION_TYPES[subType] ?? [] : COM_POSITION_TYPES[subType] ?? [];
};

const getDefaultPositionType = (property: PropertyType, subType: string) => {
  const options = getPositionTypeOptions(property, subType);
  return options[0] ?? '';
};

export default function RequirementListingForm() {
  const [propertyType, setPropertyType] = useState<PropertyType>('residential');
  const [transactionType, setTransactionType] = useState<TransactionType>('rent');

  const isResidential = propertyType === 'residential';
  const isCommercial = propertyType === 'commercial';
  const isSale = transactionType === 'sale';
  const isRent = transactionType === 'rent';

  const subTypes = useMemo(() => (isResidential ? residentialSubTypes : commercialSubTypes), [isResidential]);

  const [formData, setFormData] = useState<FormData>({
    location: '',

    expectedPrice: '',
    negotiable: true,

    idealFor: 'end-use',
    dealSignals: ['distressed', 'below-market', 'quick-sale', 'motivated-seller'],
    dldCalculated: '100,000',

    depositAmount: '',
    priceType: 'monthly',
    serviceCharges: '',

    configuration: '',
    selectedSubType: 'apartment',
    positionType: 'Standard Apartment',
    rowType: 'Single Row',

    propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
    availableFrom: 'q1-2026',
    occupancyRent: 'vacant',

    bedrooms: 'studio',
    bathrooms: '1',

    bua: '',
    buaUnit: 'sqft',
    plotSize: '',
    parkingSpaces: '1',
    parkingType: 'any',
    features: 'bathtub',
    propertyCondition: 'all',
    furnishing: 'fully-furnished',
    chequePreference: '1-cheque',
    amenities: 'building-community',
    viewingOption: 'floor-plans',

    financeMethod: ['cash'],
    targetClosingDate: 'q1-2026',
    urgencyLevelSale: 'actively-looking',

    keyMoney: 'any',
    keyMoneyType: '',
    tenantPreference: '',
    preferredLeaseLength: '1-year',
    moveInDate: 'jan-2026',
    urgencyLevelRent: 'actively-looking',

    keywords: '',

    privateListingOffMarket: false,

    name: '',
    email: '',
    phone: '',
    notes: '',

    agentsCount: '1-agent',
    sellerCommissionStance: 'yes',
  });

  const selectedSubTypeLabel = useMemo(() => {
    return subTypes.find((t) => t.id === formData.selectedSubType)?.label ?? formData.selectedSubType;
  }, [subTypes, formData.selectedSubType]);

  const positionTypeOptions = useMemo(() => {
    return getPositionTypeOptions(propertyType, formData.selectedSubType);
  }, [propertyType, formData.selectedSubType]);

  const showRowType = isResidential && (formData.selectedSubType === 'villa' || formData.selectedSubType === 'townhouse');
  // const showConfigurationInput =
  //   (isResidential && formData.selectedSubType === 'villa') || (isCommercial && formData.selectedSubType === 'office');

  const configPosition =
    positionTypeOptions.length > 0 ? formData.positionType : COM_CONFIG_FALLBACK[formData.selectedSubType] ?? '';
  const configLine = [selectedSubTypeLabel, configPosition, showRowType ? formData.rowType : '']
    .filter(Boolean)
    .join(' - ');

  const setField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((p) => ({ ...p, [key]: value }));
  };

  const resetForTabs = (nextProperty: PropertyType, nextTxn: TransactionType) => {
    const nextIsRes = nextProperty === 'residential';
    setFormData((p) => ({
      ...p,
      selectedSubType: nextIsRes ? 'apartment' : 'office',
      positionType: getDefaultPositionType(nextProperty, nextIsRes ? 'apartment' : 'office'),
      rowType: 'Single Row',
      configuration: '',
      propertyStatus: { occupancy: 'all', completion: 'all', ownership: 'all' },
      // keep shared values; clear only where needed
      tenantPreference: nextTxn === 'sale' ? '' : p.tenantPreference,
      depositAmount: nextTxn === 'sale' ? '' : p.depositAmount,
      serviceCharges: nextTxn === 'sale' ? '' : p.serviceCharges,
    }));
  };

  const onPropertyTypeChange = (type: PropertyType) => {
    setPropertyType(type);
    resetForTabs(type, transactionType);
  };

  const onTransactionTypeChange = (type: TransactionType) => {
    setTransactionType(type);
    resetForTabs(propertyType, type);
  };

  const onSelectSubType = (id: string) => {
    const nextPosition = getDefaultPositionType(propertyType, id);
    setFormData((p) => ({
      ...p,
      selectedSubType: id,
      positionType: nextPosition,
      rowType: 'Single Row',
    }));
  };

  // ===== YOUR COLORS =====
  const PRIMARY = '#B2FFE5';
  const SOFT = '#E6FFF7';

  // ===== UI CLASSES (match provided design) =====
  const labelClass = 'mb-2 flex items-center gap-2 text-[12px] font-medium text-[#5B6472]';
  const sectionTitleClass = 'text-[20px] font-medium leading-none text-[#4B4B4B]';
  const controlClass =
    'h-10 w-full rounded-[8px] border border-[#D7DFEA] bg-white text-[13px] font-medium text-[#2e3239] shadow-sm ' +
    'placeholder:text-[#A0A7B2] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[rgba(178,255,229,0.85)] focus-visible:ring-offset-white';

  const chipOn =
    'rounded-[6px] border border-[#CAD5E2] bg-white px-3 py-1 text-[11px] font-semibold text-[#2e3239] shadow-sm';
  const chipOff =
    'rounded-[6px] border border-[#CAD5E2] bg-[#F4F6F9] px-3 py-1 text-[11px] font-semibold text-[#5b6472]';

  const tabWrap =
    'grid w-full max-w-[380px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm';
  const tabOn = 'h-9 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]';
  const tabOff = 'h-9 rounded-[8px] text-[13px] font-semibold text-[#3b4452]';

  const subCardOn =
    'rounded-[8px] border border-[rgba(178,255,229,1)] bg-[rgba(230,255,247,1)] px-4 py-3 text-center text-[12px] font-semibold text-[#2e3239]';
  const subCardOff =
    'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-3 text-center text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]';

  // Header text (match images)
  const pageTitle = isRent ? 'Tenant Requirements' : 'Buyer Requirements';
  const pageSub = isRent
    ? 'Post your requirements to find your perfect home'
    : 'Post your requirements to receive matched deals from verified agents';

  const commissionNote = isRent
    ? 'Tenant commission and related fees are typically paid by the tenant. All commission and fee details are discussed and agreed directly with the agent handling the rental transaction.'
    : "Buyer's commission and government fees are typically paid by the buyer. All commission and fee details are discussed and agreed directly with the agent handling the transaction.";

  return (
    <div className="min-h-screen  py-10">
      <div className="mx-auto w-full container px-4">
        {/* Top tabs */}
        <div className="pt-4 pb-10">
          <div className="flex flex-col items-center gap-3">
          <div className={tabWrap}>
            <button
              type="button"
              onClick={() => onPropertyTypeChange('residential')}
              className={`${isResidential ? tabOn : tabOff}`}
              style={{ background: isResidential ? PRIMARY : 'transparent' }}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => onPropertyTypeChange('commercial')}
              className={`${isCommercial ? tabOn : tabOff}`}
              style={{ background: isCommercial ? PRIMARY : 'transparent' }}
            >
              Commercial
            </button>
          </div>

          <div className="grid w-full max-w-[260px] grid-cols-2 gap-1 rounded-[8px] border border-[#CAD5E2] bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => onTransactionTypeChange('sale')}
              className="h-8 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]"
              style={{ background: isSale ? PRIMARY : 'transparent' }}
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => onTransactionTypeChange('rent')}
              className="h-8 rounded-[8px] text-[13px] font-semibold text-[#1f2a37]"
              style={{ background: isRent ? PRIMARY : 'transparent' }}
            >
              Rent
            </button>
          </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[12px] border border-[#E6EBF2] bg-white shadow-sm">
          {/* Header (match images: mint bar) */}
          <div className="px-5 py-6" style={{ background: PRIMARY }}>
          <button type="button" className="mb-3 inline-flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#2e3239]">
              <ChevronLeft className="h-3 w-3" />
            </span>
            Go Back
          </button>

          <h1 className="text-[22px] font-semibold text-[#2e3239]">{pageTitle}</h1>
          <p className="mt-1 text-[12px] text-[#2e3239]/80">{pageSub}</p>
        </div>

          <form className="space-y-7 px-5 py-6 text-[#2e3239]">
          {/* Required Information */}
          <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
            Required Information
          </div>

          {/* Top fields */}
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <Label className={labelClass}>
                <MapPin className="h-4 w-4" />
                Preferred Locations *
                <BadgeInfo className="h-4 w-4 text-[#7b8492]" />
              </Label>

              <Select value={formData.location} onValueChange={(v) => setField('location', v)}>
                <SelectTrigger className={controlClass}>
                  <SelectValue placeholder="Area, community, cluster or building" />
                </SelectTrigger>
                <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                  <SelectItem value="downtown">Downtown</SelectItem>
                  <SelectItem value="suburbs">Suburbs</SelectItem>
                  <SelectItem value="marina">Marina</SelectItem>
                </SelectContent>
              </Select>

              {isRent && <p className="mt-2 text-xs text-[#6f7783]">You can select multiple locations</p>}

              {/* SALE: Ideal for row (images show this only on Buyer) */}
              {isSale && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#4B4B4B]">
                    Use Type *
                    <BadgeInfo className="h-4 w-4 text-[#7b8492]" />
                  </div>

                  <div className="mt- w-[400px] grid grid-cols-3 rounded-[8px] bg-[#F1F5F9] p-1">
                    {[
                      { k: 'end-use', t: 'End-Use' },
                      { k: 'investment', t: 'Investment' },
                      { k: 'both', t: 'Both' },
                    ].map((x) => (
                      <button
                        key={x.k}
                        type="button"
                        onClick={() => setField('idealFor', x.k as IdealFor)}
                        className="rounded-[8px] px-3 py-2 text-xs font-semibold"
                        style={{ background: formData.idealFor === x.k ? 'white' : 'transparent' }}
                      >
                        {x.t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:col-span-5">
              <Label className={labelClass}>Budget (AED) *</Label>

              <div className="grid grid-cols-2 gap-3">
                <Select value={'min'} onValueChange={() => {}}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue placeholder="min" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="200000">200000</SelectItem>
                    <SelectItem value="300000">300000</SelectItem>
                    <SelectItem value="400000">400000</SelectItem>
                    <SelectItem value="500000">500000</SelectItem>
                    <SelectItem value="600000">600000</SelectItem>
                    <SelectItem value="700000">700000</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={'max'} onValueChange={() => {}}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue placeholder="Max" />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="200000">200000</SelectItem>
                    <SelectItem value="300000">300000</SelectItem>
                    <SelectItem value="400000">400000</SelectItem>
                    <SelectItem value="500000">500000</SelectItem>
                    <SelectItem value="600000">600000</SelectItem>
                    <SelectItem value="700000">700000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Rent: Monthly/Annually toggle (same as images) */}
              {isRent && (
                <div className="mt-3 inline-flex overflow-hidden rounded-[8px] border border-[#CAD5E2] bg-white">
                  <button
                    type="button"
                    onClick={() => setField('priceType', 'monthly')}
                    className="px-4 py-2 text-xs font-semibold"
                    style={{ background: formData.priceType === 'monthly' ? PRIMARY : 'transparent' }}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('priceType', 'annually')}
                    className="px-4 py-2 text-xs font-semibold"
                    style={{ background: formData.priceType === 'annually' ? PRIMARY : 'transparent' }}
                  >
                    Annually
                  </button>
                </div>
              )}

              {/* Buyer signals (sale) */}
              {isSale && (
                <div className="mt-3">
                  <div className="text-[12px] font-medium text-[#4B4B4B]">Buyer signals</div>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-[#4B4B4B]">
                    {['Ready to Proceed', 'Actively looking', 'Investor Buyer', 'Serious buyer'].map((t) => (
                      <label key={t} className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="h-3.5 w-3.5 rounded border-[#D7DFEA] accent-[#7FFFD4]"
                          defaultChecked
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Property Type */}
          <section className="space-y-4">
            <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
              Property Type* ( {isResidential ? 'Residential' : 'Commercial'} )
            </div>

            <div className={`grid gap-3 ${isResidential ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-5'}`}>
              {subTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => onSelectSubType(type.id)}
                  className={formData.selectedSubType === type.id ? subCardOn : subCardOff}
                >
                  <Image src={type.icon} alt={type.label} width={1000} height={1000} className="mx-auto mb-1 h-6 w-6" />
                  <div className="text-[13px] font-semibold">{type.label}</div>
                </button>
              ))}
            </div>

            {/* Position type (conditional by subtype) */}
            {positionTypeOptions.length > 0 && (
              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-[#2e3239]">Position type</Label>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {positionTypeOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField('positionType', item)}
                      className={
                        formData.positionType === item
                          ? 'rounded-[8px] border border-[#D7DFEA] px-4 py-2 text-[12px] font-semibold text-[#2e3239]'
                          : 'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-2 text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]'
                      }
                      style={{ background: formData.positionType === item ? SOFT : 'white' }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showRowType && (
              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-[#2e3239]">Row type</Label>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
                  {rowTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField('rowType', item)}
                      className={
                        formData.rowType === item
                          ? 'rounded-[8px] border border-[#D7DFEA] px-4 py-2 text-[12px] font-semibold text-[#2e3239]'
                          : 'rounded-[8px] border border-[#D7DFEA] bg-white px-4 py-2 text-[12px] font-semibold text-[#2e3239] hover:bg-[#F7FAFC]'
                      }
                      style={{ background: formData.rowType === item ? SOFT : 'white' }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div
              className="rounded-[8px] border border-[rgba(178,255,229,1)] px-3 py-3 text-xs font-medium text-[#2e3239]"
              style={{ background: SOFT }}
            >
              Select configuration : {configLine}
            </div>

            {/* Configuration input (only where shown in images) */}
         
              <div className="space-y-2">
                <Label className="text-[13px] font-semibold text-[#2e3239]">Configuration</Label>
                <Input
                  className={controlClass}
                  placeholder="Type Configuration"
                  value={formData.configuration}
                  onChange={(e) => setField('configuration', e.target.value)}
                />
              </div>
           
          </section>

          {/* Strong Preferences (match images section title) */}
          <section className="space-y-4">
            <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
              Strong Preferences*
            </div>

            {/* Sale: 3 status groups (like buyer images) */}
            {isSale && (
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Occupancy Status',
                    key: 'occupancy',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'vacant', t: 'Vacant' },
                      { v: 'tenanted', t: 'Tenanted' },
                    ],
                  },
                  {
                    title: 'Completion Status',
                    key: 'completion',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'ready', t: 'Ready' },
                      { v: 'off-plan', t: 'Off- plan' },
                    ],
                  },
                  {
                    title: 'Ownership Tenure',
                    key: 'ownership',
                    values: [
                      { v: 'all', t: 'All' },
                      { v: 'freehold', t: 'Freehold' },
                      { v: 'leasehold', t: 'Leasehold' },
                    ],
                  },
                ].map((group) => (
                  <div key={group.title}>
                    <Label className="mb-2 text-xs font-semibold text-[#5b6472]">{group.title}</Label>
                    <div className="grid grid-cols-3 rounded-[8px] border border-[#CAD5E2] bg-[#F1F5F9] p-1">
                      {group.values.map((item) => {
                        //eslint-disable-next-line
                        const active = (formData.propertyStatus as any)[group.key] === item.v;
                        return (
                          <button
                            key={item.v}
                            type="button"
                            onClick={() =>
                              setField('propertyStatus', {
                                ...formData.propertyStatus,
                                [group.key]: item.v,
                              } as PropertyStatus)
                            }
                            className="rounded-[8px] px-2 py-2 text-xs font-semibold"
                            style={{ background: active ? 'white' : 'transparent' }}
                          >
                            {item.t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Beds/Baths (residential) */}
            {isResidential && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>
                    Bedrooms (Min) *
                    <BadgeInfo className="h-4 w-4 text-[#7b8492]" />
                  </Label>
                  <Select value={formData.bedrooms} onValueChange={(v) => setField('bedrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8-plus">8+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>
                    Bathrooms (Min) *
                    <BadgeInfo className="h-4 w-4 text-[#7b8492]" />
                  </Label>
                  <Select value={formData.bathrooms} onValueChange={(v) => setField('bathrooms', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6-plus">6+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </section>

          {/* Additional Details */}
          <section className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div>
                <Label className={labelClass}>Built-Up Area(BUA)</Label>
                <Input
                  className={controlClass}
                  placeholder="Enter area"
                  value={formData.bua}
                  onChange={(e) => setField('bua', e.target.value)}
                />
                <div className="mt-2 inline-flex gap-2">
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqft')}
                    className={formData.buaUnit === 'sqft' ? chipOn : chipOff}
                    style={{ background: formData.buaUnit === 'sqft' ? PRIMARY : undefined }}
                  >
                    Sq. Ft
                  </button>
                  <button
                    type="button"
                    onClick={() => setField('buaUnit', 'sqm')}
                    className={formData.buaUnit === 'sqm' ? chipOn : chipOff}
                    style={{ background: formData.buaUnit === 'sqm' ? PRIMARY : undefined }}
                  >
                    Sq. M
                  </button>
                </div>
              </div>

              <div>
                <Label className={labelClass}>Plot Size</Label>
                <Input
                  className={controlClass}
                  placeholder="Enter size"
                  value={formData.plotSize}
                  onChange={(e) => setField('plotSize', e.target.value)}
                />
              </div>

              <div>
                <Label className={labelClass}>
                  Parking Spaces (Min)
                  <BadgeInfo className="h-4 w-4 text-[#7b8492]" />
                </Label>
                <Select value={formData.parkingSpaces} onValueChange={(v) => setField('parkingSpaces', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="6-plus">6+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Parking Type*</Label>
                <Select value={formData.parkingType} onValueChange={(v) => setField('parkingType', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="covered">Covered</SelectItem>
                    <SelectItem value="uncovered">Uncovered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className={`grid gap-4 ${isRent ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
              <div>
                <Label className={labelClass}>Must-Have Features</Label>
                <Select value={formData.features} onValueChange={(v) => setField('features', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="bathtub">Bathtub</SelectItem>
                    <SelectItem value="balcony">Balcony</SelectItem>
                    <SelectItem value="pet-allowed">Pet allowed</SelectItem>
                    <SelectItem value="chiller-free">Chiller Free</SelectItem>
                    <SelectItem value="maids-room">Maid&apos;s Room</SelectItem>
                    <SelectItem value="study">Study</SelectItem>
                    <SelectItem value="vastu-compliant">Vastu Compliant</SelectItem>
                    <SelectItem value="type">Type</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {isRent ? (
                <>
                  <div>
                    <Label className={labelClass}>Furnishing</Label>
                    <Select value={formData.furnishing} onValueChange={(v) => setField('furnishing', v)}>
                      <SelectTrigger className={controlClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                        <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
                        <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                        <SelectItem value="unfurnished">Unfurnished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className={labelClass}>Property condition</Label>
                    <Select value={formData.propertyCondition} onValueChange={(v) => setField('propertyCondition', v)}>
                      <SelectTrigger className={controlClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="brand-new">Brand new</SelectItem>
                        <SelectItem value="nearly-new">Nearly new</SelectItem>
                        <SelectItem value="fully-renovated">Fully Renovated</SelectItem>
                      <SelectItem value="upgraded">Upgraded</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="needs-updating">Needs Updating</SelectItem>
                      <SelectItem value="original">Original</SelectItem>
                      <SelectItem value="type-property-age">Type property age</SelectItem>
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className={labelClass}>Cheque Preference (Max Acceptable)*</Label>
                    <Select value={formData.chequePreference} onValueChange={(v) => setField('chequePreference', v)}>
                      <SelectTrigger className={controlClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                        <SelectItem value="1-cheque">1 Cheque</SelectItem>
                        <SelectItem value="2-cheques">2 Cheques</SelectItem>
                        <SelectItem value="3-cheques">3 Cheques</SelectItem>
                        <SelectItem value="4-cheques">4 Cheques</SelectItem>
                        <SelectItem value="6-cheques">6 Cheques</SelectItem>
                        <SelectItem value="12-cheques">12 Cheques</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Label className={labelClass}>Property condition</Label>
                    <Select value={formData.propertyCondition} onValueChange={(v) => setField('propertyCondition', v)}>
                      <SelectTrigger className={controlClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="brand-new">Brand new</SelectItem>
                        <SelectItem value="nearly-new">Nearly new</SelectItem>
                        <SelectItem value="fully-renovated">Fully Renovated</SelectItem>
                      <SelectItem value="upgraded">Upgraded</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                      <SelectItem value="needs-updating">Needs Updating</SelectItem>
                      <SelectItem value="original">Original</SelectItem>
                      <SelectItem value="type-property-age">Type property age</SelectItem>
                    </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className={labelClass}>Furnishing</Label>
                    <Select value={formData.furnishing} onValueChange={(v) => setField('furnishing', v)}>
                      <SelectTrigger className={controlClass}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                        <SelectItem value="fully-furnished">Fully Furnished</SelectItem>
                        <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                        <SelectItem value="unfurnished">Unfurnished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClass}>Choose Amenities</Label>
                <Select value={formData.amenities} onValueChange={(v) => setField('amenities', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="building-community">Building/community</SelectItem>
                    <SelectItem value="unit-level">Unit-level Amenities</SelectItem>
                    <SelectItem value="private-amenities">Private Amenities</SelectItem>
                    <SelectItem value="type-amenities">Type amenities</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className={labelClass}>Viewing option</Label>
                <Select value={formData.viewingOption} onValueChange={(v) => setField('viewingOption', v)}>
                  <SelectTrigger className={controlClass}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                    <SelectItem value="floor-plans">Floor Plans</SelectItem>
                    <SelectItem value="360-tour">360 Tour</SelectItem>
                    <SelectItem value="property-tour">Property Tour</SelectItem>
                    <SelectItem value="live-viewing">Live Viewing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Buyer Profile (Sale) */}
          {isSale && (
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                Buyer Profile*
              </div>

              <div>
                <Label className={labelClass}>Finance Method *</Label>
                <div className="grid gap-3 md:grid-cols-3">
                  {[
                    { k: 'cash', t: 'Cash Buyer' },
                    { k: 'mortgage', t: 'Mortgage Buyer' },
                    { k: 'payment-plan', t: 'Payment Plan ( Off-plan )' },
                  ].map((x) => (
                    <label
                      key={x.k}
                      className="flex items-center gap-2 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-3 text-[12px] font-medium text-[#2e3239]"
                    >
                      <input
                        type="checkbox"
                        checked={formData.financeMethod.includes(x.k)}
                        onChange={() =>
                          setField(
                            'financeMethod',
                            formData.financeMethod.includes(x.k)
                              ? formData.financeMethod.filter((v) => v !== x.k)
                              : [...formData.financeMethod, x.k]
                          )
                        }
                        className="h-4 w-4 rounded border-[#CAD5E2] accent-[#7FFFD4]"
                      />
                      {x.t}
                    </label>
                  ))}
                </div>
              </div>

              {isCommercial && (
                <div>
                  <Label className={labelClass}>Key Money*</Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    {[
                      { v: 'any', t: 'Any' },
                      { v: 'no', t: 'No key money' },
                      { v: 'yes', t: 'Key money acceptable' },
                    ].map((x) => (
                      <label key={x.v} className="flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
                        <input
                          type="radio"
                          name="key-money-sale"
                          checked={formData.keyMoney === x.v}
                          onChange={() => setField('keyMoney', x.v as FormData['keyMoney'])}
                          className="h-4 w-4 accent-[#7FFFD4]"
                        />
                        {x.t}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Target Closing Date*</Label>
                  <Select value={formData.targetClosingDate} onValueChange={(v) => setField('targetClosingDate', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="q1-2026">Q1 2026</SelectItem>
                      <SelectItem value="q2-2026">Q2 2026</SelectItem>
                      <SelectItem value="q3-2026">Q3 2026</SelectItem>
                      <SelectItem value="q4-2026">Q4 2026</SelectItem>
                      <SelectItem value="jan-2026">January 2026</SelectItem>
                      <SelectItem value="feb-2026">February 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Urgency Level*</Label>
                  <Select value={formData.urgencyLevelSale} onValueChange={(v) => setField('urgencyLevelSale', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="actively-looking">Actively Looking</SelectItem>
                      <SelectItem value="within-30-days">With in 30 Days</SelectItem>
                      <SelectItem value="flexible-timeline">Flexible Time-line</SelectItem>
                      <SelectItem value="exploring-option">Exploring option</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* Optional Profile Information (Rent) */}
          {isRent && (
            <section className="space-y-4">
              <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
                Optional Profile Information*
              </div>

              {isCommercial && (
                <div>
                  <Label className={labelClass}>Key Money*</Label>
                  <div className="grid grid-cols-3 gap-3 rounded-[8px] border border-[#CAD5E2] bg-white px-3 py-2">
                    {[
                      { v: 'any', t: 'Any' },
                      { v: 'no', t: 'No key money' },
                      { v: 'yes', t: 'Key money acceptable' },
                    ].map((x) => (
                      <label key={x.v} className="flex items-center gap-2 text-[12px] font-medium text-[#2e3239]">
                        <input
                          type="radio"
                          name="key-money-rent"
                          checked={formData.keyMoney === x.v}
                          onChange={() => setField('keyMoney', x.v as FormData['keyMoney'])}
                          className="h-4 w-4 accent-[#7FFFD4]"
                        />
                        {x.t}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Tenant Description*</Label>
                  <Input
                    className={controlClass}
                    placeholder="e.g. British couple, family of 4"
                    value={formData.tenantPreference}
                    onChange={(e) => setField('tenantPreference', e.target.value)}
                  />
                </div>

                <div>
                  <Label className={labelClass}>Preferred Lease Length*</Label>
                  <Select value={formData.preferredLeaseLength} onValueChange={(v) => setField('preferredLeaseLength', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="less-than-1-year">less then 1 year ( short term )</SelectItem>
                      <SelectItem value="1-year">1 Year ( standard )</SelectItem>
                      <SelectItem value="2-years">2 Years</SelectItem>
                      <SelectItem value="3-years">3 Years</SelectItem>
                      <SelectItem value="4-years-plus">4 Years +</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label className={labelClass}>Move in Date*</Label>
                  <Select value={formData.moveInDate} onValueChange={(v) => setField('moveInDate', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="q1-2026">Q1 2026</SelectItem>
                      <SelectItem value="q2-2026">Q2 2026</SelectItem>
                      <SelectItem value="q3-2026">Q3 2026</SelectItem>
                      <SelectItem value="q4-2026">Q4 2026</SelectItem>
                      <SelectItem value="jan-2026">January 2026</SelectItem>
                      <SelectItem value="feb-2026">February 2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className={labelClass}>Urgency Level*</Label>
                  <Select value={formData.urgencyLevelRent} onValueChange={(v) => setField('urgencyLevelRent', v)}>
                    <SelectTrigger className={controlClass}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-[8px] border border-[#CAD5E2] bg-white">
                      <SelectItem value="actively-looking">Actively Looking</SelectItem>
                      <SelectItem value="within-30-days">With in 30 Days</SelectItem>
                      <SelectItem value="flexible-timeline">Flexible Time-line</SelectItem>
                      <SelectItem value="exploring-option">Exploring option</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </section>
          )}

          {/* Additional Keywords */}
          <section className="space-y-2">
            <Label className={labelClass}>Additional Keywords or Requirements*</Label>
            <Input
              className={controlClass}
              placeholder={isSale ? 'e.g. High floor apartment, sea view, near metro' : 'e.g. near metro'}
              value={formData.keywords}
              onChange={(e) => setField('keywords', e.target.value)}
            />
          </section>

          {/* Contact Details */}
          <section className="space-y-3">
            <div className={`flex items-center gap-2 ${sectionTitleClass}`}>
              <span className="inline-block h-2 w-2 rounded-full" style={{ background: PRIMARY }} />
              Contact Details
            </div>

            <Input className={controlClass} placeholder="Your Full Name" value={formData.name} onChange={(e) => setField('name', e.target.value)} />
            <Input className={controlClass} placeholder="Your Email" type="email" value={formData.email} onChange={(e) => setField('email', e.target.value)} />
            <Input className={controlClass} placeholder="Your Number" value={formData.phone} onChange={(e) => setField('phone', e.target.value)} />

            <Textarea
              placeholder="Enter your notes here"
              value={formData.notes}
              onChange={(e) => setField('notes', e.target.value)}
              className="min-h-28 rounded-[8px] border border-[#CAD5E2] bg-white shadow-sm placeholder:text-[#A0A7B2] focus-visible:ring-2 focus-visible:ring-[rgba(178,255,229,0.85)]"
            />
          </section>

          {/* Commission Notice (same look as images) */}
          <section className="rounded-[8px] border border-[#f1d291] bg-[#fff7df] p-4">
            <div className="flex items-start gap-2 text-[#A65F00]">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <p className="text-[12px]">
                <span className="font-semibold">Commission Notice:</span> {commissionNote}
              </p>
            </div>
          </section>

          {/* Bottom buttons */}
          <div className="grid gap-4 pb-2 md:grid-cols-2">
            <button
              type="button"
              className="h-10 rounded-[8px] border border-[#CAD5E2] bg-[#D7D7D7] text-[13px] font-semibold text-[#2e3239]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex h-10 items-center justify-center gap-3 rounded-[8px] text-[13px] font-semibold text-[#1f2a37] shadow-sm"
              style={{ background: PRIMARY }}
            >
              <Send className="h-4 w-4" />
              Post Requirements
            </button>
          </div>

          </form>
        </div>
      </div>
    </div>
  );
}
