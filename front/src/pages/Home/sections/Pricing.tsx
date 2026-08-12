import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { planIncludes } from '@/config/site'
import { annualCycle, annualSavings, billingCycles } from '@/lib/pricing'
import { formatBRL } from '@/lib/format'
import styles from './Pricing.module.css'

export function Pricing() {
  return (
    <Section
      id="planos"
      kicker="Planos"
      title="Um plano único. Você escolhe o ciclo."
      description="Todos os recursos liberados desde o primeiro dia, com usuários ilimitados. Ciclos maiores têm desconto no valor mensal."
    >
      <div className={styles.layout}>
        <div className={styles.cycles}>
          {billingCycles.map((cycle) => (
            <article
              key={cycle.id}
              className={[
                styles.cycle,
                cycle.id === annualCycle.id && styles.cycleHighlighted,
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div>
                <h3 className={styles.cycleName}>
                  {cycle.name}
                  {cycle.discount > 0 && (
                    <span className={styles.badge}>
                      {cycle.discount * 100}% de desconto
                    </span>
                  )}
                </h3>
                <p className={styles.cycleNote}>{cycle.note}</p>
              </div>
              <p className={styles.cyclePrice}>
                <strong className={styles.cyclePriceValue}>
                  {formatBRL(cycle.monthly)}
                </strong>
                <span className={styles.cyclePriceUnit}>/mês</span>
              </p>
            </article>
          ))}
        </div>

        <div className={styles.highlight}>
          <span className={styles.badge}>Plano anual</span>
          <p className={styles.highlightPrice}>
            <strong className={styles.highlightValue}>
              {formatBRL(annualCycle.monthly)}
            </strong>
            <span className={styles.highlightUnit}>/mês</span>
          </p>
          <p className={styles.highlightSavings}>
            Economia de {formatBRL(annualSavings)} no período
          </p>

          <ul className={styles.includes}>
            {planIncludes.map((item) => (
              <li key={item} className={styles.include}>
                <Icon name="check" size={16} className={styles.includeIcon} />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink to="/login" size="lg" fullWidth>
            Assinar anual
            <Icon name="arrowRight" size={16} />
          </ButtonLink>
          <p className={styles.disclaimer}>
            Sem taxa de setup. Valores em reais, impostos inclusos.
          </p>
        </div>
      </div>
    </Section>
  )
}
