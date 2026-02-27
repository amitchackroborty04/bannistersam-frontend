'use client';

import { Info } from 'lucide-react';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export const DEFAULT_INFO_ITEMS = [
  "Bedrooms do not include maid's room or studies.",
  'Total number of bathrooms, including powder room and cloakrooms.',
  'Separate room intended for live-in staff. Not counted as a bedroom.',
  'Separate room used as a home office or study. Not counted as a bedroom.',
  "Rental amount may differ based on the number of cheques agreed. Paying in fewer cheques can sometimes reduce the total rent, while additional cheques may increase it, subject to the landlord's terms.",
  'Indicates that the seller or agent considers the property to be Vastu compliant. Buyers are advised to verify this independently.',
  'You can select multiple locations.',
  'A one-time goodwill payment sometimes requested for commercial spaces that are fully or partially fitted and ready to operate, such as with existing fit-out, fixtures, or furniture.',
  'Original Price (OP) refers to the price agreed with the developer at the time of purchase and excludes DLD and additional fees. Asking Price should be entered as the net sale price.',
  'Original price refers to the price agreed with the developer at the time of purchase and excludes DLD and additional fees.',
  'Handover dates are indicative and subject to developer timelines.',
  'DLD amount is typically calculated at 4% of the agreed sale price. This may vary depending on the project or transaction structure. (Auto = sum calculated at 4% of asking price can be corrected or removed.)',
  "To be cleared on seller's behalf (common in distress sales).",
  'Most developers require a No Objection Certificate (NOC) before an off-plan resale can proceed. Fees and timelines vary by developer.',
  'Some off-plan resale properties may have outstanding amounts due to the developer. These are typically cleared by the seller unless otherwise agreed. This is critical for distressed / below-market logic.',
  'Payment plan terms are set by the developer and may vary by project. Buyers should confirm all schedules and timelines with the agent and developer.',
  'Allow WhatsApp contact (default OFF) [informational]. If ON -> credits deducted. When enabled, buyers can contact you directly via WhatsApp. Each WhatsApp contact uses credits, just like unlocking a lead. Keep this OFF if you prefer in-platform messages first.',
];

type InfoModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items?: string[];
  title?: string;
};

export function InfoModal({ open, onOpenChange, items, title = 'Information' }: InfoModalProps) {
  const list = items && items.length > 0 ? items : DEFAULT_INFO_ITEMS;
  const isSingle = list.length === 1;
  const contentClass = isSingle
    ? 'w-[92vw] max-w-[680px] bg-transparent border-none p-0 shadow-none'
    : 'w-[92vw] max-w-[560px] max-h-[86vh] overflow-y-auto no-scrollbar border-none bg-[#3f3f3f] p-5 text-white sm:rounded-[18px]';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={contentClass}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        {!isSingle && <div className="mb-3 text-[11px] uppercase tracking-wide text-white/60">{title}</div>}
        <div className={cn('space-y-3', isSingle && 'px-3')}>
          {list.map((item) => (
            <div
              key={item}
              className={cn(
                'flex gap-3 rounded-[14px] bg-[#5a5a5a] px-4 py-3 text-[13px] leading-snug text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]',
                isSingle && 'items-center gap-1 px-6 py-5 text-[20px] leading-snug'
              )}
            >
              <span
                className={cn(
                  'mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#4a4a4a] text-white/70',
                  isSingle && 'h-8 w-8'
                )}
              >
                <Info className={cn('h-4 w-4', isSingle && 'h-5 w-5')} />
              </span>
              <span className={cn(isSingle && 'flex-1 text-left')}>{item}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
