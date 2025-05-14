import { PropType } from 'vue'

export const useCardProps = {
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String as PropType<string | null>,
    default: null,
  },
  content: {
    type: String,
    required: true,
  },
}