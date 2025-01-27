<template>
  <kendo-scheduler :data-source="localDataSource"
					 :date="date"
					 :height="600"
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
    data: function (){
        return {
            date: new Date('2013/6/6'),
            localDataSource: [
                {
                id: 1,
                start: new Date("2013/6/6 08:00 AM"),
                end: new Date("2013/6/6 09:00 AM"),
                title: "Interview"
                },
                {
                id: 2,
                start: new Date("2013/6/6 08:00 AM"),
                end: new Date("2013/6/6 09:00 AM"),
                title: "Meeting"
                }
            ]
        };
	}
}
</script>