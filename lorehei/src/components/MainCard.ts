import { defineComponent } from 'vue'
import MenuList from '@/components/MenuList.vue'
import { useMainCardPosition } from '@/stores/useMainCardPosition'

interface Item {
  id: number
  name: string
}

export default defineComponent({
  name: 'MainCard',
  components: {
    MenuList
  },
  emits: ['itemSelected'],
  setup(_, { emit }) {
    const { moveMainCardToTopOnce } = useMainCardPosition()

    function itemClick(item: Item) {
      moveMainCardToTopOnce()
      emit('itemSelected', item.id)
    }

    return {
      itemClick,
      itens: [
        { id: 1, name: 'Descrição' },
        { id: 2, name: 'Características' },
        { id: 3, name: 'Arquétipos' },
        { id: 4, name: 'Forma de Ativação' },
        { id: 5, name: 'Alimentação' },
        { id: 6, name: 'Banimento' },
      ] as Item[]
    }
  }
})
