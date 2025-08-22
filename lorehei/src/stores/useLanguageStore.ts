// src/stores/useLanguageStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref('pt') // idioma padrão

  function setLanguage(lang: string) {
    currentLanguage.value = lang
    localStorage.setItem('lang', lang) // opcional: persiste a escolha
  }

  function loadLanguage() {
    const saved = localStorage.getItem('lang')
    if (saved) currentLanguage.value = saved
  }

  return { currentLanguage, setLanguage, loadLanguage }
})