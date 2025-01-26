<template>
   <kendo-grid ref="grid" :data-source="localDataSource" :resizable="true">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="{ text: 'View Details', click: showDetails }"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
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
            localDataSource: [{
                    'ProductID':1,
                    'ProductName':'Chai',
                    'UnitPrice':18,
                    'UnitsInStock':39,
                    'Discontinued':false
                },
                {
                    'ProductID':2,
                    'ProductName':'Chang',
                    'UnitPrice':19,
                    'UnitsInStock':17,
                    'Discontinued':false
                }
            ]
        };
    },
    methods: {
        showDetails: function(e) {
            e.preventDefault();

            var grid = this.$refs.grid.kendoWidget();
            var dataItem = grid.dataItem($(e.currentTarget).closest("tr"));

            alert('"' + dataItem.ProductName + '" details are about to be logged on the console.');
            console.log(dataItem);
        }
    }
}
</script>