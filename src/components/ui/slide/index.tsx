import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Children, useEffect, useRef, useState } from 'react'

interface SlideProps {
  slidesPerView: number
  children: React.ReactNode
}

export function Slide({ slidesPerView, children }: SlideProps) {
  const [slideItemToShowIndex, setSlideItemToShowIndex] = useState<number>(0)
  const slideRef = useRef<HTMLDivElement>(null)

  const totalSlideItems = Children.count(children)
  const totalSlideItemsToShow =
    totalSlideItems - (totalSlideItems >= slidesPerView ? slidesPerView - 1 : 0)

  const isPreviousDisabled = slideItemToShowIndex === 0
  const isNextDisabled = slideItemToShowIndex === totalSlideItemsToShow - 1

  const showNextSlideItem = () => {
    setSlideItemToShowIndex(
      (prevIndex) => (prevIndex === 0 ? 0 : prevIndex) + 1,
    )
  }

  const showPreviousSlideItem = () => {
    setSlideItemToShowIndex((prevIndex) => (prevIndex ?? 0) - 1)
  }

  useEffect(() => {
    if (slideRef.current) {
      const slideItem = slideRef.current.querySelector<HTMLElement>(
        `#slide-${slideItemToShowIndex}`,
      )
      const slideItems = [...slideRef.current.querySelectorAll('article')]

      slideItems.forEach((item) => item.removeAttribute('data-select'))

      if (slideItem) {
        slideItem.setAttribute('data-select', '')
      }

      const showSlideItem = () => {
        slideItem?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
      }

      showSlideItem()

      window.addEventListener('resize', showSlideItem)

      return () => window.removeEventListener('resize', showSlideItem)
    }
  }, [slideItemToShowIndex])

  return (
    <div>
      <div
        ref={slideRef}
        className="mx-auto flex max-w-[1440px] items-center gap-5 overflow-hidden px-4 sm:px-[20%]"
      >
        {Children.toArray(children).map((child, index) => (
          <article
            className="w-full min-w-[100%] sm:min-w-[740px] data-[select]:sm:min-w-[850px]"
            key={`slide-${index}`}
            id={`slide-${index}`}
          >
            {child}
          </article>
        ))}
      </div>

      <div className="mx-auto flex max-w-[850px] justify-between px-4">
        <button onClick={showPreviousSlideItem} disabled={isPreviousDisabled}>
          <ChevronLeft />
        </button>
        <button onClick={showNextSlideItem} disabled={isNextDisabled}>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
