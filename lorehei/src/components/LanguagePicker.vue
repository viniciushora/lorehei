<template>
  <div class="language-card">
    <img 
      src="/brazil.png" 
      alt="Português" 
      class="flag" 
      @click="setLanguage('pt')" 
    />
    <img 
      src="/united-states.png" 
      alt="English" 
      class="flag" 
      @click="setLanguage('en')" 
    />
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '@/stores/useLanguageStore'

const languageStore = useLanguageStore()

function setLanguage(lang: string) {
  languageStore.setLanguage(lang)
}
</script>

<style scoped src="@/styles/LanguagePicker.css"></style>
