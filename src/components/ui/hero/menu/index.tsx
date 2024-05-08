import React, {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useContext,
  useId,
} from 'react'

interface MenuContextType {
  labelId: string
  contentId: string
}

interface MenuProps extends PropsWithChildren {}
interface MenuTriggerProps extends PropsWithChildren {}

interface MenuLabelProps {
  children: string
}

interface MenuIconProps extends ComponentProps<'svg'> {
  className: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface MenuContentProps extends PropsWithChildren {}

interface MenuItemProps {
  sectionId: string
  content: string
}

const menuContext = createContext({} as MenuContextType)

const useMenu = () => {
  return useContext(menuContext)
}

export function Menu({ children }: MenuProps) {
  const labelId = useId()
  const contentId = useId()
  return (
    <menuContext.Provider value={{ labelId, contentId }}>
      <nav className="flex">{children}</nav>
    </menuContext.Provider>
  )
}

export function MenuLabel({ children }: MenuLabelProps) {
  const { labelId } = useMenu()
  return (
    <span id={labelId} className="sr-only">
      {children}
    </span>
  )
}

export function MenuTrigger({ children }: MenuTriggerProps) {
  const { contentId } = useMenu()
  return (
    <button aria-controls={contentId} aria-expanded={false}>
      {children}
    </button>
  )
}

export function MenuIcon({ className, icon: Icon }: MenuIconProps) {
  return <Icon className={className} aria-hidden />
}

export function MenuContent({ children }: MenuContentProps) {
  const { labelId, contentId } = useMenu()
  return (
    <ul
      role="dialog"
      id={contentId}
      aria-labelledby={labelId}
      className="hidden items-center gap-8 sm:flex"
    >
      {children}
    </ul>
  )
}

export function MenuItem({ content, sectionId }: MenuItemProps) {
  return (
    <li className="text-base font-semibold uppercase leading-5 text-neutral-300 transition-all focus-within:text-brand-400 hover:text-brand-400">
      <a href={`#${sectionId}`}>{content}</a>
    </li>
  )
}
