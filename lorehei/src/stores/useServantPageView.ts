import { defineStore } from 'pinia'
import { ref } from 'vue'
import { openModal } from '@/logic/MeditationTool'
import { useImageModal } from '@/stores/useImageModal'
import type { SideCardData, MainCardData, ServantItem, ServantDataMap } from '@/models/ServantPageView'
import { useLanguageStore } from '@/stores/useLanguageStore'
import { computed } from 'vue'

export const useServantPageView = defineStore('servantPageView', () => {
    const languageStore = useLanguageStore()
  
    const showSideCard = ref(false)
    const selectedItemId = ref<number | null>(null)

    const sideCardData = ref<SideCardData>({
        title: '',
        titlePt: '',
        titleEn: '',
        content: '',
        contentPt: '',
        contentEn: '',
        image: null,
        textAlign: '',
    })

    const mainCardData = ref<MainCardData>({
        title: '',
        subtitle: '',
        subtitlePt: '',
        subtitleEn: '',
        image: '',
        sigil: '',
        background: '',
    })

    const dataMap = ref<ServantDataMap>({})

    const isLoading = ref(false)
    const loadError = ref<string | null>(null)

    const imageModal = useImageModal()

    const mainCard = computed(() => ({
        ...mainCardData.value,
        subtitle: languageStore.currentLanguage === 'pt' 
            ? mainCardData.value.subtitlePt 
            : mainCardData.value.subtitleEn
    }))

    const sideCard = computed(() => {
        if (selectedItemId.value === null) return sideCardData.value
        const item = dataMap.value[selectedItemId.value]
        if (!item) return sideCardData.value
        return {
            ...sideCardData.value,
            title: languageStore.currentLanguage === 'pt' ? item.titlePt : item.titleEn,
            content: languageStore.currentLanguage === 'pt' ? item.contentPt : item.contentEn,
        }
    })

    function loadServantData(data: ServantItem[]) {
        const map: ServantDataMap = {}
        data.forEach(item => {
        map[item.id] = {
            title: '',
            titlePt: item.titlePt,
            titleEn: item.titleEn,
            content: '',
            contentPt: item.contentPt,
            contentEn: item.contentEn,
            image: item.image,
            textAlign: item.textAlign,
        }
        })
        dataMap.value = map
    }

    async function loadServantInfoFromJson(jsonName: string) {
        isLoading.value = true
        loadError.value = null
        try {
            const module = await import(`@/json/${jsonName}/info.json`)
            loadServantData(module.default)
        } catch (err) {
            console.error(err)
            loadError.value = 'Erro ao carregar os dados.'
        } finally {
            isLoading.value = false
        }
    }
  
    function loadServantMenuData(data: MainCardData) {
        mainCardData.value = data
    }

    async function loadServantMenuFromJson(jsonName: string) {
        isLoading.value = true
        loadError.value = null
        try {
            const module = await import(`@/json/${jsonName}/menu.json`)
            loadServantMenuData(module.default)
        } catch (err) {
            console.error(err)
            loadError.value = 'Erro ao carregar os dados.'
        } finally {
            isLoading.value = false
        }
    }

    function handleItemSelected(itemId: number) {
        selectedItemId.value = itemId
        showSideCard.value = true

        const item = dataMap.value[itemId]
        sideCardData.value = item || {
            title: '',
            titlePt: 'Erro',
            titleEn: 'Error',
            content: '',
            contentPt: 'Item não encontrado.',
            contentEn: 'Item not found.',
            image: null,
            textAlign: 'left',
        }
    }

    function onImageClick(imageSrc: string) {
        imageModal.openImageModal(imageSrc)
    }

    function closeModal() {
        imageModal.closeImageModal()
    }

    function openChaosphereModal() {
        openModal()
    }

    function updateLanguage(lang: string) {
        languageStore.setLanguage(lang)
    }

    return {
        showSideCard,
        selectedItemId,
        sideCardData,
        mainCardData,
        handleItemSelected,
        onImageClick,
        closeModal,
        openChaosphereModal,
        imageModal,
        loadServantInfoFromJson,
        loadServantMenuFromJson,
        isLoading,
        loadError,
        updateLanguage,
        mainCard,
        sideCard,
    }
})
