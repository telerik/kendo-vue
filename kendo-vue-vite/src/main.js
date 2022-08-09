import { createApp } from 'vue'
import router from "./router";
import App from './App.vue';
import "@progress/kendo-theme-default";

createApp(App).use(router).mount('#app')
