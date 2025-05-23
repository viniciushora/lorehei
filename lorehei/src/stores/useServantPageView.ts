import { defineStore } from 'pinia'
import { ref } from 'vue'
import { openModal } from '@/logic/MeditationTool'
import { useImageModal } from '@/stores/useImageModal'
import type { SideCardData, MainCardData, ServantItem, ServantDataMap } from '@/models/ServantPageView'

export const useServantPageView = defineStore('servantPageView', () => {
  
    const showSideCard = ref(false)
    const selectedItemId = ref<number | null>(null)

    const sideCardData = ref<SideCardData>({
        title: '',
        content: '',
        image: null,
        textAlign: '',
    })

    const mainCardData = ref<MainCardData>({
        title: '',
        subtitle: '',
        image: '',
        sigil: '',
        background: '',
    })

    const dataMap = ref<ServantDataMap>({})

    const isLoading = ref(false)
    const loadError = ref<string | null>(null)

    const imageModal = useImageModal()

    function loadServantData(data: ServantItem[]) {
        const map: ServantDataMap = {}
        data.forEach(item => {
        map[item.id] = {
            title: item.title,
            content: item.content,
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
            title: 'Erro',
            content: 'Item não encontrado.',
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
    }
})
