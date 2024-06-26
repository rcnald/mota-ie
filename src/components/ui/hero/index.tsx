import {
  Clock,
  Headset,
  Lightbulb,
  ShieldCheck,
  Menu as menuIcon,
} from 'lucide-react'
import Logo from '../../../assets/logo.svg'
import { Button } from '../button'
import {
  Benefit,
  BenefitDescription,
  BenefitIcon,
  BenefitItem,
  BenefitTitle,
} from './benefit'
import {
  Menu,
  MenuClose,
  MenuContent,
  MenuGroup,
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuTrigger,
} from './menu'

export function Hero() {
  return (
    <section className="flex flex-col items-center gap-24 bg-hero-image-mobile bg-cover bg-no-repeat max-lg:bg-center lg:bg-hero-image">
      <header className="flex w-full max-w-[1200px] flex-col gap-20 px-5 pt-10">
        <div className="flex max-w-[831px] justify-between">
          <img src={Logo} alt="" />
          <Menu>
            <MenuTrigger>
              <MenuIcon icon={menuIcon} className="text-brand-400 sm:hidden" />
            </MenuTrigger>
            <MenuContent>
              <div className="hidden justify-between max-sm:group-data-[state=open]:flex max-sm:group-data-[state=open]:px-12">
                <MenuLabel>Categorias</MenuLabel>
                <MenuClose>
                  <span className="sr-only">Fecha menu</span>
                </MenuClose>
              </div>

              <MenuGroup>
                <MenuItem content="Sobre" sectionId="about" />
                <MenuItem content="Serviços" sectionId="services" />
                <MenuItem content="Contato" sectionId="contact" />
              </MenuGroup>
            </MenuContent>
          </Menu>
        </div>
        <div className="flex flex-col items-center gap-14 md:items-start">
          <span className="flex max-w-[650px] flex-col gap-8 text-center text-neutral-50 md:text-start">
            <h1 className="text-hero-title-clamp leading-[70px]">
              Serviços de <br />
              <strong>Instalações Elétricas</strong>
            </h1>
            <p className="text-xl font-medium leading-7">
              Conte conosco para energizar sua vida de maneira eficiente, segura
              e inovadora.
            </p>
          </span>
          <Button className="animate-pulsing duration-1000">
            <Headset />
            Entrar em contato
          </Button>
        </div>
      </header>

      <div className="grid w-full grid-rows-[100px_1fr] place-items-center bg-benefits-image bg-cover bg-[top_center] bg-no-repeat">
        <Benefit className="row-start-2 w-full max-w-[1200px] px-5">
          <BenefitItem>
            <BenefitIcon icon={Clock} />
            <BenefitTitle>Pontualidade Comprometida</BenefitTitle>
            <BenefitDescription>
              Comprometimento a cumprir prazos estabelecidos com a conclusão
              pontual dos projetos.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon icon={ShieldCheck} />
            <BenefitTitle>Segurança Garantida</BenefitTitle>
            <BenefitDescription>
              Todas as instalações e reparos seguem estritamente os padrões de
              segurança.
            </BenefitDescription>
          </BenefitItem>
          <BenefitItem>
            <BenefitIcon icon={Lightbulb} />
            <BenefitTitle>Precisão e Eficiência</BenefitTitle>
            <BenefitDescription>
              Garantia que a execução dos projetos elétricos serão feitor com
              precisão e eficiência.
            </BenefitDescription>
          </BenefitItem>
        </Benefit>
      </div>
    </section>
  )
}
