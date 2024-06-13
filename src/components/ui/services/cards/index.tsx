import { MoveRight } from 'lucide-react'
import { PropsWithChildren, useMemo, useState } from 'react'
import { areas, services } from '../../../../lib/data'
import { Pagination } from '../pagination'

interface CardProps {
  perPage: number
  filter?: { areaId: number }
  query?: string
}
interface CardActionProps {
  to: string
}

export function Cards({
  perPage,
  query = '',
  filter = { areaId: 0 },
}: CardProps) {
  const [pageIndex, setPageIndex] = useState(0)

  const firstItemPageIndex = pageIndex * perPage
  const lastItemPageIndex = firstItemPageIndex + perPage

  const servicesFilteredByArea = useMemo(() => {
    setPageIndex(0)
    return services.filter((service) => {
      if (filter.areaId !== 0) {
        return service.areaId === filter.areaId
      }

      return service
    })
  }, [filter])

  const servicesFilteredByQuery = useMemo(() => {
    setPageIndex(0)
    return servicesFilteredByArea.filter((service) => {
      if (query !== '') {
        return service.title.toLowerCase().includes(query.toLowerCase())
      }

      return service
    })
  }, [query, servicesFilteredByArea])

  const servicesPerPage = servicesFilteredByQuery.filter((_, index) => {
    return firstItemPageIndex <= index && index < lastItemPageIndex
  })

  const filteredServicesCount = servicesFilteredByQuery.length

  return (
    <>
      <span className="text-2xl font-semibold text-brand-400">
        Serviços Encontrados ({filteredServicesCount})
      </span>

      <ul className="flex flex-col gap-4">
        {servicesPerPage.map((service) => {
          return (
            <Card key={service.id}>
              <CardTitle>{service.title}</CardTitle>
              <CardTag>
                {areas.find((area) => area.id === service.areaId)?.name}
              </CardTag>
              <CardAction to="/contact/service" />
              <CardDescription>{service.description}</CardDescription>
            </Card>
          )
        })}
      </ul>
      <Pagination
        pageIndex={pageIndex}
        perPage={perPage}
        totalCount={filteredServicesCount}
        onPageChange={setPageIndex}
      />
    </>
  )
}

function Card({ children }: PropsWithChildren) {
  return (
    <li className="grid h-[190px] grid-cols-[auto_1fr] grid-rows-[auto_1fr] place-items-start gap-3 rounded-lg border border-solid border-neutral-200 bg-neutral-50 p-6 font-raleway md:grid-cols-[auto_200px]">
      {children}
    </li>
  )
}

function CardTitle({ children }: PropsWithChildren) {
  return <h2 className="text-xl font-bold md:row-start-1">{children}</h2>
}

function CardTag({ children }: PropsWithChildren) {
  return (
    <span className="row-start-2 w-fit self-start whitespace-nowrap rounded-lg bg-neutral-100 p-1.5 text-sm font-semibold text-brand-400">
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
