import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from '../../button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: React.Dispatch<React.SetStateAction<number>>
}

export function Pagination({
  pageIndex,
  totalCount,
  perPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage)
  const currentPage = pageIndex + 1

  const isFirstPage = pageIndex === 0
  const isLastPage = pageIndex === pages - 1

  const increasePageIndex = () => {
    if (pageIndex < pages - 1) {
      onPageChange((prev) => prev + 1)
    }
  }

  const decreasePageIndex = () => {
    if (pageIndex > 0) {
      onPageChange((prev) => prev - 1)
    }
  }

  const setPageIndexToFirstPage = () => {
    onPageChange(0)
  }

  const setPageIndexToLastPage = () => {
    onPageChange(pages - 1)
  }

  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="text-sm font-medium">
          Pagina {currentPage} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="size-8 p-0"
            onClick={setPageIndexToFirstPage}
            disabled={isFirstPage}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>
          <Button
            className="size-8 p-0"
            onClick={decreasePageIndex}
            disabled={isFirstPage}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Pagina anterior</span>
          </Button>
          <Button
            className="size-8 p-0"
            onClick={increasePageIndex}
            disabled={isLastPage}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>
          <Button
            className="size-8 p-0"
            onClick={setPageIndexToLastPage}
            disabled={isLastPage}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
