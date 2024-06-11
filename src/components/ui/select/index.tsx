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
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { cn } from '../../../lib/utils'

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
  className?: string
  children: ReactNode
}

interface SelectItemProps extends PropsWithChildren {
  value: string | number
}

interface SelectValueProps extends PropsWithChildren {
  placeholder: string
}

interface ArrowKeysType {
  [key: string]: () => void
}

const SelectContext = createContext({} as SelectContextType)

export function Select({ className, children }: SelectProps) {
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

    const closeSelectOnBlur = (e: globalThis.UIEvent) => {
      const isTargetSelectTrigger = e.target === selectTriggerRef.current
      const isTargetSelectContent = e.target === selectContentRef.current

      if (isTargetSelectTrigger || isTargetSelectContent) return

      setIsSelectOpen(false)

      selectTriggerRef.current?.focus()
    }

    const disableRootReactElementBeingClickable = () => {
      const root = document.getElementById('root')
      if (root) {
        root.style.pointerEvents = 'none'
      }
    }

    const enableRootReactElementBeingClickable = () => {
      const root = document.getElementById('root')
      if (root) {
        root.style.pointerEvents = ''
      }
    }

    const moveContentDialogCloseToTrigger = () => {
      if (selectTriggerRef.current && selectContentRef.current) {
        const {
          bottom: contentDistanceToClientTop,
          left: contentDistanceToClientLeft,
          height: contentHeight,
        } = selectTriggerRef.current.getBoundingClientRect()
        const paddingBetweenTriggerAndContent = 32
        const isTriggerInSecondClientHeightHalf =
          window.innerHeight / contentDistanceToClientTop < 2

        const showContentAboveTrigger = () => {
          if (selectContentRef.current) {
            selectContentRef.current.style.top = `${contentDistanceToClientTop - paddingBetweenTriggerAndContent - contentHeight}px`
            selectContentRef.current.style.left = `${contentDistanceToClientLeft}px`
            selectContentRef.current.style.transform = `translateY(-100%)`
          }
        }

        const showContentBelowTrigger = () => {
          if (selectContentRef.current) {
            selectContentRef.current.style.top = `${contentDistanceToClientTop + paddingBetweenTriggerAndContent}px`
            selectContentRef.current.style.left = `${contentDistanceToClientLeft}px`
            selectContentRef.current.style.transform = ''
          }
        }

        isTriggerInSecondClientHeightHalf
          ? showContentAboveTrigger()
          : showContentBelowTrigger()
      }
    }

    if (isSelectOpen) {
      window.addEventListener('resize', closeSelectOnBlur)
      window.addEventListener('click', closeSelectOnBlur)
      document.addEventListener('keydown', handleSelectKeyDown)

      moveContentDialogCloseToTrigger()
      disablePageScroll()
      disableRootReactElementBeingClickable()
    }

    return () => {
      window.removeEventListener('resize', closeSelectOnBlur)
      window.removeEventListener('click', closeSelectOnBlur)
      document.removeEventListener('keydown', handleSelectKeyDown)

      enablePageScroll()
      enableRootReactElementBeingClickable()
    }
  }, [isSelectOpen])

  return (
    <div className={cn('flex min-w-[180px] items-center', className)}>
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
    </div>
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
      className="flex w-full items-center justify-between p-4 text-xl *:pointer-events-none"
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
    <span data-value={selectedValue} className="whitespace-nowrap">
      {selectedDisplayValue}
    </span>
  )
}

export function SelectContent({ children }: PropsWithChildren) {
  const {
    selectContentRef,
    selectTriggerRef,
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
      const selectedItem =
        selectContentElement.querySelector<HTMLButtonElement>(
          `[data-value="${selectedItemValues.value}"]`,
        )
      const firstItemIndex = 0
      const selectedItemIndex = contentItems.findIndex(
        (item) => item === selectedItem,
      )

      const focusCurrentItem = () => {
        if (contentItems[itemToFocusIndex.current]) {
          contentItems[itemToFocusIndex.current].focus()
        }
      }

      itemToFocusIndex.current =
        selectedItemIndex < 0 ? firstItemIndex : selectedItemIndex

      focusCurrentItem()
    }
  }, [isSelectOpen, selectedItemValues, selectContentRef])

  useEffect(() => {
    const selectContentElement = selectContentRef.current

    if (selectContentElement && isSelectOpen) {
      const contentItems = [
        ...selectContentElement.getElementsByTagName('button'),
      ]
      const contentLastItemIndex = contentItems.length - 1

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
        const hoveredItem = e.target as HTMLButtonElement
        const hoveredItemIndex = [...contentItems].indexOf(hoveredItem)
        itemToFocusIndex.current =
          hoveredItemIndex < 0 ? itemToFocusIndex.current : hoveredItemIndex

        focusCurrentItem()
      }

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
  }, [isSelectOpen, selectContentRef])

  useEffect(() => {
    if (selectTriggerRef.current && selectContentRef.current && isSelectOpen) {
      const { width: triggerWidth } =
        selectTriggerRef.current.getBoundingClientRect()

      selectContentRef.current.style.width = `${triggerWidth}px`
    }
  }, [isSelectOpen, selectContentRef, selectTriggerRef])

  return (
    <>
      {createPortal(
        isSelectOpen ? (
          <ul
            id={selectContentId}
            ref={selectContentRef}
            data-state={selectState}
            aria-labelledby={selectLabelId}
            className="fixed inset-0 z-50 h-fit w-fit rounded-lg border border-neutral-100 bg-neutral-50 p-1 text-xl data-[state=open]:block data-[state=closed]:hidden"
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

  return (
    <span
      id={selectLabelId}
      className="w-full cursor-default px-3 py-2 text-start font-bold"
    >
      {children}
    </span>
  )
}

export function SelectItem({ value, children }: SelectItemProps) {
  const { handleItemClick } = useContext(SelectContext)

  return (
    <li className="rounded-md focus-within:bg-neutral-300">
      <button
        data-value={value}
        onClick={handleItemClick}
        className="w-full px-3 py-2 text-start"
      >
        {children}
      </button>
    </li>
  )
}
