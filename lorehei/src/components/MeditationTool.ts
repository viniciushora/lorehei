import { ref, nextTick } from 'vue'
import { gsap } from 'gsap'

export const showGsapModal = ref(false)
export const modalRef = ref<HTMLElement | null>(null)

export function openModal() {
  showGsapModal.value = true
  nextTick(() => {
    if (modalRef.value) {
      gsap.set(modalRef.value, { display: 'flex', opacity: 0 })
      gsap.to(modalRef.value, { opacity: 1, duration: 0.5, ease: 'power2.out' })

      const rotatingEl = modalRef.value.querySelector('.rotating-bg')
      if (rotatingEl) {
        gsap.to(rotatingEl, {
          rotation: 360,
          duration: 2,
          ease: 'linear',
          repeat: -1,
          modifiers: {
            rotation: (rot) => `${parseFloat(rot) % 360}deg`
          }
        })

        gsap.to(rotatingEl, {
          scale: 1.2,
          opacity: 1,
          duration: 2,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        })
      }
    }
  })
}

export function closeModal() {
  if (!modalRef.value) return

  gsap.to(modalRef.value, {
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      if (modalRef.value) {
        gsap.set(modalRef.value, { display: 'none' })

        const rotatingEl = modalRef.value.querySelector('.rotating-bg')
        if (rotatingEl) {
          gsap.killTweensOf(rotatingEl)
          gsap.set(rotatingEl, { clearProps: 'all' })
        }
      }
      showGsapModal.value = false
    }
  })
}
