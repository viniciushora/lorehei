<script setup lang="ts">
import { useAppLogic } from '@/composables/useApp'
import MainCard from '@/components/MainCard.vue'
import SideCard from '@/components/SideCard.vue'
import MeditationTool from '@/components/MeditationTool.vue'
import ImageModal from '@/components/ImageModal.vue'

const {
  showSideCard,
  sideCardData,
  handleItemSelected,
  showImageModal,
  onImageClick,
  closeModal,
  openChaosphereModal,
} = useAppLogic()
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="cards-container">
          <MainCard
            @itemSelected="handleItemSelected"
            @chaosphereClick="openChaosphereModal"
          />
          <SideCard
            v-if="showSideCard"
            :title="sideCardData.title"
            :content="sideCardData.content"
            :image="sideCardData.image"
            :textAlign="sideCardData.textAlign"
            :onImageClick="onImageClick"
          />
        </div>
      </div>
    </div>
    
    <ImageModal
      :visible="showImageModal.show"
      :src="showImageModal.src"
      :onClose="closeModal"
    />

    <MeditationTool />
  </div>
</template>
