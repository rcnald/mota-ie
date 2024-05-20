import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Children, useEffect, useRef } from 'react'

interface SlideProps {
  slidesPerView: number
  children: React.ReactNode
  slideItemToShowIndex: number
  onIndexIncrease: () => void
  onIndexDecrease: () => void
}

export function Slide({
  slidesPerView,
  slideItemToShowIndex,
  onIndexIncrease,
  onIndexDecrease,
  children,
}: SlideProps) {
  const slideRef = useRef<HTMLDivElement>(null)

  const totalSlideItems = Children.count(children)
  const totalSlideItemsToShow =
    totalSlideItems - (totalSlideItems >= slidesPerView ? slidesPerView - 1 : 0)

  const isPreviousActionDisabled = slideItemToShowIndex === 0
  const isNextActionDisabled =
    slideItemToShowIndex === totalSlideItemsToShow - 1

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
        className="mx-auto flex max-w-[1440px] items-center gap-5 overflow-hidden px-4 md:px-[25%]"
      >
        {Children.toArray(children).map((child, index) => (
          <article
            className="w-full min-w-[100%]  md:min-w-[650px] data-[select]:md:min-w-[740px]"
            key={`slide-${index}`}
            id={`slide-${index}`}
          >
            {child}
          </article>
        ))}
      </div>

      <div className="mx-auto flex max-w-[740px] justify-between">
        <button
          onClick={onIndexDecrease}
          disabled={isPreviousActionDisabled}
          className="text-neutral-300 hover:text-neutral-950 disabled:hover:text-neutral-300"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={onIndexIncrease}
          disabled={isNextActionDisabled}
          className="text-neutral-300 hover:text-neutral-950 disabled:hover:text-neutral-300"
        >
          <ChevronRight size={48} />
        </button>
      </div>
    </div>
  )
}
