// useBackgroundStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBackgroundStore = defineStore('background', () => {
  const currentBackground = ref('')

  function setBackground(url: string) {
    currentBackground.value = url
  }

  function clearBackground() {
    currentBackground.value = ''
  }

  return { currentBackground, setBackground, clearBackground }
})
