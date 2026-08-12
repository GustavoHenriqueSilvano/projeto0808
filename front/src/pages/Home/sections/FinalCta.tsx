import { Section } from '@/components/ui/Section'
import { ButtonAnchor } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { formatBRL } from '@/lib/format'
import { MONTHLY_PRICE } from '@/config/site'
import styles from './FinalCta.module.css'

export function FinalCta() {
  return (
    <Section>
      <div className={styles.card}>
        <div>
          <h2 className={styles.title}>
            Pronto para abrir o ambiente da sua empresa?
          </h2>
          <p className={styles.description}>
            Escolha o endereço, convide o time e comece hoje por{' '}
            {formatBRL(MONTHLY_PRICE)} no mês.
          </p>
        </div>
        <ButtonAnchor href="#planos" size="lg">
          Ver planos
          <Icon name="arrowRight" size={16} />
        </ButtonAnchor>
      </div>
    </Section>
  )
}
