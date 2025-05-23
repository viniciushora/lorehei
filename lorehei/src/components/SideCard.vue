<script setup lang="ts">
import { useCardProps, useSideCardContent } from '@/logic/SideCard'

const props = defineProps(useCardProps)
const { handleClick, alignStyle, contentKey } = useSideCardContent(props)
</script>

<template>
  <div class="side-card">
    <transition name="fade-content" mode="out-in">
      <div :key="contentKey">
        <h1>{{ props.title }}</h1>

        <div class="image-wrapper" v-if="props.image" @click="handleClick">
          <img :src="props.image" class="clickable-img" />
        </div>

        <p v-html="props.content" :style="alignStyle"></p>
      </div>
    </transition>
  </div>
</template>

<style scoped src="@/styles/SideCard.css"></style>
