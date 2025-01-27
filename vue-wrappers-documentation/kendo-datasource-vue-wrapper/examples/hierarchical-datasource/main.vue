<template>
<div>
		<hierarchicaldatasource ref="remoteDatasource"
									  :type="'odata'"
									  :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'"
									  :schema-model="dsModel">
		</hierarchicaldatasource>
		<treeview :data-text-field="['CategoryName', 'ProductName']"
						:data-source-ref="'remoteDatasource'"
						style="height: 300px">
		</treeview>
		<grid :data-source-ref="'remoteDatasource'" :height="300">
			<grid-column field="CategoryName" title="Name"></grid-column>
			<grid-column field="Description"></grid-column>
		</grid>
</div>
</template>

<script>
import { HierarchicalDataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { TreeView } from '@progress/kendo-treeview-vue-wrapper';

export default {
	name: 'App',
	components: {
		'grid': Grid,
		'grid-column': GridColumn,
		'treeview': TreeView,
		'hierarchicaldatasource': HierarchicalDataSource
    },
	data: function() {
		return {
			dsModel: {
				id: "CategoryID",
				hasChildren: "Products",
				children: {
					type: "odata",
					transport: {
						read: {
							url: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products"
						}
					},
					schema: {
						model: {
							id: "ProductID",
							hasChildren: false
						}
					}
				}
			}
		}
	}
}
</script>
