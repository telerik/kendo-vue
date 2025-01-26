<template>
   <kendo-grid :data-source="localDataSource"
                 :groupable="true"
                 :sortable="true"
                 :resizable="true"
                 :reorderable="true">
        <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
        <kendo-grid-column :title="'Product Details'" :columns="detailsColumnsDefinitions" ></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn
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
            ],
            detailsColumnsDefinitions: [
                { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
                { field: "UnitsInStock", title:"Units In Stock", width: "120px" },
                { field: "Discontinued", width: "120px" }
            ]
       };
    }
}
</script>