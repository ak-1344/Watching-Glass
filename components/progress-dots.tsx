interface ProgressDotsProps {
  current: number
  total: number
}

export function ProgressDots({ current, total }: ProgressDotsProps) {
  return (
    <div className="w-full max-w-md mt-8 flex items-center gap-2">
      <div className="flex-1 flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div 
              className={`h-1 w-8 rounded-full ${
                i < current ? 'bg-[#00FF7F]' : 'bg-gray-300'
              }`}
            />
            {i < total - 1 && (
              <div className="flex-1 h-px bg-transparent" />
            )}
          </div>
        ))}
      </div>
      <span className="text-xs text-gray-500">{current}/{total}</span>
    </div>
  )
}

