import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { Kicker } from '@/components/ui/Kicker'
import { Icon } from '@/components/ui/Icon'
import { environmentSteps } from '@/config/site'
import styles from './Environment.module.css'

export function Environment() {
  return (
    <Section id="ambiente">
      <div className={styles.layout}>
          <div>
            <Kicker>Ambiente por subdomínio</Kicker>
            <h2 className={styles.title}>Seu endereço, seu ambiente.</h2>
            <p className={styles.description}>
              Em vez de um login genérico, sua equipe acessa um endereço próprio. O
              portal de entrada já reconhece a empresa, aplica a identidade da conta
              e abre somente os dados daquele ambiente.
            </p>
            <Link className={styles.link} to="/login">
              Ver o portal de entrada
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <ol className={styles.steps}>
            {environmentSteps.map((step) => (
              <li key={step.step} className={styles.step}>
                <span className={styles.stepNumber}>{step.step}</span>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
      </div>
    </Section>
  )
}
