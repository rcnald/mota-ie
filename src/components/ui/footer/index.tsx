import { Headset } from 'lucide-react'
import Logo from '../../../assets/logo.svg'
import { Button } from '../button'

export function Footer() {
  return (
    <footer className="flex flex-col items-center bg-accent-900 px-5 py-20">
      <div className="flex w-full max-w-[1200px] flex-col gap-20">
        <header className="flex w-full flex-col items-center justify-between gap-4 text-2xl md:flex-row md:text-base">
          <div className="flex max-w-[645px] flex-col gap-10">
            <h1 className="text-4xl font-bold text-neutral-50 max-md:text-center">
              Pronto para contratar nossos serviços?
            </h1>
            <p className="text-lg text-neutral-300 max-md:text-center">
              Sua satisfação é nossa prioridade, e nossa equipe está à
              disposição para garantir que suas expectativas sejam não apenas
              atendidas, mas superadas.
            </p>
          </div>
          <Button className="h-fit shrink-0 grow-0">
            <Headset />
            Entrar em contato
          </Button>
        </header>
        <hr className="w-full border-accent-800" />
        <div className="flex flex-col justify-between gap-20 text-2xl md:text-base lg:flex-row">
          <div className="flex max-w-[360px] flex-col gap-6">
            <div>
              <img src={Logo} alt="" />
            </div>
            <p className="text-neutral-300">
              Seja qual for sua necessidade, estamos prontos para transformar
              desafios em possibilidades luminosas.
            </p>
            <a href="" className="text-neutral-300">
              (11) 97617-9200
            </a>
          </div>
          <nav className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-neutral-300">Sobre</h2>
              <ul className="flex flex-col">
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre a empresa
                </li>
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre os serviços
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-neutral-300">Sobre</h2>
              <ul className="flex flex-col">
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre a empresa
                </li>
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre os serviços
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-neutral-300">Sobre</h2>
              <ul className="flex flex-col">
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre a empresa
                </li>
                <li className="whitespace-nowrap text-neutral-300">
                  Sobre os serviços
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-2 text-2xl md:text-base">
          <span className="text-neutral-300">
            &copy; 2024 Mota Instalações Elétricas. Todos os direitos
            reservados.
          </span>
          <span className="text-neutral-300">
            Desenvolvido por{' '}
            <a href="" className="font-bold text-neutral-200">
              Ronaldo Junior
            </a>{' '}
            | Design por
            <a href="" className="font-bold text-neutral-200">
              {' '}
              Shayare juniar
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
