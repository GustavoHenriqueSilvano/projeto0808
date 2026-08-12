import { useCallback, useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableBlock } from "./SortableBlock";
import type { Block } from "./types";
import styles from "./Blocks.module.css";

const BLOCOS_INICIAIS: Block[] = [
  { id: "b1", type: "texto", title: "Cabeçalho do relatório" },
  { id: "b2", type: "tabela", title: "Tabela de usuários" },
  { id: "b3", type: "imagem", title: "Gráfico de vendas" },
  { id: "b4", type: "texto", title: "Observações finais" },
];

export function BlockBoard() {
  const [blocks, setBlocks] = useState<Block[]>(BLOCOS_INICIAIS);
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    // distance: 8 evita que um clique simples vire arrasto
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  }, []);

  // Aqui é o ponto principal: a reordenação acontece no callback do evento,
  // NÃO em useEffect. useEffect aqui causaria render duplo e estado fora de sincronia.
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over || active.id === over.id) return;

    setBlocks((atual) => {
      const from = atual.findIndex((b) => b.id === active.id);
      const to = atual.findIndex((b) => b.id === over.id);
      return arrayMove(atual, from, to);
    });
  }, []);

  const activeBlock = activeId ? blocks.find((b) => b.id === activeId) : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={() => setActiveId(null)}
    >
      <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
        <ul className={styles.list}>
          {blocks.map((block) => (
            <SortableBlock key={block.id} block={block} />
          ))}
        </ul>
      </SortableContext>

      {/* DragOverlay: o bloco que segue o cursor. Sem ele o item sai clipado
          quando o container tem overflow. */}
      <DragOverlay>
        {activeBlock ? (
          <div className={`${styles.block} ${styles.overlay}`}>
            <span className={styles.handle}>⠿</span>
            <div className={styles.body}>
              <span className={styles.title}>{activeBlock.title}</span>
              <span className={styles.type}>{activeBlock.type}</span>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
