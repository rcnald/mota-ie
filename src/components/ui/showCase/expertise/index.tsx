import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

interface Expertises extends PropsWithChildren {
  expertiseItemToFocusIndex: number
}

interface ExpertiseProps extends ComponentProps<'li'> {
  children: ReactNode
}

export function Expertises({ expertiseItemToFocusIndex }: Expertises) {
  console.log(expertiseItemToFocusIndex)
  return (
    <ul className="flex max-w-[740px] flex-col gap-4 px-4">
      <Expertise data-selected>
        <ExpertiseTitle>Instalação Elétrica Residencial</ExpertiseTitle>
        <ExpertiseDescription>
          Evite alto consumo em sua conta de energia elétrica. Solicite uma
          inspeção detalhada da rede elétrica de sua residência. Realizamos
          desde o mais simples serviço de instalação elétrica de uma tomada, até
          uma inspeção completa e detalhada da rede elétrica ou troca de todo
          fiação elétrica
        </ExpertiseDescription>
      </Expertise>
    </ul>
  )
}

function Expertise({ children, ...props }: ExpertiseProps) {
  return (
    <li
      className="relative rounded-2xl p-8 data-[selected]:bg-brand-200 data-[selected]:before:absolute data-[selected]:before:h-1 data-[selected]:before:w-[calc(100%-64px)] data-[selected]:before:bg-brand-400 data-[selected]:before:content-[''] max-md:data-[selected]:before:-top-4 md:data-[selected]:before:left-0 md:data-[selected]:before:h-[calc(100%-64px)] md:data-[selected]:before:w-1"
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
