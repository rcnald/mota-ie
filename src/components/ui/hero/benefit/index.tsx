import { ReactNode } from 'react'
import { cn } from '../../../../lib/utils'

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
        'flex flex-col flex-wrap justify-center gap-20 text-center md:flex-row lg:text-start',
        className,
      )}
    >
      {children}
    </ul>
  )
}

export function BenefitItem({ children }: BenefitItemProps) {
  return (
    <li className="group flex max-w-[300px] flex-col items-center gap-4 lg:items-start">
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
  const titleWords = children.split(' ')
  const titleLastWordIndex = titleWords.length - 1
  const titleLastWord = titleWords[titleLastWordIndex]
  const titleWithOutLastWord = titleWords.reduce((acc, word) => {
    return titleLastWord !== word ? (acc += `${word} `) : acc
  }, '')

  return (
    <h2 className="text-xl font-bold text-neutral-950">
      {titleWithOutLastWord}
      <strong className="font-bold text-brand-400">{titleLastWord}</strong>
    </h2>
  )
}

export function BenefitDescription({ children }: BenefitDescriptionProps) {
  return <p className="text-xl font-medium text-accent-800">{children}</p>
}
