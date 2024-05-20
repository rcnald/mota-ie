import { useState } from 'react'
import Image from '../../../assets/a.jpg'
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
          <div>
            <img src={Image} alt="" className="rounded-3xl" />
          </div>
          <div>
            <img src={Image} alt="" className="rounded-3xl" />
          </div>
          <div>
            <img src={Image} alt="" className="rounded-3xl" />
          </div>
        </Slide>
        <Expertises expertiseItemToFocusIndex={itemIndex} />
      </div>
    </section>
  )
}
