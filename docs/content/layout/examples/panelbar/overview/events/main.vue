<template>
  <div>
    <div class="panelbar-wrapper">
      <PanelBar :expand-mode="'single'" :items="items" @select="onSelect" />
    </div>
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PanelBar } from '@progress/kendo-vue-layout';
import Logger from './Logger.vue';
import './styles.css';

const events = ref([]);
const items = ref([
    {
        title: 'Sales Forecasts',
        items: [
            { title: 'Q1 Forecast' },
            { title: 'Q2 Forecast' },
            { title: 'Q3 Forecast' },
            { title: 'Q4 Forecast' },
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
]);

const onSelect = (event) => {
    events.value.unshift('Item ' + event.target.title + ' was selected.');
};
</script>
