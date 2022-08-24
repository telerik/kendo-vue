import { createApp } from 'vue'
// import '@progress/kendo-theme-bootstrap'
// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import router from "./index.js";

import App from './App.vue'

createApp(App).use(router).mount('#app')
