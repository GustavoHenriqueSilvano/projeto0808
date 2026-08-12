export type BlockType = 'texto' | 'imagem' | 'tabela'

export interface Block {
  id: string
  type: BlockType
  title: string
}
