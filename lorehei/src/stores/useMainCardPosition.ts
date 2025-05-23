import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainCardPosition = defineStore('mainCardPosition', () => {
  const isAtTop = ref(false)
  const animationDone = ref(false)

  function moveMainCardToTopOnce() {
    if (!isAtTop.value) {
      isAtTop.value = true
    }
  }

  function finishAnimation() {
    animationDone.value = true
  }

  function reset() {
    isAtTop.value = false
    animationDone.value = false
  }

  return {
    isAtTop,
    animationDone,
    moveMainCardToTopOnce,
    finishAnimation,
    reset,
  }
})
