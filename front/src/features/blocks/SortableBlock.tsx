import { memo } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { Block } from './types'
import styles from './Blocks.module.css'

interface SortableBlockProps {
  block: Block
}

// memo: sem isso, arrastar um bloco re-renderiza todos os outros da lista.
// Com 5 blocos não importa; com 200 o drag engasga.
export const SortableBlock = memo(function SortableBlock({
  block,
}: SortableBlockProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: block.id })

  return (
    <li
      ref={setNodeRef}
      className={styles.block}
      data-dragging={isDragging}
      style={{
        // dnd-kit devolve a posição como transform: nunca mexa em top/left,
        // senão o browser recalcula layout a cada frame do arrasto.
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      <button
        type="button"
        className={styles.handle}
        aria-label={`Mover bloco ${block.title}`}
        {...attributes}
        {...listeners}
      >
        ⠿
      </button>
      <div className={styles.body}>
        <span className={styles.title}>{block.title}</span>
        <span className={styles.type}>{block.type}</span>
      </div>
    </li>
  )
})
