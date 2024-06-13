import { ChevronDown, Search } from 'lucide-react'
import { Controller, useFormContext } from 'react-hook-form'
import { SearchFormSchema } from '..'
import { areas } from '../../../../lib/data'
import { sliptText } from '../../../../lib/utils'
import { Button } from '../../button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../select'

export function SearchForm() {
  const { register, control } = useFormContext<SearchFormSchema>()

  const areasToPopulateSelect = areas.map((area) => {
    const { name, id } = area
    return { id, name: sliptText(name).textLastWord }
  })

  return (
    <>
      <Controller
        control={control}
        name="area"
        render={({ field }) => {
          return (
            <Select
              className="col-start-1 col-end-3 shrink-0"
              onValueChange={field.onChange}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma area" />
                <ChevronDown />
              </SelectTrigger>
              <SelectContent>
                <SelectLabel>Area</SelectLabel>
                <SelectItem value={0}>Todos</SelectItem>
                {areasToPopulateSelect.map((area) => (
                  <SelectItem value={area.id} key={area.id}>
                    {area.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )
        }}
      />

      <input
        type="text"
        placeholder="Procure algum serviço"
        className="col-start-1 row-start-1 h-fit w-full rounded-lg bg-neutral-100 p-4"
        {...register('query')}
      />
      <Button className="col-start-2 row-start-1 h-fit whitespace-nowrap p-4 py-4">
        <span className="hidden md:inline">Procurar Agora</span>
        <Search className="block md:hidden" />
      </Button>
    </>
  )
}
