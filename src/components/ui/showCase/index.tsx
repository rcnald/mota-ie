import { areas } from '@/lib/data'
import { sliptText } from '@/lib/utils'
import { useState } from 'react'
import { Expertises } from './expertise'
import { Slide } from './slide'

export function ShowCase() {
  const [itemIndex, setItemIndex] = useState(0)

  const increaseItemToShowIndex = () => {
    setItemIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex) + 1)
  }

  const decreaseItemToShowIndex = () => {
    setItemIndex((prevIndex) => (prevIndex ?? 0) - 1)
  }

  return (
    <section className="flex flex-col items-center gap-20 overflow-hidden">
      <div className="flex max-w-[950px] flex-col items-center text-center">
        <h1 className="text-hero-title-clamp">
          Conheça Nossas
          <strong> Especialidades </strong>
          em Detalhes
        </h1>
        <p className="max-w-[600px] text-xl text-accent-800">
          descubra mais sobre o que fazemos e como nossa expertise pode
          beneficiar você.
        </p>
      </div>
      <div className="flex flex-col items-center gap-20 md:gap-40">
        <Slide
          slidesPerView={1}
          slideItemToShowIndex={itemIndex}
          onIndexIncrease={increaseItemToShowIndex}
          onIndexDecrease={decreaseItemToShowIndex}
        >
          {areas.map((area) => {
            const { textWithOutLastWord, textLastWord } = sliptText(area.name)
            return (
              <div
                key={area.id}
                className="relative overflow-hidden rounded-3xl bg-black/50"
              >
                <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-medium text-neutral-50">
                  {textWithOutLastWord} <strong>{textLastWord}</strong>{' '}
                </h1>
                <img
                  src={area.imageURL}
                  alt=""
                  className="relative -z-10 aspect-video w-full object-cover "
                />
              </div>
            )
          })}
        </Slide>
        <Expertises expertiseItemToFocusIndex={itemIndex} />
      </div>
    </section>
  )
}
