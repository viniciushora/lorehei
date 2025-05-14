<script setup lang="ts">

defineProps<{
    title: string
    content: string
    image: string | null,
    textAlign: string,
    onImageClick: (src: string) => void
}>()
</script>

<template>
  <div class="side-card">
    <h1>{{ title }}</h1>

    <div class="image-wrapper" v-if="image" @click="onImageClick(image)">
        <img :src="image" class="clickable-img" />
    </div>

    <p v-html="content" :style="{ textAlign: textAlign }"></p>
  </div>
</template>

<style scoped src="@/styles/SideCard.css"></style>