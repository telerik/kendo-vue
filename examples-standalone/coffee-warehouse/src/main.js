import { createApp } from 'vue'
import "@progress/kendo-theme-meridian/dist/all.css";
import './assets/styles/app.scss'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
