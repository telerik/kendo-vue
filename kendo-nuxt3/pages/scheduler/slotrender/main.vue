<template>
<div>
    <button @click="handleClick">add Event</button>
   <Scheduler :data-items="sampleData" :default-date="displayDate" :views="views"
    :slot-render="'slotRender'"
    @itemclick="handleItemClick"
    @itemdoubleclick="handleItemDoubleClick"
    @slotclick="handleSlotClick"
    @slotdoubleclick="handleSlotDoubleClick"
    @taskclick="handleTaskClick"
    @taskdoubleclick="handleTaskDoubleClick"
    >
     <template v-slot:slotRender="{props}">
            <SchedulerSlot @click="otherClick"
                v-bind="props"
                :style="{
                    borderBottom: props.isAllDay ? '1px solid red' : undefined,
                }"
                @showmoreitems="props.onShowmoreitems"
            >
            </SchedulerSlot>
        </template>
          <template v-slot:weekSlotRender="{props}">
            <SchedulerSlot @click="otherClick"
                v-bind="props"
                :style="{
                    backgroundColor:
                        props.isAllDay || !props.isWorkHour || !props.isWorkDay
                        ? '#ffddcc'
                        : '#ccff99',
                    }"
            >
            </SchedulerSlot>
        </template>
    </Scheduler>
    </div>
</template>
<script lang="ts">
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import { Scheduler, SchedulerSlot } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from "./events-utc";

export default {
    components: {
        Scheduler,
        SchedulerSlot
    },
    data () {
        return {   
            views: [
              { name: 'Week', slot: 'weekSlotRender', title: 'Custom Week' },
               { name: 'day' },
            { name: 'workweek' },
            { name: 'month' },
            { name: 'agenda' },
              { name: 'timeline', title: 'custom TimeLine', columnWidth: 50, workDayStart: '12:00' }
        ],
            sampleData,
            displayDate
        };
    },
    methods: {
        handleClick() {

        },
        otherClick(){
          console.log('otherClick')   
        },
        handleItemClick(args) {
            console.log('itmeclick', args)    
            const updatedItem = this.sampleData.find(item=>item.id === args.target.props.uid);
            updatedItem.title = 'new Title';
        },
        handleItemDoubleClick(args) {
            console.log('itmedoubleclick', args)
        },
        handleSlotClick(args) {
            console.log('slotclick', args)
        },
        handleSlotDoubleClick(args) {
            console.log('slotdoubleclick', args)
        },
        handleTaskClick(args) {
            console.log('taskclick', args)
        },
        handleTaskDoubleClick(args) {
            console.log('taskdoubleclick', args)
        }
    }
}
</script>
