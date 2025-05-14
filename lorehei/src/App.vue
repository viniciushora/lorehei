<script setup lang="ts">
import { ref, watch } from 'vue'
import MainCard from '@/components/MainCard.vue'
import SideCard from '@/components/SideCard.vue'
import { useMainCardPosition } from '@/stores/useMainCardPosition'

const { isAtTop, animationDone, finishAnimation } = useMainCardPosition()

const showSideCard = ref(false)
const selectedItemId = ref<number | null>(null)

const sideCardData = ref({
  title: '',
  content: '',
  image: null as string | null,
  textAlign: '',
})

function handleItemSelected(itemId: number) {
  selectedItemId.value = itemId
  showSideCard.value = true

  const dataMap = {
    1: { 
      title: 'DESCRIÇÃO',
      content: `
        <b>Lorehei</b> é um espírito elemental da água, com um corpo gracioso, chifres, cauda e asas. Sua presença traz companhia, sorte e alegria ao contratante.<br>
        Ela é uma excelente confidente, sempre disposta a conversar e oferecer conselhos. Sua energia tem o poder de elevar o estado de ânimo, proporcionando conforto e bem-estar. Além disso, pode ser evocada para favorecer a sorte em situações específicas ou em diferentes aspectos da vida.<br>
        De natureza amigável e suave, Lorehei não exige rituais complexos para ser evocada. Sua chamada pode ocorrer de maneira espontânea, a qualquer hora do dia e em qualquer lugar, tornando sua presença acessível sempre que desejado.<br>
      `,
      image: '/public/lorehei.png',
      textAlign: 'justify',
    },
    2: {
      title: 'CARACTERÍSTICAS',
      content: `
        <b>Nome</b>: Lorehei<br>
        <b>Aparência</b>: Uma mulher formosa de cabelos longos e com chifres, cauda e asas<br>
        <b>Personalidade</b>: Bem intencionada, mas irreverente e despreocupada<br>
        <b>Poderes</b>: Companhia, sorte e alegria<br>
        <b>Tipo</b>: Espírito Elemental<br>
        <b>Elemento</b>: Água<br>
        <b>Energia</b>: Neutra tendendo para sutil<br>
        <b>Incensos</b>: Mirra a sândalo<br>
        <b>Cores</b>: Rosa, branco e vermelho<br>
      `,
      image: '/lorehei.png',
      textAlign: 'left',
    },
    3: {
      title: 'ARQUÉTIPOS',
      content: `
        <b>Planeta</b>: Vênus<br>
        <b>Tarot</b>: Força<br>
        <b>Número</b>: 49<br>
        <b>Sephiroth</b>: Tiphereth<br>
      `,
      image: '/venus.png',
      textAlign: 'left',
    },
    4: {
      title: 'FORMA DE ATIVAÇÃO',
      content: `
        Para ativar Lorehei, basta acender um incenso de mirra ou sândalo e entrar em um estado alterado de consciência por meio da meditação ou qualquer técnica de gnose. Em seguida, visualize seu sigilo, que se encontra acima.<br>
        A percepção de sua presença pode variar de acordo com sua capacidade de visualização. Alguns poderão vê-la no ambiente, enquanto outros sentirão sua energia ou uma sutil presença ao redor. Caso não perceba nada, não se preocupe — seus efeitos ainda estarão em ação.<br>
        Durante sua interação, você pode fazer um pedido ou simplesmente continuar a visualização do sigilo, absorvendo sua influência positiva para o ânimo e o bem-estar.<br>
        Ao concluir, lembre-se de agradecer a Lorehei e conceder-lhe permissão para se retirar.`,
      image: '/lorehei-sigilo.jpg',
      textAlign: 'justify', },
    5: {
      title: 'ALIMENTAÇÃO',
      content: `
        Lorehei se alimenta de estados de presença e gratidão. Sua energia é sustentada por momentos de conexão genuína, quando você se permite mergulhar no agora e reconhecer sua influência sutil em sua vida.<br>
        Para alimentá-la, acenda um incenso de mirra ou sândalo — aromas que purificam o ambiente e favorecem a elevação espiritual. Em seguida, entre em um estado alterado de consciência por meio da meditação, da respiração consciente ou de qualquer técnica de gnose que o aproxime de sua essência.<br>
        Visualize seu sigilo com clareza, como se ele brilhasse suavemente diante de você. Emane sentimentos de gratidão, serenidade e alegria, pois são essas emoções que nutrem Lorehei e fortalecem seu vínculo com você. A cada respiração profunda, permita que a presença dela se intensifique — seja por imagens, sensações ou uma paz inexplicável no ambiente.<br>
        Você pode dizer em voz alta ou mentalmente palavras de agradecimento, ou apenas permanecer em silêncio, permitindo que o fluxo de energia se complete.<br>
      `,
      image: null,
      textAlign: 'justify',
    },
    6: {
      title: 'BANIMENTO',
      content: `
        Para banir Lorehei, basta a agradecer por seus serviços e dar-lhe a permissão para se retirar do local. Caso o contratante sinta necessidade, pode realizar o banimento de sua preferência.
      `,
      image: null,
      textAlign: 'justify',
    },
  }

  sideCardData.value = dataMap[itemId] || { title: 'Erro', content: 'Item não encontrado.', image: null }
}

watch(isAtTop, (newVal) => {
  if (newVal) {
    showSideCard.value = true
  }
})

const showImageModal = ref(false)
const modalImageSrc = ref<string | null>(null)

function onImageClick(imageSrc: string) {
  modalImageSrc.value = imageSrc
  showImageModal.value = true
}

function closeModal() {
  showImageModal.value = false
  modalImageSrc.value = null
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="cards-container">
          <MainCard @itemSelected="handleItemSelected" />
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
    <div v-if="showImageModal" class="modal-overlay" @click.self="closeModal">
      <img :src="modalImageSrc" class="modal-img" />
      <button class="close-button" @click="closeModal">×</button>
    </div>
  </div>
</template>
