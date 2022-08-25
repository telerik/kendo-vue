import { createApp } from 'vue'
// Import our custom CSS
import './scss/styles.scss'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
