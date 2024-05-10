import { ReactNode } from 'react'
import { sliptText } from '../../../../lib/utils'

interface SlideProps {
  position: number
  children: ReactNode
}

interface SlideTitleProps {
  children: string
}

interface SlideDescriptionProps {
  children: string
}

export function Slide({ position, children }: SlideProps) {
  const formattedPosition = String(position).padStart(2, '0')

  return (
    <article>
      <div className="flex flex-col items-center lg:w-fit">
        <span className="text-5xl leading-snug">{formattedPosition}</span>
        <hr className="flex h-14 w-fit border-r-2 border-t-0" />
      </div>
      {children}
    </article>
  )
}

export function SlideTitle({ children }: SlideTitleProps) {
  const { textLastWord, textWithOutLastWord } = sliptText(children)

  return (
    <h1 className="text-center text-5xl leading-snug lg:text-start">
      {textWithOutLastWord}
      <strong>{textLastWord}</strong>
    </h1>
  )
}

export function SlideDescription({ children }: SlideDescriptionProps) {
  return (
    <p className="text-center text-lg text-accent-800 lg:text-start">
      {children}
    </p>
  )
}
