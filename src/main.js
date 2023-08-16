import { createApp } from 'vue'
import './styles/fonts.css'
import './styles/index.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faCalendar, faDownload)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
