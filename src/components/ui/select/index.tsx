import {
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
interface SelectContextType {
  isOpen: boolean
  selectedValue: { display: string; value: string }
  handleTriggerClick: () => void
  handleValueChange: (e: MouseEvent<HTMLButtonElement>) => void
}

const SelectContext = createContext({} as SelectContextType)

interface SelectProps {
  value?: string
  onValueChange?: () => void
  children: ReactNode
}

interface SelectItemProps extends PropsWithChildren {
  value: string
}
interface SelectTriggerProps extends PropsWithChildren {}
interface SelectValueProps extends PropsWithChildren {
  placeholder: string
  children?: ReactNode
}

interface ArrowKeysType {
  [key: string]: () => void
}

export function Select({ children }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<{
    display: string
    value: string
  }>({ display: '', value: '' })

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleValueChange = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const display = e.currentTarget.textContent ?? ''
    const value = e.currentTarget.getAttribute('data-value') ?? ''

    setSelectedValue({ display, value })
  }

  return (
    <SelectContext.Provider
      value={{ isOpen, selectedValue, handleTriggerClick, handleValueChange }}
    >
      {children}
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ children }: SelectTriggerProps) {
  const { handleTriggerClick } = useContext(SelectContext)
  return (
    <button type="button" onClick={handleTriggerClick}>
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const { selectedValue } = useContext(SelectContext)
  return (
    <span>
      {selectedValue.display === '' ? placeholder : selectedValue.display}
    </span>
  )
}

export function SelectContent({ children }: PropsWithChildren) {
  const { selectedValue } = useContext(SelectContext)
  const selectContentRef = useRef<HTMLUListElement>(null)
  const activeOption = useRef(-1)

  useEffect(() => {
    const selectContentRefInsideEffect = selectContentRef

    if (selectContentRef.current) {
      const contentItems = Array.from(
        selectContentRef.current.getElementsByTagName('button'),
      )
      const selectedItem: HTMLButtonElement | null =
        selectContentRef.current.querySelector(
          `[data-value="${selectedValue.value}"]`,
        )

      const selectedItemIndex = contentItems.findIndex(
        (item) => item === selectedItem,
      )

      activeOption.current = selectedItemIndex

      if (contentItems[activeOption.current]) {
        contentItems[activeOption.current].focus()
      }
    }

    function handleSelectKeyDown(e: globalThis.KeyboardEvent) {
      if (selectContentRef.current) {
        const contentOptions =
          selectContentRef.current.getElementsByTagName('button')

        const ArrowKeys: ArrowKeysType = {
          ArrowDown() {
            if (activeOption.current < 0) {
              activeOption.current = contentOptions.length - 1
              return
            }

            if (activeOption.current < contentOptions.length - 1) {
              activeOption.current++
            }
          },
          ArrowUp() {
            if (activeOption.current < 0) {
              activeOption.current = 0
              return
            }
            if (activeOption.current > 0) {
              activeOption.current--
            }
          },
        }

        if (ArrowKeys[e.key]) {
          e.preventDefault()
          ArrowKeys[e.key]()

          if (contentOptions[activeOption.current]) {
            contentOptions[activeOption.current].focus()
          }
        }
      }
    }

    function handleSelectItemMouseOver(e: globalThis.MouseEvent) {
      if (selectContentRef.current) {
        const contentOptions = Array.from(
          selectContentRef.current.getElementsByTagName('button'),
        )

        const index = contentOptions.indexOf(e.target as HTMLButtonElement)
        activeOption.current = index

        if (contentOptions[activeOption.current]) {
          contentOptions[activeOption.current].focus()
        }
      }
    }

    document.addEventListener('keydown', handleSelectKeyDown)
    selectContentRefInsideEffect.current?.addEventListener(
      'mouseover',
      handleSelectItemMouseOver,
    )
    return () => {
      document.removeEventListener('keydown', handleSelectKeyDown)
      selectContentRefInsideEffect.current?.removeEventListener(
        'mouseover',
        handleSelectItemMouseOver,
      )
    }
  }, [])

  useEffect(() => {
    function handleSelectKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === 'Tab') e.preventDefault()
    }

    document.addEventListener('keydown', handleSelectKeyDown)

    return () => document.removeEventListener('keydown', handleSelectKeyDown)
  })

  return <ul ref={selectContentRef}>{children}</ul>
}

export function SelectItem({ value, children }: SelectItemProps) {
  const { handleValueChange } = useContext(SelectContext)
  return (
    <li>
      <button data-value={value} onClick={handleValueChange}>
        {children}
      </button>
    </li>
  )
}
