<template>
 	<kendo-scheduler :data-source="remoteDataSource"
					 :date="date"
					 :startTime="startTime"
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
            date: new Date('2013/6/13'),
            startTime: new Date('2013/6/13 07:00 AM'),
            remoteDataSource: new kendo.data.SchedulerDataSource({
                transport: {
                    read: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks',
                        dataType: 'jsonp'
                    },
                    update: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/update',
                        dataType: 'jsonp'
                    },
                    create: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/create',
                        dataType: 'jsonp'
                    },
                    destroy: {
                        url: 'https://demos.telerik.com/kendo-ui/service/tasks/destroy',
                        dataType: 'jsonp'
                    }
                },
                schema: {
                    model: {
                        id: "taskId",
                        fields: {
                            taskId: { from: 'TaskID', type: 'number' },
                            title: { from: 'Title', defaultValue: 'No title', validation: { required: true } },
                            start: { type: 'date', from: 'Start' },
                            end: { type: 'date', from: 'End' },
                            startTimezone: { from: 'StartTimezone' },
                            endTimezone: { from: 'EndTimezone' },
                            description: { from: 'Description' },
                            recurrenceId: { from: 'RecurrenceID' },
                            recurrenceRule: { from: 'RecurrenceRule' },
                            recurrenceException: { from: 'RecurrenceException' },
                            isAllDay: { type: 'boolean', from: 'IsAllDay' }
                        }
                    }
                }
            })
        };
    }
}
</script>