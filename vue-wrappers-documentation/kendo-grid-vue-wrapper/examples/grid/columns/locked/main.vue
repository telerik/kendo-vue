<template>
  <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :page-size='30'
                      :schema-model-fields="dsSchemaFields">
    </kendo-datasource>

    <kendo-grid :data-source-ref="'datasource1'"
                :height="600"
                :sortable="true"
                :pageable="true"
                :column-menu="true"
                :filterable="true"
                :resizable="true"
                :groupable="true"
                :reorderable="true">
        <kendo-grid-column :field="'OrderID'"
                           :title="'Order ID'"
                           :locked="true"
                           :lockable="false"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'ShipCountry'"
                           :title="'Ship Country'"
                           :width="180" ></kendo-grid-column>
        <kendo-grid-column :field="'ShipCity'"
                           :title="'Ship City'"
                           :width="180" ></kendo-grid-column>
        <kendo-grid-column :field="'ShipName'"
                           :title="'Ship Name'"
                           :locked="true"
                           :width="240" ></kendo-grid-column>
        <kendo-grid-column :field="'ShipAddress'"
                           :title="'Ship Address'"
                           :lockable="false"
                           :width="240" ></kendo-grid-column>
        <kendo-grid-column :field="'Freight'"
                           :width="120"></kendo-grid-column>
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
                ShipCity: { type: "string" },
                ShipCountry: { type: "string" },
                ShipAddress: { type: "string" }
            }
        }
    }
}
</script>