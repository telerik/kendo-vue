import { createApp } from 'vue'
// Import our custom CSS
import './assets/styles/app.scss'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
