import { PropType, computed } from 'vue'
import type { SideCardProps } from '@/models/SideCard'

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
  textAlign: {
    type: String,
    default: 'left',
  },
  onImageClick: {
    type: Function as PropType<(src: string) => void>,
    required: true,
  },
}

export function useSideCard(props: SideCardProps) {
  const handleClick = () => {
    if (props.image && props.onImageClick) {
      props.onImageClick(props.image)
    }
  }

  const alignStyle = computed(() => ({
    textAlign: props.textAlign || 'left',
  }))

  return {
    handleClick,
    alignStyle,
  }
}
