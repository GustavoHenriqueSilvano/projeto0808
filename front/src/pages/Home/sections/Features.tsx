import { Section } from '@/components/ui/Section'
import { Icon } from '@/components/ui/Icon'
import { features } from '@/config/site'
import styles from './Features.module.css'

export function Features() {
  return (
    <Section
      id="recursos"
      kicker="Recursos"
      title="O necessário para vender com processo, sem excesso de telas."
    >
      <div className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title}>
            <Icon name={feature.icon} className={styles.icon} />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
