<template>
    <div>
      <button @click="scrollTo">Scroll to 1:00 PM</button>
      <Scheduler
        ref="scheduler"
        :style="{ height: '700px' }"
        :data-items="sampleData"
        :default-date="displayDate"
        :views="views"
      />
    </div>
  </template>

<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from './events-utc';

export default {
    components: {
        Scheduler,
    },
    data() {
        return {
            sampleData,
            displayDate,
            views: [
                { name: 'day', title: 'Day' },
                { name: 'week', title: 'Week' },
                { name: 'workweek', title: 'Work week' },
                { name: 'month', title: 'Month' },
                { name: 'agenda', title: 'Agenda' },
            ],
        };
    },
    methods: {
        scrollTo() {
            const group = Array.from(
                document.querySelectorAll('.k-scheduler-group')
            ).find(
                (el) =>
                    el.querySelector('.k-major-cell')?.textContent?.trim() === '1:00 PM'
            );

            const layout = document.querySelector('.k-scheduler-layout');

            if (group && layout) {
                layout.scrollTo({ top: group.offsetTop, behavior: 'smooth' });
            }
        },
    },
};
</script>
