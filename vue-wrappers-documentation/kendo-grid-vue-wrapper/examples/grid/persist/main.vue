<template>
<kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :page-size='20'>
    </kendo-datasource>

    <a href="#" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" v-on:click="saveState">Save State</a>
    <a href="#" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" v-on:click="loadState">Load State</a>

    <kendo-grid ref="grid"
                :height="600"
                :data-source-ref="'datasource1'"
                :groupable="true"
                :sortable="true"
                :reorderable="true"
                :resizable="true"
                :column-menu="true"
                :filterable-mode="'row'"
                :pageable-refresh="true"
                :pageable-page-sizes="true"
                :pageable-button-count="5">
        <kendo-grid-column :field="'ContactName'"
                           :title="'Contact Name'"
                           :width="250"
                           :locked="true"></kendo-grid-column>
        <kendo-grid-column :field="'ContactTitle'"
                           :title="'Contact Title'"
                           :width="350"></kendo-grid-column>
        <kendo-grid-column :field="'CompanyName'"
                           :title="'Company Name'"
                           :width="350"></kendo-grid-column>
        <kendo-grid-column :field="'Country'"
                           :width="450"></kendo-grid-column>
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
    },
    methods: {
        saveState: function(e) {
            e.preventDefault();

            var grid = this.$refs.grid.kendoWidget();

            localStorage["kendo-grid-options"] = kendo.stringify(grid.getOptions());
        },
        loadState: function(e) {
            e.preventDefault();

            var options = localStorage["kendo-grid-options"];
            var grid = this.$refs.grid.kendoWidget();

            if (options) {
                grid.setOptions(JSON.parse(options));
            }
        }
    }
}
</script>