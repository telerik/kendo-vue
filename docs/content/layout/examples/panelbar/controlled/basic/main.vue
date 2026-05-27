<template>
  <div class="panelbar-wrapper">
    <PanelBar
      :expand-mode="'multiple'"
      :items="items"
      :expanded="expanded"
      :selected="selected"
      :focused="focused"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './styles.css';

const selected = ref('.0');
const focused = ref('.1.0');
const expanded = ref(['.1', '.1.1']);
const items = ref([
    {
        title: '.0',
        items: [
            { title: '.0.0' },
            { title: '.0.1' },
            { title: '.0.2' },
        ],
    },
    {
        title: '.1',
        items: [
            { title: '.1.0' },
            {
                title: '.1.1',
                items: [
                    { title: '.1.1.0' },
                    { title: '.1.1.1' },
                    { title: '.1.1.2' },
                    { title: '.1.1.3' },
                ],
            },
            { title: '.1.2' },
        ],
    },
    { title: '.2', disabled: true },
]);
</script>
