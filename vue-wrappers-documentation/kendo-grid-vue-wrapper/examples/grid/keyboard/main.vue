<template>
  <kendo-datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'"
                      :type="'odata'"
                      :page-size='5'
                      :group-field="'City'"
                      :server-paging="true"
                      :server-sorting="true"
                      :server-filtering="true">
    </kendo-datasource>

    <kendo-grid :data-source-ref="'datasource1'"
                :selectable="'multiple row'"
                :navigatable="true"
                :filterable="true"
                :sortable="true"
                :pageable="true"
                :reorderable="true">
        <kendo-grid-column :field="'FirstName'"
                           :title="'First Name'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'LastName'"
                           :title="'Last Name'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'Country'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'City'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'Title'"
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