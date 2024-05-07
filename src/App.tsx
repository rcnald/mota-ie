import { Clock, Headset, Menu, ShieldCheck } from 'lucide-react'
import Logo from './assets/logo.svg'

export function App() {
  return (
    <>
      <section className="flex flex-col items-center gap-24 bg-hero-image-mobile bg-cover bg-no-repeat max-lg:bg-center lg:bg-hero-image">
        <div className="w-full max-w-[1200px] px-5 py-10">
          <div className="flex max-w-[830px] flex-col gap-20">
            <nav className="flex justify-between">
              <img src={Logo} alt="" />
              <div className="flex">
                <button>
                  <Menu className="text-brand-400 sm:hidden" />
                </button>
                <ul className="hidden items-center gap-8 sm:flex">
                  <li className="text-base font-semibold uppercase leading-5 text-neutral-300 transition-all  focus-within:text-brand-400 hover:text-brand-400">
                    <a href="#about">Sobre</a>
                  </li>
                  <li className="text-base font-semibold uppercase leading-5 text-neutral-300 transition-all focus-within:text-brand-400 hover:text-brand-400">
                    <a href="#services">Serviços</a>
                  </li>
                  <li className="text-base font-semibold uppercase leading-5 text-neutral-300 transition-all focus-within:text-brand-400 hover:text-brand-400">
                    <a href="#contact">Contato</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="flex flex-col items-center gap-14 md:items-start">
              <span className="flex max-w-[650px] flex-col gap-8 text-center text-neutral-50 md:text-start">
                <h1 className="text-hero-title-clamp leading-[70px]">
                  Serviços de <br /> <strong>Instalações Elétricas</strong>
                </h1>
                <p className="text-xl font-medium leading-7">
                  Conte conosco para energizar sua vida de maneira eficiente,
                  segura e inovadora.
                </p>
              </span>
              <button className="flex w-fit animate-pulsing  gap-4 rounded-lg bg-brand-400 px-8 py-5 text-lg font-bold leading-7 text-neutral-50 transition-all hover:animate-none hover:bg-accent-900 focus:animate-none focus:bg-accent-900">
                <Headset />
                Entrar em contato
              </button>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-rows-[100px_1fr] justify-center bg-benefits-image bg-cover bg-no-repeat px-5">
          <ul className="row-start-2 flex flex-col flex-wrap justify-center gap-20 text-center md:flex-row lg:text-start">
            <li className="flex max-w-[300px] flex-col items-center gap-4 lg:items-start">
              <span className="flex w-fit rounded-[0.625rem] bg-accent-900 p-5 text-neutral-50">
                <Clock width={40} height={40} />
              </span>
              <h2 className="text-xl font-bold text-neutral-950">
                Pontualidade{' '}
                <strong className="font-bold text-brand-400">
                  Comprometida
                </strong>
              </h2>
              <p className="text-xl font-medium text-accent-800">
                Comprometimento a cumprir prazos estabelecidos com a conclusão
                pontual dos projetos.
              </p>
            </li>
            <li className="flex max-w-[300px] flex-col items-center gap-4 lg:items-start">
              <span className="flex w-fit rounded-[0.625rem] bg-brand-400 p-5 text-brand-200">
                <ShieldCheck width={40} height={40} />
              </span>
              <h2 className="text-xl font-bold text-neutral-950">
                Segurança{' '}
                <strong className="font-bold text-brand-400">Garantida</strong>
              </h2>
              <p className="text-xl font-medium text-accent-800">
                Todas as instalações e reparos seguem estritamente os padrões de
                segurança.
              </p>
            </li>
            <li className="flex max-w-[300px] flex-col items-center gap-4 lg:items-start">
              <span className="flex w-fit rounded-[0.625rem] bg-accent-900 p-5 text-neutral-50">
                <Clock width={40} height={40} />
              </span>
              <h2 className="text-xl font-bold text-neutral-950">
                Precisão e{' '}
                <strong className="font-bold text-brand-400">Eficiência</strong>
              </h2>
              <p className="text-xl font-medium text-accent-800">
                Garantia que a execução dos projetos elétricos serão feitor com
                precisão e eficiência.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
