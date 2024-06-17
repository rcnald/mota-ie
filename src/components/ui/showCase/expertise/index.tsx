import { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import { areas } from '../../../../lib/data'

interface Expertises extends PropsWithChildren {
  expertiseItemToFocusIndex: number
}

interface ExpertiseProps extends ComponentProps<'li'> {
  children: ReactNode
}

export function Expertises({ expertiseItemToFocusIndex }: Expertises) {
  return (
    <ul className="flex max-w-[740px] flex-col gap-4 px-4">
      {areas.map((area, index) => {
        return (
          <Expertise
            key={area.id}
            data-selected={index === expertiseItemToFocusIndex}
          >
            <ExpertiseTitle>{area.name}</ExpertiseTitle>
            <ExpertiseDescription>{area.description}</ExpertiseDescription>
          </Expertise>
        )
      })}
    </ul>
  )
}

function Expertise({ children, ...props }: ExpertiseProps) {
  return (
    <li
      className="relative order-2 rounded-2xl p-8 data-[selected=true]:order-1 data-[selected=true]:bg-brand-200 data-[selected=true]:before:absolute data-[selected=true]:before:h-1 data-[selected=true]:before:w-[calc(100%-64px)] data-[selected=true]:before:bg-brand-400 data-[selected=true]:before:content-[''] max-md:data-[selected=true]:before:-top-4 md:data-[selected=true]:before:left-0 md:data-[selected=true]:before:h-[calc(100%-64px)] md:data-[selected=true]:before:w-1"
      {...props}
    >
      {children}
    </li>
  )
}

function ExpertiseTitle({ children }: PropsWithChildren) {
  return <h2 className="text-2xl font-bold">{children}</h2>
}

function ExpertiseDescription({ children }: PropsWithChildren) {
  return <p className="text-lg">{children}</p>
}
