<template>
<div>
    <button @click="handleClick">add Event</button>
   <Scheduler :data-items="sampleData" :default-date="displayDate" :views="views"
    :item="'itemRender'"
    :task="'taskRender'"
    @itemclick="handleItemClick"
    @itemdoubleclick="handleItemDoubleClick"
    @slotclick="handleSlotClick"
    @slotdoubleclick="handleSlotDoubleClick"
    @taskclick="handleTaskClick"
    @taskdoubleclick="handleTaskDoubleClick"
    >
     <template v-slot:itemRender="{props}">
            <SchedulerItem @click="otherClick"
                v-bind="props"
                :style="{
                    backgroundColor: 'red'
                }"
            >
            <div class="k-event-template">
                {{props.title}}
            </div>
           
            </SchedulerItem>
        </template>
        <template v-slot:taskRender="{props}">
            <SchedulerTask @click="otherClick"
                v-bind="props"
                :style="{
                    backgroundColor: 'red'
                }"
            >
          bb8      
            </SchedulerTask>
        </template>
          <template v-slot:weekSlotRender="{props}">
            <SchedulerItem @click="otherClick"
                v-bind="props"
                :style="{
                    backgroundColor:
                        props.isAllDay || !props.isWorkHour || !props.isWorkDay
                        ? '#ffddcc'
                        : '#ccff99',
                    }"
            >
            </SchedulerItem>
        </template>
    </Scheduler>
    </div>
</template>
<script lang="ts">
import '@progress/kendo-date-math/tz/Etc/UTC';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import { Scheduler, SchedulerItem, SchedulerTask } from '@progress/kendo-vue-scheduler';
import { sampleData, displayDate } from "./events-utc.js";

export default {
    components: {
        Scheduler,
        SchedulerItem,
        SchedulerTask
    },
    data () {
        return {   
            views: [
              { name: 'Week', title: 'Custom Week' },
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
