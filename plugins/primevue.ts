import PrimeVue from 'primevue/config'
import AnimateOnScroll from 'primevue/animateonscroll'
import Timeline from 'primevue/timeline'
import Carousel from 'primevue/carousel'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {
        ripple: true
    })
    nuxtApp.vueApp.component("Timeline", Timeline)
    nuxtApp.vueApp.component("Carousel", Carousel)
    nuxtApp.vueApp.directive("animateonscroll", AnimateOnScroll)
})