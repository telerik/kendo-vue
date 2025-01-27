<template>
      <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Snap events to slot boundaries</label>

    <kendo-scheduler ref="scheduler"
                     :data-source="localDataSource"
					 :date="date"
					 :height="600"
                     :snap="checked"
                     :selectable="true"
					 :timezone="'Etc/UTC'">
      <kendo-scheduler-view :type="'day'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'workWeek'" :selected="true"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'week'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'month'"></kendo-scheduler-view>
      <kendo-scheduler-view :type="'agenda'"></kendo-scheduler-view>
    </kendo-scheduler>
</template>
<script>
import { Scheduler, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';

export default {
    components: {
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView
    },
    watch: {
        'checked': function (newValue){
            var scheduler = this.$refs.scheduler.kendoWidget()
            scheduler.options.snap = newValue;
            scheduler.view(scheduler.view().name);
        }
    },
	data: function() {
        return {
            checked: true,
            date: new Date('2018/6/6'),
            localDataSource: [
                {
                id: 1,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Interview"
                },
                {
                id: 2,
                start: new Date("2018/6/6 08:00 AM"),
                end: new Date("2018/6/6 09:00 AM"),
                title: "Meeting"
                }
            ]
        };
    } 
}
</script>