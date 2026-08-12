import { Container } from '@/components/ui/Container'
import { Kicker } from '@/components/ui/Kicker'
import { ButtonAnchor, ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { brand, heroStats } from '@/config/site'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="topo" className={styles.hero}>
      <Container>
        <Kicker>CRM multiempresa</Kicker>

        <h1 className={styles.title}>
          Um CRM organizado, com o ambiente exclusivo da sua empresa.
        </h1>

        <p className={styles.subtitle}>
          Gerencie contatos, negócios e atendimento em um único lugar. Cada cliente
          recebe um endereço próprio e um ambiente isolado — sem misturar dados,
          equipe ou configurações com ninguém.
        </p>

        <div className={styles.actions}>
          <ButtonAnchor href="#planos" size="lg">
            Começar por R$ 29,90
            <Icon name="arrowRight" size={16} />
          </ButtonAnchor>
          <ButtonLink to="/login" variant="ghost" size="lg">
            Já sou cliente
          </ButtonLink>
        </div>

        <div className={styles.domain}>
          <span className={styles.domainValue}>
            <Icon name="globe" size={16} />
            https://
            <span className={styles.domainSlot}>{brand.sampleSubdomain}</span>
            {brand.rootDomain}
          </span>
          <span className={styles.domainMeta}>ambiente dedicado · TLS · Brasil</span>
        </div>

        <dl className={styles.stats}>
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
