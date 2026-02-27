'use client';

import { BadgeInfo } from 'lucide-react';

import { cn } from '@/lib/utils';

type InfoBadgeButtonProps = {
  onClick: () => void;
  className?: string;
  label?: string;
};

export function InfoBadgeButton({ onClick, className, label = 'Open information' }: InfoBadgeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full text-[#7b8492] transition-colors hover:text-[#4b5563]"
    >
      <BadgeInfo className={cn('h-4 w-4', className)} />
    </button>
  );
}
