import { ComponentProps } from 'react'
import { cn } from '../../../lib/utils'

interface ButtonProps extends ComponentProps<'button'> {
  className?: string
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex w-fit items-center justify-center gap-4 rounded-lg bg-brand-400 px-8 py-5 text-lg font-bold leading-7 text-neutral-50 transition-all duration-300 hover:animate-none hover:bg-accent-900 focus:animate-none focus:bg-accent-900',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
