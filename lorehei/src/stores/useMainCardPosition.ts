import { ref } from 'vue'

const isAtTop = ref(false)
const animationDone = ref(false)

export function useMainCardPosition() {
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
}
