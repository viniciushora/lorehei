<template>
  <div
    v-if="showGsapModal"
    ref="modalRef"
    class="gsap-modal-overlay"
    @click.self="closeModal"
  >
    <div class="gsap-modal-content">
      <button class="modal-close-btn" @click="closeModal">×</button>
      <div class="rotating-image-wrapper">
        <img src="/caosfera-high.png" class="rotating-bg" />
        <img :src="props.sigil" class="center-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { showGsapModal, modalRef, closeModal, useProps } from '@/logic/MeditationTool'

const props = defineProps(useProps)
</script>

<style src="@/styles/MeditationTool.css"></style>