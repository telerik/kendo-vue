<template>
<div>
	<schedulerdatasource ref="schedulerdatasource1"
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
							   :schema-model-fields="fields"
							   :filter-logic="'or'"
							   :filter-filters="filters">
    </schedulerdatasource>

    <scheduler data-source-ref="schedulerdatasource1"
					 :date="date"
					 :startTime="startTime"
					 :height="600"
					 :timezone="'Etc/UTC'">
		<scheduler-view :type="'day'"></scheduler-view>
		<scheduler-view :type="'workWeek'" :selected="true"></scheduler-view>
		<scheduler-view :type="'week'"></scheduler-view>
		<scheduler-view :type="'month'"></scheduler-view>
		<scheduler-view :type="'agenda'"></scheduler-view>
		<scheduler-resource :field="'ownerId'" :title="'Owner'" :data-source="resourceDataSource"></scheduler-resource>
	</scheduler>
</div>
</template>

<script>
import { SchedulerDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Scheduler, SchedulerResource, SchedulerView } from '@progress/kendo-scheduler-vue-wrapper';

export default {
	name: 'App',
	components: {
		'scheduler': Scheduler,
		'scheduler-view': SchedulerView,
		'scheduler-resource': SchedulerResource,
		'schedulerdatasource': SchedulerDataSource
    },
	data: function () {
		return {
			date: new Date('2013/6/13'),
			startTime: new Date('2013/6/13 07:00 AM'),
			resourceDataSource: [
				{ text: 'Alex', value: 1, color: '#f8a398' },
				{ text: 'Bob', value: 2, color: '#51a0ed' },
				{ text: 'Charlie', value: 3, color: '#56ca85' }
			],
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
				ownerId: { from: 'OwnerID', defaultValue: 1 },
				isAllDay: { type: 'boolean', from: 'IsAllDay' }
			},
			filters: [
				{ field: 'ownerId', operator: 'eq', value: 1 },
				{ field: 'ownerId', operator: 'eq', value: 2 }
			]
		}
	},
	methods: {
		parameterMap: function (options, operation) {
			if (operation !== 'read' && options.models) {
				return {models: kendo.stringify(options.models)}
			}
		},
		change: function (e) {
			var checked = kendo.jQuery.map(kendo.jQuery('#people :checked'), function (checkbox) {
				return parseInt(kendo.jQuery(checkbox).val())
			})
			var scheduler = kendo.jQuery('#scheduler').data('kendoScheduler')
			scheduler.dataSource.filter({
				operator: function (task) {
					return kendo.jQuery.inArray(task.ownerId, checked) >= 0
				}
			})
		}
	}
}
</script>
