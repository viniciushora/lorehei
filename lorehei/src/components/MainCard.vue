<script setup lang="ts">
import { useMainCardProps, useMainCard } from '@/logic/MainCard'
import MenuList from '@/components/MenuList.vue'

const props = defineProps(useMainCardProps)
const emit = defineEmits(['itemSelected', 'chaosphereClick'])

const { itemClick, chaosphereClicked, itens } = useMainCard(emit)
</script>

<template>
  <div class="container-fluid main-card">
    <div class="row">
      <div class="container-fluid upper-container">
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 center-text">
            <h1>{{ props.title }}</h1>
          </div>
          <div class="col-md-2" />
        </div>
        <div class="row">
          <div class="col-md-2" />
          <div class="col-md-8 center-text">
            <h2>{{ props.subtitle }}</h2>
          </div>
          <div class="col-md-2" />
        </div>
        <div class="row img-row">
          <div class="col-md-2" />
          <div class="col-md-8 center-text">
            <img :src="props.image" :alt="props.title" class="img-fluid" />
          </div>
          <div class="col-md-2" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="container-fluid list-container">
        <div class="row">
          <div class="col-md-12 p-0">
            <MenuList :itens="itens" :onItemClick="itemClick" />
          </div>
        </div>
      </div>
    </div>
    <div class="row meditation-row">
      <div class="col-md-12 meditation-col">
        <img
          class="chaosphere"
          src="/caosfera.png"
          @click="chaosphereClicked"
        />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/styles/MainCard.css"></style>
