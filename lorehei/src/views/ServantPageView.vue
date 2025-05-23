<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useBackgroundStore } from '@/stores/useBackgroundStore'
import { useServantPageView } from '@/stores/useServantPageView'

import MainCard from '@/components/MainCard.vue'
import SideCard from '@/components/SideCard.vue'
import MeditationTool from '@/components/MeditationTool.vue'
import ImageModal from '@/components/ImageModal.vue'

const props = defineProps<{
  jsonName: string
}>()

const servantPageView = useServantPageView()
const backgroundStore = useBackgroundStore()

onMounted(() => {
  servantPageView.loadServantInfoFromJson(props.jsonName)
  servantPageView.loadServantMenuFromJson(props.jsonName)
})

watch(
  () => servantPageView.mainCardData.background,
  (newBg) => {
    if (!servantPageView.isLoading && newBg) {
      if (document.body.style.backgroundImage !== `url("${newBg}")`) {
        backgroundStore.setBackground(newBg)
        document.body.style.backgroundImage = `url("${newBg}")`
        document.body.style.backgroundSize = 'cover'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundAttachment = 'fixed'
        document.body.style.backgroundPosition = 'center'
      }
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  backgroundStore.clearBackground()
  document.body.style.backgroundImage = ''
})
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="cards-container">
          <MainCard
            @itemSelected="servantPageView.handleItemSelected"
            @chaosphereClick="servantPageView.openChaosphereModal"
            :title="servantPageView.mainCardData.title"
            :subtitle="servantPageView.mainCardData.subtitle"
            :image="servantPageView.mainCardData.image"
          />
          <SideCard
            v-if="servantPageView.showSideCard"
            :title="servantPageView.sideCardData.title"
            :content="servantPageView.sideCardData.content"
            :image="servantPageView.sideCardData.image"
            :textAlign="servantPageView.sideCardData.textAlign"
            :onImageClick="servantPageView.imageModal.openImageModal"
          />
        </div>
      </div>
    </div>

    <ImageModal
      :visible="servantPageView.imageModal.showImageModal"
      :src="servantPageView.imageModal.modalImageSrc"
      :onClose="servantPageView.imageModal.closeImageModal"
    />

    <MeditationTool 
      :sigil="servantPageView.mainCardData.sigil"
    />
  </div>
</template>

<style src="@/styles/ServantPageView.css"></style>
