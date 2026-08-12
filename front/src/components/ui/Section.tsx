import type { ReactNode } from 'react'
import { Container } from './Container'
import { Kicker } from './Kicker'
import styles from './Section.module.css'

interface SectionProps {
  id?: string
  kicker?: string
  title?: ReactNode
  description?: ReactNode
  /** Remove a linha separadora do topo (usado só no hero). */
  plain?: boolean
  children?: ReactNode
}

export function Section({
  id,
  kicker,
  title,
  description,
  plain = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[styles.section, plain && styles.plain].filter(Boolean).join(' ')}
    >
      <Container>
        {kicker && <Kicker>{kicker}</Kicker>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </Container>
    </section>
  )
}
