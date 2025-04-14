<template>
    <Scheduler
        :style="{height: '700px'}"
        :data-items="sampleData"
        :default-date="displayDate"
        :views="views"
    ></Scheduler>
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
            views: [
                { name: 'day', title: "Day" },
                { name: 'week', title: "Week" },
                { name: 'workweek', title: "Work week" },
                { name: 'month', title: "Month" },
                { name: 'agenda', title: "Agenda" },
            ],
            sampleData,
            displayDate,
        };
    },
};
</script>
