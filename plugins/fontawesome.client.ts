import { library } from "@fortawesome/fontawesome-svg-core"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLinkedinIn, faInstagram, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faArrowUp, faBarsStaggered, faLink, faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(
    faLinkedinIn,
    faInstagram,
    faGithubAlt,
    faBarsStaggered,
    faXmark,
    faArrowUp,
    faLink
)

export default defineNuxtPlugin(( nuxtApp ) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})