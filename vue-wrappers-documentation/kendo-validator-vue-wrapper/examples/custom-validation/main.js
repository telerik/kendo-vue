import { createApp } from 'vue'
import App from './main.vue'
import { ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'

const app = createApp(App)
app.use(ValidatorInstaller)
app.mount('#app')

