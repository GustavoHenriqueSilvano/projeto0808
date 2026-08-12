import type { IconName } from '@/components/ui/Icon'

/** Conteúdo da landing em um só lugar: mudar texto não exige mexer em JSX. */

export const brand = {
  name: 'projeto0808.com.br',
  short: 'projeto0808',
  initial: 'P',
  rootDomain: '.projeto0808.com.br',
  sampleSubdomain: 'sua-empresa',
} as const

export const navLinks = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Ambiente', href: '#ambiente' },
  { label: 'Planos', href: '#planos' },
] as const

export const heroStats = [
  { label: 'Disponibilidade', value: '99,9%' },
  { label: 'Usuários por conta', value: 'Ilimitados' },
  { label: 'Provisionamento', value: 'Em minutos' },
  { label: 'Dados', value: 'Isolados por cliente' },
] as const

export const features: {
  icon: IconName
  title: string
  description: string
}[] = [
  {
    icon: 'kanban',
    title: 'Funil visual',
    description:
      'Etapas configuráveis, arraste e solte, e previsão de fechamento por período.',
  },
  {
    icon: 'inbox',
    title: 'Atendimento centralizado',
    description:
      'E-mail, WhatsApp e formulários do site em uma única caixa por negócio.',
  },
  {
    icon: 'users',
    title: 'Base de contatos',
    description:
      'Empresas, pessoas e histórico completo de interações sem duplicidade.',
  },
  {
    icon: 'automation',
    title: 'Automações',
    description:
      'Tarefas, follow-ups e mudanças de etapa disparados por regras simples.',
  },
  {
    icon: 'chart',
    title: 'Relatórios',
    description:
      'Conversão por etapa, desempenho do time e motivos de perda em tempo real.',
  },
  {
    icon: 'shield',
    title: 'Permissões e auditoria',
    description:
      'Perfis de acesso, registro de sessões e login único para o time.',
  },
]

export const environmentSteps = [
  {
    step: '01',
    title: 'Escolha o endereço',
    description: `Você define o subdomínio na contratação, por exemplo ${brand.sampleSubdomain}${brand.rootDomain}.`,
  },
  {
    step: '02',
    title: 'Ambiente provisionado',
    description:
      'Criamos uma instância isolada com banco, usuários e configurações próprias.',
  },
  {
    step: '03',
    title: 'Time em operação',
    description:
      'Convide a equipe, importe a base e comece a trabalhar no mesmo dia.',
  },
] as const

export interface BillingCycle {
  id: 'mensal' | 'semestral' | 'anual'
  name: string
  monthly: number
  total: number
  discount: number
  note: string
}

/** Preço base. Os demais ciclos derivam daqui — ver services/pricing.ts. */
export const MONTHLY_PRICE = 29.9

export const planIncludes = [
  'Usuários ilimitados no ambiente',
  'Subdomínio exclusivo da sua empresa',
  'Funil, contatos e tarefas sem limite de registros',
  'Relatórios e exportação de dados',
  'Importação assistida da sua base atual',
  'Suporte por e-mail em português',
] as const
