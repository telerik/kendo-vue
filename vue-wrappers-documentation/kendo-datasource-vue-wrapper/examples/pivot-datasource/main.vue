<template>
<div>
	<pivotdatasource ref="pivotdatasource1"
						   transport-read-url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
						   type="odata"
						   :schema-cube="schemaCube"
						   :measures="measures">
		<pivot-column :name="'Country'" :expand="true"></pivot-column>
		<pivot-column :name="'CompanyName'" ></pivot-column>
		<pivot-row :name="'ContactTitle'" ></pivot-row>
    </pivotdatasource>
    <pivotconfigurator id="pivotconfigurator1"
							 data-source-ref="pivotdatasource1"
							 :filterable="true"
							 :height="200" >
	</pivotconfigurator>
	<pivotgrid id="pivotgrid1"
		             data-source-ref="pivotdatasource1"
                     :filterable="true"
                     :columnWidth="120"
                     :height="400" >
	</pivotgrid>
</div>
</template>

<script>
import { PivotDataSource, PivotColumn } from '@progress/kendo-datasource-vue-wrapper';
import { PivotGrid, PivotConfigurator } from '@progress/kendo-pivotgrid-vue-wrapper';

export default {
	name: 'App',
	components: {
		'pivotgrid': PivotGrid,
		'pivotconfigurator': PivotConfigurator,
		'pivot-column': PivotColumn,
		'pivotdatasource': PivotDataSource
    },
	data: function (){
		return {
			measures: ['Contacts Count'],
			schemaCube: {
				dimensions: {
					ContactName: { caption: 'All Contacts' },
					CompanyName: { caption: 'All Companies' },
					Country: { caption: 'All Countries' },
					ContactTitle: { caption: 'All Titles' }
				},
				measures: {
					'Contacts Count': { field: 'CustomerID', aggregate: 'count' }
				}
			}
		}
    }
}
</script>
