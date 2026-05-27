import { createApp } from "vue";
import App from "./main.vue";
import router from "./index.js";
import "./styles.css";

createApp(App).use(router).mount("#app");
