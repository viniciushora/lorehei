import { useMainCardPosition } from '@/stores/useMainCardPosition'
import type { MainCardItem } from '@/models'

export const useMainCardProps = {
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}

export function useMainCard(emit: (event: string, ...args: any[]) => void) {
  const mainCardPosition = useMainCardPosition()

  function itemClick(item: MainCardItem) {
    mainCardPosition.moveMainCardToTopOnce()
    emit('itemSelected', item.id)
  }

  function chaosphereClicked() {
    emit('chaosphereClick')
  }

  const itens: MainCardItem[] = [
    { id: 1, name: 'Descrição' },
    { id: 2, name: 'Características' },
    { id: 3, name: 'Arquétipos' },
    { id: 4, name: 'Forma de Ativação' },
    { id: 5, name: 'Alimentação' },
    { id: 6, name: 'Banimento' },
  ]

  return {
    itemClick,
    chaosphereClicked,
    itens,
  }
}
