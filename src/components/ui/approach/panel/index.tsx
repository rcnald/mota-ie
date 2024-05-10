import { cn } from '../../../../lib/utils'

interface PanelProps {
  src: string
  alt: string
  size: number
  className?: string
}

export function Panel({ alt, size, src, className }: PanelProps) {
  return (
    <div
      className={cn(
        "grid w-fit grid-cols-[20px_1fr_20px] grid-rows-[20px_1fr_20px] before:col-start-2 before:col-end-4 before:row-start-1 before:row-end-3 before:rounded-lg before:bg-brand-200 before:content-['']",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="col-start-1 col-end-3 row-start-2 row-end-4 rounded-lg"
      />
    </div>
  )
}
