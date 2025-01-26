<template>
<div>
	<treelistdatasource ref="treelistdatasource1"
							  :transport-read-url="'https://demos.telerik.com/kendo-ui/service/EmployeeDirectory/All'"
							  :transport-read-data-type="'jsonp'"
							  :schema-model="model">
	</treelistdatasource>
	<treelist :data-source-ref="'treelistdatasource1'"
				    :height="'600px'"
				    :filterable="true"
				    :sortable="true">
		<treelist-column :field="'FirstName'" :title="'First Name'" :width="180"></treelist-column>
		<treelist-column :field="'LastName'" :title="'Last Name'" :width="120"></treelist-column>
		<treelist-column :field="'Position'" ></treelist-column>
		<treelist-column :field="'Phone'" :width="150"></treelist-column>
		<treelist-column :field="'Address'"></treelist-column>
	</treelist>
</div>
</template>

<script>
import { TreeListDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { TreeList, TreeListColumn } from '@progress/kendo-treelist-vue-wrapper';

export default {
	name: 'App',
	components: {
		'treelist': TreeList,
		'treelist-column': TreeListColumn,
		'treelistdatasource': TreeListDataSource
    },
	data: function()  {
		return {
			model: {
				id: 'EmployeeID',
				parentId: 'ReportsTo',
				fields: {
				ReportsTo: { field: 'ReportsTo', nullable: true },
				EmployeeID: { field: 'EmployeeId', type: 'number' },
				Extension: { field: 'Extension', type: 'number' }
				},
				expanded: true
			}
		}
	}
}
</script>
