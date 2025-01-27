<template>
 <kendo-datasource ref="datasource1"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                        :type="'odata'"
                        :page-size='20'
                        :server-paging="true">
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :pageable='true'>
        <kendo-grid-column :field="'OrderID'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'ShipName'"
                           :title="'Ship Name'"
                           :width="240"></kendo-grid-column>
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
    }
}
</script>