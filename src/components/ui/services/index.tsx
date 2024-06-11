import { Cards } from './cards'
import { SearchForm } from './searchForm'

export function Services() {
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
          action=""
          className="grid w-full grid-cols-[1fr_auto] gap-3 rounded-xl border-2 border-solid border-transparent px-4 py-5 shadow-service shadow-accent-800/10 focus-within:border-brand-200 md:flex md:grid-cols-none md:grid-rows-1"
        >
          <SearchForm />
        </form>
        <Cards perPage={3} />
      </div>
    </main>
  )
}
