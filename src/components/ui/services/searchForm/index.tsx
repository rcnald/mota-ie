import { ChevronDown, Search } from 'lucide-react'
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
  return (
    <>
      <Select className="col-start-1 col-end-3 shrink-0">
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma area" />
          <ChevronDown />
        </SelectTrigger>
        <SelectContent>
          <SelectLabel>Serviços</SelectLabel>
          <SelectItem value="category">Residencias</SelectItem>
          <SelectItem value="role">Prédios</SelectItem>
          <SelectItem value="banana">Comércios</SelectItem>
          <SelectItem value="banana">Industrias</SelectItem>
        </SelectContent>
      </Select>
      <input
        type="text"
        placeholder="Procure algum serviço"
        className="col-start-1 row-start-1 h-fit w-full rounded-lg bg-neutral-100 p-4"
      />
      <Button className="col-start-2 row-start-1 h-fit whitespace-nowrap p-4 py-4">
        <span className="hidden md:inline">Procurar Agora</span>
        <Search className="block md:hidden" />
      </Button>
    </>
  )
}
