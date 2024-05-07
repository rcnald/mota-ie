import { PropsWithChildren } from 'react'

interface MenuProps extends PropsWithChildren {}
interface MenuTriggerProps extends PropsWithChildren {}
interface MenuContentProps extends PropsWithChildren {}
interface MenuItemProps {
  sectionId: string
  content: string
}

export function Menu({ children }: MenuProps) {
  return <nav className="flex">{children}</nav>
}

export function MenuTrigger({ children }: MenuTriggerProps) {
  return <button>{children}</button>
}

export function MenuContent({ children }: MenuContentProps) {
  return <ul className="hidden items-center gap-8 sm:flex">{children}</ul>
}

export function MenuItem({ content, sectionId }: MenuItemProps) {
  return (
    <li className="text-base font-semibold uppercase leading-5 text-neutral-300 transition-all focus-within:text-brand-400 hover:text-brand-400">
      <a href={`#${sectionId}`}>{content}</a>
    </li>
  )
}
