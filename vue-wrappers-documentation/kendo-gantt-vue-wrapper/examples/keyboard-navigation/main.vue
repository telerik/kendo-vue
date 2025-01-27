<template>
<div>
    <gantt id="gantt"
            :height="'500'"
            :editable-create="'false'"
            :data-source="datasource"
            :navigatable="true"
            :dependencies="dependencydatasource">
    </gantt>
</div>
</template>
<script>
import { Gantt } from '@progress/kendo-gantt-vue-wrapper';

export default {
    name: 'App',
    components: {
      'gantt': Gantt
    },
    data: function() {
        return {            
            datasource: [{
                id: 0,
                orderId: 0,
                parentId: null,
                title: "Main Project",
                summary: true,
                expanded: true,
                percentComplete: 0.3,
                start: new Date("2014/6/17 9:00"),
                end: new Date("2014/7/01 11:00")
            },
            {
                id: 1,
                orderId: 1,
                parentId: 0,
                title: "Task1",
                percentComplete: 0.47,
                start: new Date("2014/6/17 11:00"),
                end: new Date("2014/6/20 14:00")
            },
                {
                id: 2,
                orderId: 2,
                parentId: 0,
                title: "Task2",
                percentComplete: 0.5,
                start: new Date("2014/6/19 11:00"),
                end: new Date("2014/6/22 14:00")
            },
            {
                id: 3,
                orderId: 3,
                parentId: null,
                title: "Second Project",
                summary: true,
                expanded: true,
                percentComplete: 0.2,
                start: new Date("2014/6/19 11:00"),
                end: new Date("2014/6/22 14:00")
            },
            {
                id: 4,
                orderId: 4,
                parentId: 3,
                title: "Task1",
                percentComplete: 0.5,
                start: new Date("2014/6/19 11:00"),
                end: new Date("2014/6/22 14:00")
            }],
            dependencydatasource: [{
                predecessorId: 1,
                successorId: 2,
                type: 1
            }]
        }
    }
}
</script>
