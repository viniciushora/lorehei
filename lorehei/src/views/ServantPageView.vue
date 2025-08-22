<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import { useBackgroundStore } from '@/stores/useBackgroundStore'
import { useLanguageStore } from '@/stores/useLanguageStore'
import { useServantPageView } from '@/stores/useServantPageView'

import MainCard from '@/components/MainCard.vue'
import SideCard from '@/components/SideCard.vue'
import MeditationTool from '@/components/MeditationTool.vue'
import ImageModal from '@/components/ImageModal.vue'
import LanguagePicker from '@/components/LanguagePicker.vue'

const props = defineProps<{
  jsonName: string
}>()

const servantPageView = useServantPageView()
const backgroundStore = useBackgroundStore()
const languageStore = useLanguageStore()

watch(
  () => languageStore.currentLanguage,
  (lang) => {
    servantPageView.updateLanguage(lang)
  }
)

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

console.log(languageStore.currentLanguage);
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-11 col-lg-11"></div>
      <div class="col-md-1 col-lg-1">
        <div class="language-picker-col">
          <LanguagePicker></LanguagePicker>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12 col-lg-12">
        <div class="cards-container">
          <MainCard
            @itemSelected="servantPageView.handleItemSelected"
            @chaosphereClick="servantPageView.openChaosphereModal"
            :title="servantPageView.mainCard.title"
            :subtitle="servantPageView.mainCard.subtitle"
            :image="servantPageView.mainCard.image"
            :lang="languageStore.currentLanguage"
          />
          <SideCard
            v-if="servantPageView.showSideCard"
            :title="servantPageView.sideCard.title"
            :content="servantPageView.sideCard.content"
            :image="servantPageView.sideCard.image"
            :textAlign="servantPageView.sideCard.textAlign"
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
