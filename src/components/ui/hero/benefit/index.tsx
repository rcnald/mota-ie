import { ReactNode } from 'react'
import { cn, sliptText } from '../../../../lib/utils'

interface BenefitIconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface BenefitTitleProps {
  children: string
}

interface BenefitDescriptionProps {
  children: ReactNode
}

type BenefitChildren =
  | BenefitIconProps
  | BenefitTitleProps
  | BenefitDescriptionProps

interface BenefitItemProps {
  children: React.ReactElement<BenefitChildren>[]
}

interface BenefitProps {
  className?: string
  children: ReactNode
}

export function Benefit({ className, children }: BenefitProps) {
  return (
    <ul
      className={cn(
        'flex flex-col flex-wrap justify-center gap-20 text-center md:flex-row lg:justify-between lg:text-start',
        className,
      )}
    >
      {children}
    </ul>
  )
}

export function BenefitItem({ children }: BenefitItemProps) {
  return (
    <li className="group flex flex-[1_1_300px] flex-col items-center gap-4 lg:items-start">
      {children}
    </li>
  )
}

export function BenefitIcon({ icon: Icon }: BenefitIconProps) {
  return (
    <span className="flex w-fit rounded-[0.625rem] p-5 group-odd:bg-accent-900 group-odd:text-neutral-50 group-even:bg-brand-400 group-even:text-brand-200">
      <Icon width={40} height={40} aria-hidden />
    </span>
  )
}

export function BenefitTitle({ children }: BenefitTitleProps) {
  const { textLastWord, textWithOutLastWord } = sliptText(children)

  return (
    <h2 className="text-xl font-bold text-neutral-950">
      {textWithOutLastWord}
      <strong className="font-bold text-brand-400">{textLastWord}</strong>
    </h2>
  )
}

export function BenefitDescription({ children }: BenefitDescriptionProps) {
  return (
    <p className="max-w-[300px] text-xl font-medium text-accent-800">
      {children}
    </p>
  )
}
