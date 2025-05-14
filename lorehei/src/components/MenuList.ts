import { defineComponent, PropType } from 'vue'

interface Item {
  id: number
  name: string
}

export default defineComponent({
  name: 'MenuList',
  props: {
    itens: {
      type: Array as PropType<Item[]>,
      required: true,
    },
    onItemClick: {
      type: Function as PropType<(item: Item) => void>,
      required: true,
    },
  },
  methods: {
    handleClick(item: Item) {
      this.onItemClick(item)
    },
  },
})