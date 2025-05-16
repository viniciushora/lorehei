import { defineComponent, PropType } from 'vue'
import type { MenuListItem } from '@/models/MenuList'

export default defineComponent({
  name: 'MenuList',
  props: {
    itens: {
      type: Array as PropType<MenuListItem[]>,
      required: true,
    },
    onItemClick: {
      type: Function as PropType<(item: MenuListItem) => void>,
      required: true,
    },
  },
  methods: {
    handleClick(item: MenuListItem) {
      this.onItemClick(item)
    },
  },
})
