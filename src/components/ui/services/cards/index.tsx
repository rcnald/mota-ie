import { MoveRight } from 'lucide-react'
import { PropsWithChildren } from 'react'

interface CardActionProps {
  to: string
}

export function Cards() {
  return (
    <>
      <span className="text-2xl font-semibold text-brand-400">
        Serviços Encontrados (6)
      </span>

      <ul className="flex flex-col gap-4">
        <Card>
          <CardTitle>Instalação de Tomadas e Interruptores</CardTitle>
          <CardTag> Instalações residenciais</CardTag>
          <CardAction to="/contact/service" />
          <CardDescription>
            Adição ou substituição de tomadas e interruptores para melhor
            atender às necessidades elétricas em residências.
          </CardDescription>
        </Card>
      </ul>
    </>
  )
}

function Card({ children }: PropsWithChildren) {
  return (
    <li className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] place-items-start gap-3 rounded-lg border border-solid border-neutral-200 bg-neutral-50 p-6 font-raleway">
      {children}
    </li>
  )
}

function CardTitle({ children }: PropsWithChildren) {
  return <h2 className="w-fit text-xl font-bold md:row-start-1">{children}</h2>
}

function CardTag({ children }: PropsWithChildren) {
  return (
    <span className="row-start-2 w-fit self-start whitespace-nowrap rounded-lg bg-neutral-100 p-1.5 text-sm font-semibold text-brand-400 md:row-start-1">
      {children}
    </span>
  )
}

function CardAction({ to }: CardActionProps) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className="col-span-2 row-start-4 ml-auto flex items-center gap-2 text-sm font-semibold text-brand-400 md:row-start-1"
    >
      Contratar serviço
      <MoveRight size={16} />
    </a>
  )
}

function CardDescription({ children }: PropsWithChildren) {
  return (
    <p className="col-span-3 text-base font-semibold text-accent-800">
      {children}
    </p>
  )
}
