<script setup lang="ts">
import { ref, watch } from 'vue'
import MainCard from '@/components/MainCard.vue'
import SideCard from '@/components/SideCard.vue'
import { useMainCardPosition } from '@/stores/useMainCardPosition'

const { isAtTop, animationDone, finishAnimation } = useMainCardPosition()

const showSideCard = ref(false)

watch(isAtTop, (newVal) => {
  if (newVal) {
    showSideCard.value = true
  }
})

function onSideCardTransitionEnd() {
  finishAnimation()
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="cards-container">
          <MainCard />
          <SideCard v-if="showSideCard"/>
        </div>
      </div>
    </div>
  </div>
</template>