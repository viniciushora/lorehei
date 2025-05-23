import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { ImageModalState } from '@/models'

export const useImageModal = defineStore('imageModal', () => {
  const state = ref<ImageModalState>({
    show: false,
    src: null,
  })

  const showImageModal = computed(() => state.value.show)
  const modalImageSrc = computed(() => state.value.src)

  function openImageModal(src: string) {
    state.value.src = src
    state.value.show = true
  }

  function closeImageModal() {
    state.value.show = false
    state.value.src = null
  }

  return {
    state,
    showImageModal,
    modalImageSrc,
    openImageModal,
    closeImageModal,
  }
})

