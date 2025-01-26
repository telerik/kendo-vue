<template>
<div>
	<ganttdatasource ref="ganttdatasource1"
						   transport-read-url="https://demos.telerik.com/kendo-ui/service/GanttTasks"
						   transport-read-data-type="jsonp"
						   transport-update-url="https://demos.telerik.com/kendo-ui/service/GanttTasks/update"
						   transport-update-data-type="jsonp"
						   transport-create-url="https://demos.telerik.com/kendo-ui/service/GanttTasks/create"
						   transport-create-data-type="jsonp"
						   transport-destroy-url="https://demos.telerik.com/kendo-ui/service/GanttTasks/destroy"
						   transport-destroy-data-type="jsonp"
						   :transport-parameter-map="parameterMap"
						   schema-model-id="id"
						   :schema-model-fields="fields">
    </ganttdatasource>

    <ganttdependencydatasource ref="ganttdependencydatasource1"
									 transport-read-url="https://demos.telerik.com/kendo-ui/service/GanttDependencies"
									 transport-read-data-type="jsonp"
									 transport-update-url="https://demos.telerik.com/kendo-ui/service/GanttDependencies/update"
									 transport-update-data-type="jsonp"
									 transport-create-url="https://demos.telerik.com/kendo-ui/service/GanttDependencies/create"
									 transport-create-data-type="jsonp"
									 transport-destroy-url="https://demos.telerik.com/kendo-ui/service/GanttDependencies/destroy"
									 transport-destroy-data-type="jsonp"
									 :transport-parameter-map="parameterMap"
									 schema-model-id="id"
									 :schema-model-fields="dependencyfields">
    </ganttdependencydatasource>

    <gantt id="gantt"
				 data-source-ref="ganttdatasource1"
				 dependencies-data-source-ref="ganttdependencydatasource1"
				 :show-work-hours="false"
				 :show-work-days="false"
				 :snap="false"
				 :height="600">
		<gantt-view :type="'day'"></gantt-view>
		<gantt-view :type="'week'" :selected="true"></gantt-view>
		<gantt-view :type="'month'"></gantt-view>
		<gantt-column :field="'id'" :title="'ID'" :width="60"></gantt-column>
		<gantt-column :field="'title'" :title="'Title'" :editable="true" :sortable="true"></gantt-column>
		<gantt-column :field="'start'" :title="'Start Time'" :format="'{0:MM/dd/yyyy}'" :width="100" :editable="true" :sortable="true"></gantt-column>
		<gantt-column :field="'end'" :title="'End Time'" :format="'{0:MM/dd/yyyy}'" :width="100" :editable="true" :sortable="true"></gantt-column>
	</gantt>
</div>
</template>

<script>
import { GanttDataSource, GanttDependencyDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Gantt, GanttColumn, GanttView } from '@progress/kendo-gantt-vue-wrapper';

export default {
	name: 'App',
	components: {
		'gantt': Gantt,
		'gantt-view': GanttView,
		'gantt-column': GanttColumn,
		'ganttdatasource': GanttDataSource,
		'ganttdependencydatasource': GanttDependencyDataSource
    },
	data: function() {
        return {
            fields: {
                id: { from: 'ID', type: 'number' },
                orderId: { from: 'OrderID', type: 'number', validation: { required: true } },
                parentId: { from: 'ParentID', type: 'number', defaultValue: null, validation: { required: true } },
                start: { from: 'Start', type: 'date' },
                end: { from: 'End', type: 'date' },
                title: { from: 'Title', defaultValue: '', type: 'string' },
                percentComplete: { from: 'PercentComplete', type: 'number' },
                summary: { from: 'Summary', type: 'boolean' },
                expanded: { from: 'Expanded', type: 'boolean', defaultValue: true }
            },
            dependencyfields: {
                id: { from: 'ID', type: 'number' },
                predecessorId: { from: 'PredecessorID', type: 'number' },
                successorId: { from: 'SuccessorID', type: 'number' },
                type: { from: 'Type', type: 'number' }
            }
        }
	},
	methods: {
		parameterMap: function (options, operation) {
			if (operation !== 'read') {
				return {models: kendo.stringify(options.models || [options])}
			}
		}
	}
}
</script>
