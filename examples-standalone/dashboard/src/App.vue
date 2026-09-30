<template>
  <link v-if="selectedTheme !== 'meridian'" rel="stylesheet" :href="themeStyles[selectedTheme]" />
  <RouterView v-if="isStandalone" />
  <MenuComponent v-else :theme="selectedTheme" @theme-change="changeTheme" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import MenuComponent from './components/MenuComponent.vue';
import defaultTheme from '@progress/kendo-theme-default/dist/all.css?url';
import bootstrapTheme from '@progress/kendo-theme-bootstrap/dist/all.css?url';
import materialTheme from '@progress/kendo-theme-material/dist/all.css?url';

const themeStyles = { default: defaultTheme, bootstrap: bootstrapTheme, material: materialTheme };
const route = useRoute();
const isStandalone = computed(() => ['Login', 'Register', 'NotFound'].includes(String(route.name)));
const storedTheme = localStorage.getItem('dashboard-theme');
const selectedTheme = ref(storedTheme && ['meridian', ...Object.keys(themeStyles)].includes(storedTheme) ? storedTheme : 'meridian');

function changeTheme(theme: string) {
  selectedTheme.value = theme;
  localStorage.setItem('dashboard-theme', theme);
}
</script>
