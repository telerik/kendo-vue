<template>
   <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :sortable="true"
                :pageable-refresh="true"
                :pageable-page-sizes="true"
                :pageable-button-count="5"
                :toolbar="['pdf']"
                :pdf-all-pages="true"
                :pdf-avoid-links="true"
                :pdf-paper-size="'A4'"
                :pdf-margin="{ top: '2cm', left: '1cm', right: '1cm', bottom: '1cm' }"
                :pdf-landscape="true"
                :pdf-repeat-headers="true"
                :pdf-scale="0.8">
        <kendo-grid-column :field="'ContactName'"
                           :title="'Contact Name'"
                           :width="200"></kendo-grid-column>
        <kendo-grid-column :field="'ContactTitle'"
                           :title="'Contact Title'"></kendo-grid-column>
        <kendo-grid-column :field="'CompanyName'"
                           :title="'Company Name'"></kendo-grid-column>
        <kendo-grid-column :field="'Country'"
                           :width="150"></kendo-grid-column>
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
            schemaModelFields: {
                UnitsInStock: { type: "number" },
                ProductName: { type: "string" },
                UnitPrice: { type: "number" },
                UnitsOnOrder: { type: "number" },
                UnitsInStock: { type: "number" }
            },
            groupDefinition: {
                field: "UnitsInStock",
                aggregates: [
                    { field: "ProductName", aggregate: "count" },
                    { field: "UnitPrice", aggregate: "sum"},
                    { field: "UnitsOnOrder", aggregate: "average" },
                    { field: "UnitsInStock", aggregate: "count" }
                ]
            },
            aggregateDefinition: [
                { field: "ProductName", aggregate: "count" },
                { field: "UnitPrice", aggregate: "sum" },
                { field: "UnitsOnOrder", aggregate: "average" },
                { field: "UnitsInStock", aggregate: "min" },
                { field: "UnitsInStock", aggregate: "max" }
            ]
        }
    }
}
</script>