import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import './styles/themes.scss'
import './utils/particle-swarm'
import 'animate.css';
import "@lottiefiles/lottie-player";


import {library} from '@fortawesome/fontawesome-svg-core'
import { faArrowUp, faBars, faMoon, faSun, faDownload, faLocationDot, faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowUp, faBars, faMoon, faSun, faDownload, faLocationDot, faPhone, faEnvelope, faWhatsapp, faCopyright, faLinkedin, faGithub)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
