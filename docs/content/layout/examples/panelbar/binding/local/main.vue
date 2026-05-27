<template>
  <div class="panelbar-wrapper">
    <PanelBar :expand-mode="'single'" :items="items">
      <template #first>
        <div style="padding: 10px">First Item Template</div>
      </template>
    </PanelBar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const items = ref([
    { title: 'First item', content: 'first', expanded: true },
    {
        title: 'Second item',
        items: [{ title: 'Second item child item' }],
    },
]);
</script>
