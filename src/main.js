import { createApp } from 'vue'
import App from './App.vue'

import './styles/fonts.css'
import './styles/index.css'
import '@vuepic/vue-datepicker/dist/main.css'


import VueDatePicker from '@vuepic/vue-datepicker';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDownload, faUsers, faLocationDot, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faBuilding, faUser } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faCalendar, faDownload, faBuilding, faUsers, faUser, faLocationDot, faMagnifyingGlass)

createApp(App)
    .component('VueDatePicker', VueDatePicker)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
