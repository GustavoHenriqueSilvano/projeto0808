import type { ReactNode } from 'react'
import styles from './Kicker.module.css'

/** Rótulo pequeno em monoespaçada que abre cada seção da landing. */
export function Kicker({ children }: { children: ReactNode }) {
  return <span className={styles.kicker}>{children}</span>
}
