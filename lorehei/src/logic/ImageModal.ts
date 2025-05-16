import { ref } from 'vue'
import type { ImageModalState } from '@/models/ImageModal'

export function useImageModal() {
  const state = ref<ImageModalState>({
    show: false,
    src: null,
  })

  function openImageModal(src: string) {
    state.value.src = src
    state.value.show = true
  }

  function closeImageModal() {
    state.value.show = false
    state.value.src = null
  }

  return {
    showImageModal: state,
    modalImageSrc: state.value.src,
    openImageModal,
    closeImageModal,
  }
}
