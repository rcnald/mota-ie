import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Cards } from './cards'
import { SearchForm } from './searchForm'

const searchFormSchema = z.object({
  area: z.number(),
  query: z.string().optional(),
})

interface FilterType {
  area: number
  query: string | undefined
}

export type SearchFormSchema = z.infer<typeof searchFormSchema>

export function Services() {
  const [filters, setFilter] = useState<FilterType>({ area: 0, query: '' })

  const searchForm = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      area: 0,
      query: '',
    },
  })

  const { handleSubmit } = searchForm

  const handleSearchForm = (data: SearchFormSchema) => {
    setFilter({ area: data.area, query: data.query })
  }

  return (
    <main className="flex w-full justify-center bg-neutral-50 py-40">
      <div className="flex max-w-[950px] flex-col gap-14 px-5">
        <h1 className="text-center text-hero-title-clamp">
          Descubra Nossas Especialidades em
          <strong>
            {' '}
            Instalações <span className="text-brand-400">Elétricas</span>
          </strong>
        </h1>
        <p className="max-w-[740px] text-center text-xl">
          Explore as soluções personalizadas da Mota Instalações Elétricas para
          residências, edifícios comerciais e mais.
        </p>
        <form
          onSubmit={handleSubmit(handleSearchForm)}
          className="grid w-full grid-cols-[1fr_auto] gap-3 rounded-xl border-2 border-solid border-transparent px-4 py-5 shadow-service shadow-accent-800/10 focus-within:border-brand-200 md:flex md:grid-cols-none md:grid-rows-1"
        >
          <FormProvider {...searchForm}>
            <SearchForm />
          </FormProvider>
        </form>
        <Cards
          perPage={3}
          filter={{ areaId: filters.area }}
          query={filters.query}
        />
      </div>
    </main>
  )
}
