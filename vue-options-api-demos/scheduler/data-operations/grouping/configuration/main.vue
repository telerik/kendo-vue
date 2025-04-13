<template>
    <Scheduler
        :style="{height: '700px'}"
        :data-items="data"
        :default-date="defaultDate"
        :views="views"
        :group="group"
        :resources="resources"
        :timezone="'Etc/UTC'"
    ></Scheduler>
</template>
<script>
import { Scheduler } from '@progress/kendo-vue-scheduler';
import { data, defaultDate } from './data';

export default {
    components: {
        Scheduler,
    },
    data() {
        return {
            views: [{ name: 'day', title: 'Day' }],
            data,
            defaultDate,
            group: {
                resources: ['Rooms', 'Person'],
                orientation: 'horizontal',
            },
            resources: [
                {
                    name: 'Rooms',
                    data: [
                        { text: 'Meeting Room 101', value: 1, color: '#5392E4' },
                        { text: 'Meeting Room 201', value: 2, color: '#FF7272' },
                    ],
                    field: 'roomId',
                    valueField: 'value',
                    textField: 'text',
                    colorField: 'color',
                },
                {
                    name: 'Person',
                    data: [
                        { text: 'Peter', value: 1 },
                        { text: 'Alex', value: 2 },
                    ],
                    field: 'personId',
                    valueField: 'value',
                    textField: 'text',
                    colorField: 'color',
                },
            ],
        };
    },
};
</script>
