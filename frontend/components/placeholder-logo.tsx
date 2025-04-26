import { Code2 } from "lucide-react"

export function PlaceholderLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Code2 className="h-6 w-6" />
      <span className="font-bold text-lg">Sponsor</span>
    </div>
  )
}
