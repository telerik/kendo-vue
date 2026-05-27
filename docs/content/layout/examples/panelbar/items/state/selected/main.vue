<template>
  <div class="panelbar-wrapper">
    <PanelBar :items="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const items = ref([
    { title: 'Team' },
    { title: 'Projects', selected: true },
    { title: 'Programs' },
    { title: 'Communication' },
]);
</script>
