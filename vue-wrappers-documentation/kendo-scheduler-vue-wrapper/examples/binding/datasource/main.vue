<template>
     <kendo-schedulerdatasource ref="remoteDataSource"
							   :batch="true"
							   transport-read-url="https://demos.telerik.com/kendo-ui/service/tasks"
							   transport-read-data-type="jsonp"
							   transport-update-url="https://demos.telerik.com/kendo-ui/service/tasks/update"
							   transport-update-data-type="jsonp"
							   transport-create-url="https://demos.telerik.com/kendo-ui/service/tasks/create"
							   transport-create-data-type="jsonp"
							   transport-destroy-url="https://demos.telerik.com/kendo-ui/service/tasks/destroy"
							   transport-destroy-data-type="jsonp"
							   :transport-parameter-map="parameterMap"
							   schema-model-id="taskId"
							   :schema-model-fields="fields">
    </kendo-schedulerdatasource>

    <kendo-scheduler data-source-ref="remoteDataSource"
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
import { KendoSchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-scheduler': Scheduler,
        'kendo-scheduler-view': SchedulerView,
        'kendo-schedulerdatasource': KendoSchedulerDataSource
    },
    data: function (){
        return {
            date: new Date('2013/6/13'),
            startTime: new Date('2013/6/13 07:00 AM'),
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
        };
    },
	methods: {
		parameterMap: function (options, operation) {
			if (operation !== 'read' && options.models) {
				return {models: kendo.stringify(options.models)}
			}
		}
    }
}
</script>