import image from '../../../assets/aprouch.jpg'
import { Panel } from './panel'
import { Slide, SlideDescription, SlideTitle } from './slide'

export function Approach() {
  return (
    <section className="mx-auto flex w-full  items-center justify-center bg-neutral-200">
      <div className="grid h-fit max-w-[1200px] grid-cols-1  gap-1 px-5 py-6 lg:grid-cols-2">
        <div className="top-0 flex items-center justify-center lg:sticky lg:h-screen">
          <div className="relative flex w-full max-w-[560px] justify-center lg:block lg:h-[510px]">
            <Panel src={image} alt="" size={400} />
            <Panel
              src={image}
              alt=""
              size={120}
              className="absolute right-[5%] top-1/3 hidden lg:grid"
            />
            <Panel
              src={image}
              alt=""
              size={140}
              className="absolute left-11 top-80 hidden lg:grid"
            />
          </div>
        </div>
        <div className="flex flex-col gap-20 lg:py-[50vh]">
          <Slide position={1}>
            <SlideTitle>Atendimento Personalizado</SlideTitle>
            <SlideDescription>
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </SlideDescription>
          </Slide>
          <Slide position={2}>
            <SlideTitle>Atendimento Personalizado</SlideTitle>
            <SlideDescription>
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </SlideDescription>
          </Slide>
          <Slide position={3}>
            <SlideTitle>Atendimento Personalizado</SlideTitle>
            <SlideDescription>
              Lorem Ipsumis simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </SlideDescription>
          </Slide>
        </div>
      </div>
    </section>
  )
}
