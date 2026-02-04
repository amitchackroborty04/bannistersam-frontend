import { Dot } from 'lucide-react'

export function BadgePill({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-accent-alt bg-secondary">
      <Dot className="h-4 w-4 fill-accent text-accent" />
      <span className="text-sm font-medium text-accent-alt">{text}</span>
    </div>
  )
}
