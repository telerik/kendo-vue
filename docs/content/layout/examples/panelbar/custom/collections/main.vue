<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template #first>
        <div class="custom-template">First item content</div>
      </template>
    </PanelBar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const items = ref([
    {
        title: 'First item',
        content: 'first',
    },
    {
        title: 'Second item',
        items: [
            {
                title: 'Child item',
            },
        ],
    },
]);
</script>
