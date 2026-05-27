<template>
  <div>
    <Scheduler
      :data-items="sampleData"
      :default-date="displayDate"
      :view="view"
      :views="views"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

const view = ref('month');
const views = ref([
    {
        name: 'month',
        title: 'Month',
        selectedDateFormat: '{0:M}',
        selectedShortDateFormat: '{0:M}',
    },
]);
</script>
