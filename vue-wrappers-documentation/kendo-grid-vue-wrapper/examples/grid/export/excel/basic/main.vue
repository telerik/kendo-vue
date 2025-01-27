<template>
  <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'"
                      :schema-model-fields="schemaModelFields"
                      :page-size='7'
                      :group="groupDefinition"
                      :aggregate="aggregateDefinition">
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :sortable="true"
                :pageable="true"
                :groupable="true"
                :filterable="true"
                :reorderable="true"
                :resizable="true"
                :toolbar="['excel']"
                :excel-file-name="'Kendo UI Grid Export.xlsx'"
                :excel-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'"
                :excel-filterable="true">
        <kendo-grid-column :field="'ProductName'"
                           :title="'Product Name'"
                           :aggregates="['count']"
                           :footer-template="'Total Count: #=count#'"
                           :group-footer-template="'Count: #=count#'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :aggregates="['sum']"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsOnOrder'"
                           :title="'Units On Order'"
                           :aggregates="['average']"
                           :footer-template="'Average: #=average#'"
                           :group-footer-template="'Average: #=average#'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :aggregates="['min', 'max', 'count']"
                           :footer-template="'Min: #= min # Max: #= max #'"
                           :group-footer-template="'Units In Stock: #= group.value # (Count: #= count#)'"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

window.JSZip = JSZip;

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
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) }
            }
        }
    }
}
</script>