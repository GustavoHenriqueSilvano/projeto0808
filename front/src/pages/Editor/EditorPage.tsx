import { BlockBoard } from '@/features/blocks/BlockBoard'
import styles from './EditorPage.module.css'

export function EditorPage() {
  return (
    <div className={styles.page}>
      <header className={styles.heading}>
        <h1 className={styles.title}>Editor de blocos</h1>
        <p className={styles.subtitle}>
          Arraste pela alça ⠿ ou use Tab + Espaço + setas do teclado.
        </p>
      </header>
      <BlockBoard />
    </div>
  )
}
