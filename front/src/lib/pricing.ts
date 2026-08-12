import { MONTHLY_PRICE, type BillingCycle } from '@/config/site'

const round = (value: number) => Math.round(value * 100) / 100

function buildCycle(
  id: BillingCycle['id'],
  name: string,
  months: number,
  discount: number,
  note: (total: number) => string,
): BillingCycle {
  const total = round(MONTHLY_PRICE * months * (1 - discount))
  return {
    id,
    name,
    total,
    discount,
    monthly: round(total / months),
    note: note(total),
  }
}

// Todos os ciclos derivam de MONTHLY_PRICE: mudar o preço base recalcula tudo.
export const billingCycles: BillingCycle[] = [
  buildCycle('mensal', 'Mensal', 1, 0, () => 'Cobrança mensal, cancele quando quiser.'),
  buildCycle(
    'semestral',
    'Semestral',
    6,
    0.15,
    (total) => `R$ ${total.toFixed(2).replace('.', ',')} a cada 6 meses.`,
  ),
  buildCycle(
    'anual',
    'Anual',
    12,
    0.3,
    (total) => `R$ ${total.toFixed(2).replace('.', ',')} por ano.`,
  ),
]

export const annualCycle = billingCycles.find((c) => c.id === 'anual')!

/** Quanto o cliente deixa de pagar ao escolher o anual em vez do mensal. */
export const annualSavings = round(MONTHLY_PRICE * 12 - annualCycle.total)
