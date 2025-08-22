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
  lang: {
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

  const itensPt: MainCardItem[] = [
    { id: 1, name: 'Descrição' },
    { id: 2, name: 'Características' },
    { id: 3, name: 'Arquétipos' },
    { id: 4, name: 'Forma de Ativação' },
    { id: 5, name: 'Alimentação' },
    { id: 6, name: 'Banimento' },
  ]

  const itensEn: MainCardItem[] = [
    { id: 1, name: 'Description' },
    { id: 2, name: 'Characteristics' },
    { id: 3, name: 'Archetypes' },
    { id: 4, name: 'Activation Method' },
    { id: 5, name: 'Charging' },
    { id: 6, name: 'Banishment' },
  ]

  return {
    itemClick,
    chaosphereClicked,
    itensPt,
    itensEn,
  }
}
