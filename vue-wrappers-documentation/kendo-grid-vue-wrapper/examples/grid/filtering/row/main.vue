<template>
 <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :page-size='20'
                      :server-paging="true"
                      :server-filtering="true"
                      :schema-model-fields="dsSchemaFields">
    </kendo-datasource>

    <kendo-grid :data-source-ref="'datasource1'"
                :pageable="true"
                :filterable-mode="'row'">
        <kendo-grid-column :field="'OrderID'"
                           :width="180"
                           :filterable-cell-show-operators="false"></kendo-grid-column>
        <kendo-grid-column :field="'ShipName'"
                           :title="'Ship Name'"
                           :width="240"
                           :filterable-cell-operator="'contains'"
                           :filterable-cell-suggestion-operator="'contains'"></kendo-grid-column>
        <kendo-grid-column :field="'Freight'"
                           :width="180"
                           :filterable-cell-operator="'gte'"></kendo-grid-column>
        <kendo-grid-column :field="'OrderDate'"
                           :title="'Order Date'"
                           :format="'{0:MM/dd/yyyy}'"
                           :width="180"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
    data () {
		return {
            dsSchemaFields: {
                OrderID: { type: "number" },
                Freight: { type: "number" },
                ShipName: { type: "string" },
                OrderDate: { type: "date" },
                ShipCity: { type: "string" }
            }
        }
    }
}
</script>