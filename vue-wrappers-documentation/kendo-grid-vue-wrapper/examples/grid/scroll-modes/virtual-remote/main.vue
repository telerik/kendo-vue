<template>
    <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :page-size='100'
                      :server-paging="true"
                      :server-sorting="true"
                      :schema-model-fields="dsSchemaFields">
    </kendo-datasource>

    <kendo-grid :data-source-ref="'datasource1'"
                :height="543"
                :scrollable-virtual="true"
                :sortable="true">
        <kendo-grid-column :field="'OrderID'"
                           :title="'Order ID'"
                           :width="80"></kendo-grid-column>
        <kendo-grid-column :field="'ShipName'"
                           :title="'Ship Name'"
                           :width="200" ></kendo-grid-column>
        <kendo-grid-column :field="'Freight'"
                           :width="80"></kendo-grid-column>
        <kendo-grid-column :field="'OrderDate'"
                           :title="'Order Date'"
                           :format="'{0:MM/dd/yyyy}'"
                           :width="100"></kendo-grid-column>
        <kendo-grid-column :field="'ShipCity'"
                           :title="'Ship City'"
                           :width="120" ></kendo-grid-column>
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