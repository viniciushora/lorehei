<!-- src/components/ImageModal.vue -->
<template>
  <div v-if="visible" class="modal-overlay" @click.self="onClose">
    <img :src="src" class="modal-img" />
    <button class="close-button" @click="onClose">×</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
    visible: boolean
    src: string | null
    onClose: () => void
}>()
</script>

<style scoped src="@/styles/ImageModal.css"></style>
