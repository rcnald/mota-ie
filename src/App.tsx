import { Approach } from './components/ui/approach'
import { Hero } from './components/ui/hero'
import { Services } from './components/ui/services'
import { ShowCase } from './components/ui/showCase'

export function App() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Approach />
      <Services />
      <ShowCase />
    </div>
  )
}
