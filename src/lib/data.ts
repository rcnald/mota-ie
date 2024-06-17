export interface ServicesType {
  id: number
  title: string
  description: string
  areaId: number
}

export const areas = [
  {
    id: 1,
    name: 'Instalação Elétrica Residencial',
    description:
      'Evite alto consumo em sua conta de energia elétrica. Solicite uma inspeção detalhada da rede elétrica de sua residência. Realizamos desde o mais simples serviço de instalação elétrica de uma tomada, até uma inspeção completa e detalhada da rede elétrica ou troca de todo fiação elétrica.',
    imageURL: '/01.jpg',
  },
  {
    id: 2,
    name: 'Instalação Elétrica Predial',
    description:
      'Estamos preparados para a elaboração e execução de projetos elétricos predial, obras em baixa tensão que seguem criteriosamente as prescrições da NBR 5410/2004 (Instalações elétricas em baixa tensão) e a NBR 5444/89 (Símbolos gráficos para instalações elétricas prediais).',
    imageURL: '/02.jpg',
  },
  {
    id: 3,
    name: 'Instalação Elétrica Comercial',
    description:
      'Confie seu patrimônio na mão de especialistas. Para o desenvolvimento de projetos e na execução de serviços de instalações elétricas específicos que atendem as necessidades especiais de lojas, escritórios, bares e pequenos comércios.',
    imageURL: '/03.jpg',
  },
  {
    id: 4,
    name: 'Instalação Elétrica Industrial',
    description:
      'Com o objetivo de garantir total segurança e o que há de melhor e mais moderno em instalações elétricas para indústrias, disponibilizamos para nossos clientes, uma grande estrutura tanto física como de profissionais que atendem a todo tipo de demanda de serviços de instalação elétrica industrial. e o melhor serviço especializado.',
    imageURL: '/04.jpg',
  },
  {
    id: 5,
    name: 'Instalação de Nobreak',
    description:
      'Evite perdas e prejuízos desnecessários devido a quedas bruscas no fornecimento de energia elétrica. Instale hoje mesmo um nobreak em sua empresa. Trabalhamos com nobreaks que atendem todo tipo de estrutura que vai desde um pequeno escritório até grandes indústrias.',
    imageURL: '/05.jpg',
  },
]

export const services: ServicesType[] = [
  {
    id: 1,
    title: 'Substituição da fiação elétrica',
    description:
      'Atualizamos a fiação antiga para garantir a segurança e eficiência do sistema elétrico residencial.',
    areaId: 1,
  },
  {
    id: 2,
    title: 'Instalação elétrica de tomadas, interruptores e disjuntores',
    description:
      'Instalamos novos pontos de energia e proteção para aumentar a funcionalidade e segurança.',
    areaId: 1,
  },
  {
    id: 3,
    title: 'Instalação elétrica de ar-condicionado',
    description:
      'Preparamos a infraestrutura elétrica adequada para a instalação segura de aparelhos de ar-condicionado.',
    areaId: 1,
  },
  {
    id: 4,
    title: 'Instalação elétrica de ventiladores',
    description:
      'Instalamos ventiladores para melhorar o conforto e a circulação de ar em sua residência.',
    areaId: 1,
  },
  {
    id: 5,
    title: 'Instalação elétrica de chuveiro e torneiras elétricas',
    description:
      'Garantimos uma instalação segura e eficiente de chuveiros e torneiras elétricas.',
    areaId: 1,
  },
  {
    id: 6,
    title: 'Instalação elétrica para iluminação residencial',
    description:
      'Implementamos projetos de iluminação que valorizam e iluminam seus espaços residenciais.',
    areaId: 1,
  },
  {
    id: 7,
    title: 'Quadros de distribuição',
    description:
      'Montamos e adequamos quadros de distribuição para uma gestão eficiente da energia elétrica em sua residência.',
    areaId: 1,
  },
  {
    id: 8,
    title:
      'Montagem de painéis para bomba de recalque e sistemas de distribuição de energia em baixa tensão',
    description:
      'Garantimos a correta montagem de painéis para sistemas críticos de distribuição de energia.',
    areaId: 2,
  },
  {
    id: 9,
    title: 'Instalação elétrica para aparelhos de ar-condicionado',
    description:
      'Preparação adequada para a instalação segura e eficiente de ar-condicionado em ambientes prediais.',
    areaId: 2,
  },
  {
    id: 10,
    title: 'Instalações elétricas para sistema de iluminação interna e externa',
    description:
      'Projetos de iluminação que valorizam a estética e funcionalidade de espaços internos e externos.',
    areaId: 2,
  },
  {
    id: 11,
    title: 'Instalação elétrica condominial',
    description:
      'Soluções elétricas completas para áreas comuns de condomínios, garantindo segurança e eficiência.',
    areaId: 2,
  },
  {
    id: 12,
    title: 'Adequação de sistemas elétricos',
    description:
      'Atualização e melhoria de sistemas elétricos antigos para atender às normas e aumentar a segurança.',
    areaId: 2,
  },
  {
    id: 13,
    title: 'Distribuição e comandos elétricos',
    description:
      'Projetos e execuções de sistemas de distribuição e comando para garantir um funcionamento eficiente.',
    areaId: 2,
  },
  {
    id: 14,
    title: 'Desenvolvimento de projetos',
    description:
      'Criamos projetos elétricos personalizados para atender às demandas específicas de cada comércio.',
    areaId: 3,
  },
  {
    id: 15,
    title: 'Troca da fiação elétrica',
    description:
      'Substituímos fiações antigas para garantir segurança e eficiência energética.',
    areaId: 3,
  },
  {
    id: 16,
    title: 'Instalações elétricas para galpões',
    description:
      'Soluções elétricas robustas e eficientes para ambientes de armazenagem e produção.',
    areaId: 3,
  },
  {
    id: 17,
    title: 'Instalações elétricas para aparelhos de ar-condicionado',
    description:
      'Preparação elétrica adequada para a instalação de sistemas de climatização.',
    areaId: 3,
  },
  {
    id: 18,
    title: 'Instalações elétricas para iluminação interna e externa',
    description:
      'Iluminação que valoriza e destaca os espaços comerciais, tanto internos quanto externos.',
    areaId: 3,
  },
  {
    id: 19,
    title: 'Instalações elétricas especiais para iluminação de vitrines',
    description:
      'Soluções de iluminação que realçam produtos e atraem clientes para vitrines.',
    areaId: 3,
  },
  {
    id: 20,
    title: 'Adequação de instalação elétrica para rede de computadores',
    description:
      'Preparamos a infraestrutura elétrica necessária para suportar redes de computadores de forma segura e eficiente.',
    areaId: 3,
  },
  {
    id: 21,
    title: 'Montagem e instalação de quadros elétricos e de comando',
    description:
      'Montamos e instalamos quadros elétricos que garantem a gestão eficiente e segura da energia em ambientes industriais.',
    areaId: 4,
  },
  {
    id: 22,
    title: 'Instalações de painéis elétricos',
    description:
      'Instalamos painéis elétricos que asseguram a distribuição e controle da energia em processos industriais.',
    areaId: 4,
  },
  {
    id: 23,
    title: 'Parametrização de inversores de frequência (WEG, Danfoss)',
    description:
      'Configuramos inversores para otimizar o desempenho e a eficiência de máquinas e equipamentos industriais.',
    areaId: 4,
  },
  {
    id: 24,
    title: 'Instalações elétricas para iluminação industrial',
    description:
      'Projetamos e instalamos sistemas de iluminação que atendem às demandas específicas de ambientes industriais.',
    areaId: 4,
  },
  {
    id: 25,
    title: 'Instalações especiais',
    description:
      'Soluções personalizadas para necessidades elétricas específicas em ambientes industriais.',
    areaId: 4,
  },
  {
    id: 26,
    title: 'Instalações elétricas de nobreak',
    description:
      'Implementamos nobreaks para garantir a continuidade do fornecimento de energia em caso de falhas.',
    areaId: 5,
  },
  {
    id: 27,
    title: 'Adequação de instalações elétricas para sistemas de nobreak',
    description:
      'Adaptamos suas instalações elétricas para integrar sistemas de nobreak de forma eficiente.',
    areaId: 5,
  },
  {
    id: 28,
    title: 'Instalação de nobreak para computadores',
    description:
      'Protegemos seus equipamentos de informática contra quedas de energia e surtos elétricos.',
    areaId: 5,
  },
]
