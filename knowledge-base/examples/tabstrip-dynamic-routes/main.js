import { createApp } from 'vue';
import App from './main.vue';
import TabOne from './TabOne.vue';
import TabTwo from './TabTwo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/tab1',
    name: 'Tab1',
    component: TabOne,
  },
  {
    path: '/tab2',
    name: 'Tab2',
    component: TabTwo,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

createApp(App).use(router).mount('#app');
