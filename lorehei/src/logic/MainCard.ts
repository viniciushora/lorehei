import { defineComponent } from 'vue'
import MenuList from '@/components/MenuList.vue'
import { useMainCardPosition } from '@/stores/useMainCardPosition'
import type { MainCardItem } from '@/models/MainCard'

export default defineComponent({
  name: 'MainCard',
  components: {
    MenuList
  },
  emits: ['itemSelected', 'chaosphereClick'],
  setup(_, { emit }) {
    const { moveMainCardToTopOnce } = useMainCardPosition()

    function itemClick(item: MainCardItem) {
      moveMainCardToTopOnce()
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
      itens
    }
  }
})
