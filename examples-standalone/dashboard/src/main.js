import { createApp } from 'vue'
import '@progress/kendo-theme-meridian/dist/all.css'
import './scss/styles.scss'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
