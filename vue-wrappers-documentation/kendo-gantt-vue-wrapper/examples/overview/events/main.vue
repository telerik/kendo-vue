<template>
<div>
    <gantt id="gantt"
            :height= 500
            v-on:databinding="onDataBinding"
            v-on:databound="onDataBound"
            :editable-create='false'
            :data-source="localdatasource">
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
    methods: {
        onDataBinding: function (ev) {
            console.log("Gantt is about to be bound!");
        },
        onDataBound: function (ev) {
            console.log("Gantt is now bound!");
        }
    },
    data: function() {
        return {
            localdatasource: [{
                id: 0,
                orderId: 0,
                parentId: null,
                title: "Main Project",
                summary: true,
                expanded: true,
                start: new Date("2014/6/17 9:00"),
                end: new Date("2014/6/17 15:00")
            },
            {
                id: 1,
                orderId: 1,
                parentId: 0,
                title: "Task1",
                percentComplete: 0.47,
                start: new Date("2014/6/17 09:00"),
                end: new Date("2014/6/17 12:00")
            },
                {
                id: 2,
                orderId: 2,
                parentId: 0,
                title: "Task2",
                percentComplete: 0.5,
                start: new Date("2014/6/17 09:30"),
                end: new Date("2014/6/17 12:30")
            }]
        }
    }
}
</script>
