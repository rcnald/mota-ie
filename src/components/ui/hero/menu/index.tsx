import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import React, {
  ComponentProps,
  PropsWithChildren,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

interface MenuContextType {
  labelId: string
  contentId: string
  isOpen: boolean
  toggleIsOpen: () => void
}

interface MenuProps extends PropsWithChildren {
  open?: boolean
  onOpenChange?: () => boolean
}
interface MenuTriggerProps extends PropsWithChildren {}
interface MenuCloseProps extends PropsWithChildren {
  className?: string
}

interface MenuLabelProps {
  children: string
}

interface MenuIconProps extends ComponentProps<'svg'> {
  className: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

interface MenuContentProps extends PropsWithChildren {}
interface MenuGroupProps extends PropsWithChildren {}

interface MenuItemProps {
  sectionId: string
  content: string
}

const menuContext = createContext({} as MenuContextType)

const useMenu = () => {
  return useContext(menuContext)
}

export function Menu({ children, open = false }: MenuProps) {
  const [isOpen, setIsOpen] = useState(open)
  const labelId = useId()
  const contentId = useId()

  const toggleIsOpen = () => {
    setIsOpen((prev) => {
      !prev ? disablePageScroll() : enablePageScroll()

      return !prev
    })
  }

  return (
    <menuContext.Provider value={{ labelId, contentId, toggleIsOpen, isOpen }}>
      <nav className="flex">{children}</nav>
    </menuContext.Provider>
  )
}

export function MenuLabel({ children }: MenuLabelProps) {
  const { labelId } = useMenu()

  return (
    <span id={labelId} className="text-3xl font-bold text-accent-900">
      {children}
    </span>
  )
}

export function MenuTrigger({ children }: MenuTriggerProps) {
  const { contentId, toggleIsOpen, isOpen } = useMenu()
  return (
    <button
      aria-controls={contentId}
      aria-expanded={isOpen}
      onClick={toggleIsOpen}
    >
      {children}
    </button>
  )
}

export function MenuClose({ className, children }: MenuCloseProps) {
  const { contentId, toggleIsOpen } = useMenu()
  return (
    <button
      aria-controls={contentId}
      onClick={toggleIsOpen}
      className={cn('', className)}
    >
      <X />
      {children}
    </button>
  )
}

export function MenuIcon({ className, icon: Icon }: MenuIconProps) {
  return <Icon className={className} aria-hidden />
}

export function MenuContent({ children }: MenuContentProps) {
  const { labelId, contentId, isOpen } = useMenu()
  const state = isOpen ? 'open' : 'closed'

  return (
    <div
      role="dialog"
      id={contentId}
      aria-labelledby={labelId}
      data-state={state}
      className="group inset-0 z-50 flex flex-col gap-12 data-[state=open]:animate-in data-[state=open]:slide-in-from-top max-sm:data-[state=open]:fixed max-sm:data-[state=open]:bg-neutral-50 max-sm:data-[state=open]:py-16"
    >
      {children}
    </div>
  )
}

export function MenuGroup({ children }: MenuGroupProps) {
  return (
    <ul className="flex items-center gap-8 max-sm:hidden max-sm:group-data-[state=open]:flex max-sm:group-data-[state=open]:flex-col max-sm:group-data-[state=open]:gap-0">
      {children}
    </ul>
  )
}

export function MenuItem({ content, sectionId }: MenuItemProps) {
  return (
    <li className="w-full text-base font-semibold uppercase leading-5 text-neutral-300 transition-all focus-within:text-brand-400 hover:text-brand-400 max-sm:group-data-[state=open]:focus-within:border-l-2 max-sm:group-data-[state=open]:focus-within:border-solid max-sm:group-data-[state=open]:focus-within:border-brand-400 max-sm:group-data-[state=open]:focus-within:bg-brand-400/10 max-sm:group-data-[state=open]:hover:border-l-2 max-sm:group-data-[state=open]:hover:border-solid max-sm:group-data-[state=open]:hover:border-brand-400 max-sm:group-data-[state=open]:hover:bg-brand-400/10">
      <a
        href={`#${sectionId}`}
        className="flex w-full  max-sm:group-data-[state=open]:px-12 max-sm:group-data-[state=open]:py-4"
      >
        {content}
      </a>
    </li>
  )
}
