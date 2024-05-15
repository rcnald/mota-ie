import {
  MouseEvent,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type handleSelectClickType = (e: MouseEvent<HTMLButtonElement>) => void

interface selectedValueType {
  displayedValue: string
  value: string
}

interface SelectContextType {
  selectContentId: string
  selectLabelId: string
  isSelectOpen: boolean
  selectedItemValues: selectedValueType
  selectTriggerRef: React.RefObject<HTMLButtonElement>
  selectContentRef: React.RefObject<HTMLUListElement>
  handleItemClick: handleSelectClickType
  handleTriggerClick: () => void
}

interface SelectProps {
  value?: string
  children: ReactNode
  onValueChange?: () => void
}

interface SelectItemProps extends PropsWithChildren {
  value: string
}

interface SelectValueProps extends PropsWithChildren {
  placeholder: string
}

interface ArrowKeysType {
  [key: string]: () => void
}

const SelectContext = createContext({} as SelectContextType)

export function Select({ children }: SelectProps) {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [selectedItemValues, setSelectedItemValues] =
    useState<selectedValueType>({
      displayedValue: '',
      value: '',
    })
  const selectTriggerRef = useRef<HTMLButtonElement>(null)
  const selectContentRef = useRef<HTMLUListElement>(null)
  const selectContentId = useId()
  const selectLabelId = useId()

  const handleTriggerClick = () => {
    setIsSelectOpen((prev) => !prev)
  }

  const handleItemClick: handleSelectClickType = (e) => {
    e.preventDefault()

    const displayedValue = e.currentTarget.textContent ?? ''
    const value = e.currentTarget.getAttribute('data-value') ?? ''

    setSelectedItemValues({ displayedValue, value })
    setIsSelectOpen(false)

    selectTriggerRef.current?.focus()
  }

  useEffect(() => {
    const handleSelectKeyDown = (e: globalThis.KeyboardEvent) => {
      if (isSelectOpen) {
        switch (e.key) {
          case 'Tab':
            e.preventDefault()
            break
          case 'Escape':
            setIsSelectOpen(false)
            selectTriggerRef.current?.focus()
            break
        }
      }
    }

    document.addEventListener('keydown', handleSelectKeyDown)

    return () => document.removeEventListener('keydown', handleSelectKeyDown)
  }, [isSelectOpen])

  useEffect(() => {
    if (selectTriggerRef.current && selectContentRef.current && isSelectOpen) {
      const {
        bottom: contentDistanceToClientTop,
        left: contentDistanceToClientLeft,
        height: contentHeight,
      } = selectTriggerRef.current.getBoundingClientRect()

      const isTriggerInSecondClientHeightHalf =
        window.innerHeight / contentDistanceToClientTop < 2

      selectContentRef.current.style.top = `${contentDistanceToClientTop}px`
      selectContentRef.current.style.left = `${contentDistanceToClientLeft}px`
      selectContentRef.current.style.transform = ''

      if (isTriggerInSecondClientHeightHalf) {
        selectContentRef.current.style.transform = `translateY(calc(-100% - ${contentHeight}px))`
      }
    }
  }, [isSelectOpen])

  useEffect(() => {
    const closeSelectOnBlur = (e: globalThis.UIEvent) => {
      const isTargetSelectTrigger = e.target === selectTriggerRef.current
      const isTargetSelectContent = e.target === selectContentRef.current

      if (isTargetSelectTrigger || isTargetSelectContent) return

      setIsSelectOpen(false)

      selectTriggerRef.current?.focus()
    }

    window.addEventListener('resize', closeSelectOnBlur)
    window.addEventListener('click', closeSelectOnBlur)

    return () => {
      window.removeEventListener('resize', closeSelectOnBlur)
      window.removeEventListener('click', closeSelectOnBlur)
    }
  }, [])

  return (
    <SelectContext.Provider
      value={{
        selectLabelId,
        selectContentId,
        isSelectOpen,
        selectedItemValues,
        selectTriggerRef,
        selectContentRef,
        handleTriggerClick,
        handleItemClick,
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ children }: PropsWithChildren) {
  const {
    handleTriggerClick,
    selectTriggerRef,
    isSelectOpen,
    selectContentId,
  } = useContext(SelectContext)

  return (
    <button
      type="button"
      role="combobox"
      aria-controls={selectContentId}
      aria-expanded={isSelectOpen}
      onClick={handleTriggerClick}
      ref={selectTriggerRef}
    >
      {children}
    </button>
  )
}

export function SelectValue({ placeholder }: SelectValueProps) {
  const { selectedItemValues } = useContext(SelectContext)
  const selectedDisplayValue = selectedItemValues.displayedValue || placeholder
  const selectedValue = selectedItemValues.value || null

  return (
    <span data-value={selectedValue} className="pointer-events-none">
      {selectedDisplayValue}
    </span>
  )
}

export function SelectContent({ children }: PropsWithChildren) {
  const {
    selectContentRef,
    selectedItemValues,
    isSelectOpen,
    selectContentId,
    selectLabelId,
  } = useContext(SelectContext)
  const itemToFocusIndex = useRef(-1)
  const selectState = isSelectOpen ? 'open' : 'closed'

  useEffect(() => {
    const selectContentElement = selectContentRef.current

    if (selectContentElement && isSelectOpen) {
      const contentItems = [
        ...selectContentElement.getElementsByTagName('button'),
      ]
      const contentLastItemIndex = contentItems.length - 1
      const selectedItem =
        selectContentElement.querySelector<HTMLButtonElement>(
          `[data-value="${selectedItemValues.value}"]`,
        )
      const selectedItemIndex = contentItems.findIndex(
        (item) => item === selectedItem,
      )

      const ArrowKeysActions: ArrowKeysType = {
        ArrowDown() {
          if (itemToFocusIndex.current < contentLastItemIndex) {
            itemToFocusIndex.current++
          }
        },
        ArrowUp() {
          if (itemToFocusIndex.current > 0) {
            itemToFocusIndex.current--
          }
        },
      }

      const focusCurrentItem = () => {
        if (contentItems[itemToFocusIndex.current]) {
          contentItems[itemToFocusIndex.current].focus()
        }
      }

      const handleContentKeyDown = (e: globalThis.KeyboardEvent) => {
        if (ArrowKeysActions[e.key]) {
          e.preventDefault()
          ArrowKeysActions[e.key]()
        }

        focusCurrentItem()
      }

      const handleItemMouseOver = (e: globalThis.MouseEvent) => {
        const index = [...contentItems].indexOf(e.target as HTMLButtonElement)
        itemToFocusIndex.current = index < 0 ? itemToFocusIndex.current : index

        focusCurrentItem()
      }

      itemToFocusIndex.current = selectedItemIndex < 0 ? 0 : selectedItemIndex

      focusCurrentItem()

      document.addEventListener('keydown', handleContentKeyDown)
      selectContentElement.addEventListener('mouseover', handleItemMouseOver)

      return () => {
        document.removeEventListener('keydown', handleContentKeyDown)
        selectContentElement.removeEventListener(
          'mouseover',
          handleItemMouseOver,
        )
      }
    }
  }, [selectedItemValues, isSelectOpen, selectContentRef])

  return (
    <>
      {createPortal(
        isSelectOpen ? (
          <ul
            id={selectContentId}
            ref={selectContentRef}
            data-state={selectState}
            aria-labelledby={selectLabelId}
            className="fixed inset-0 z-50 h-fit w-fit data-[state=open]:block data-[state=closed]:hidden"
          >
            {children}
          </ul>
        ) : null,
        document.body,
      )}
    </>
  )
}

export function SelectLabel({ children }: PropsWithChildren) {
  const { selectLabelId } = useContext(SelectContext)

  return <span id={selectLabelId}>{children}</span>
}

export function SelectItem({ value, children }: SelectItemProps) {
  const { handleItemClick } = useContext(SelectContext)

  return (
    <li>
      <button data-value={value} onClick={handleItemClick}>
        {children}
      </button>
    </li>
  )
}
