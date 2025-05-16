<script setup lang="ts">
import { defineProps } from 'vue'
import { useCardProps, useSideCard } from '@/logic/SideCard'

const props = defineProps(useCardProps)
const { handleClick, alignStyle } = useSideCard(props)
</script>

<template>
  <div class="side-card">
    <h1>{{ props.title }}</h1>

    <div class="image-wrapper" v-if="props.image" @click="handleClick">
      <img :src="props.image" class="clickable-img" />
    </div>

    <p v-html="props.content" :style="alignStyle"></p>
  </div>
</template>

<style scoped src="@/styles/SideCard.css"></style>
