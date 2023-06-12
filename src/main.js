import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')
