<template>
  <div class="panelbar-wrapper">
    <PanelBar expand-mode="single" :items="items" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import './panelbar-styles.css';

const items = ref([
    {
        title: 'Projects',
        items: [
            { title: 'New Business Plan' },
            {
                title: 'Sales Forecasts',
                items: [
                    { title: 'Q1 Forecast' },
                    { title: 'Q2 Forecast' },
                    { title: 'Q3 Forecast' },
                    { title: 'Q4 Forecast' },
                ],
            },
            { title: 'Sales Reports' },
        ],
    },
    {
        title: 'Programs',
        items: [
            { title: 'Monday' },
            { title: 'Tuesday' },
            { title: 'Wednesday' },
            { title: 'Thursday' },
            { title: 'Friday' },
        ],
    },
    { title: 'Communication', disabled: true },
]);
</script>
