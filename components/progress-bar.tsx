interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="w-full max-w-md mt-8">
      <div className="flex justify-between text-sm mb-2">
        <div className="text-muted-foreground">{current}/{total}</div>
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-full">
        <div 
          className="h-1 bg-[#00FF7F] rounded-full transition-all duration-300"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

