<template>
 <kendo-datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :type="'odata'"
                      :page-size='20'
                      :schema-model-fields="schemaModelFields">
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :sortable-mode="'multiple'"
                :sortable-allow-unsort="true"
                :sortable-show-indexes="true"
                :pageable-button-count="5">
        <kendo-grid-column :field="'OrderID'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'ShipName'"
                           :title="'Ship Name'"
                           :width="240"></kendo-grid-column>
        <kendo-grid-column :field="'ShipCountry'"
                           :title="'Ship Country'"
                           :filterable-multi="true"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'ShipCity'"
                           :title="'Ship City'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'Freight'"
                           :width="180" ></kendo-grid-column>
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
   data: function () {
        return {
            schemaModelFields: {
                OrderID: { type: 'number' },
                ShipName: { type: 'string' },
                ShipCountry: { type: 'string' },
                ShipCity: { type: 'string' },
                Freight: { type: 'string' },
                OrderDate: { type: 'date' }
            }
        }
    }
}
</script>