import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap';
import './styles/themes.scss'

import {library} from '@fortawesome/fontawesome-svg-core'
import { fas,faMoon } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas,far,fab,faMoon)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
