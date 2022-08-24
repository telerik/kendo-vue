import { createApp } from 'vue'
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
