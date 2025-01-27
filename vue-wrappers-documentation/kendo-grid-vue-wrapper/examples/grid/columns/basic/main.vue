<template>
  <kendo-grid :data-source="localDataSource">
        <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
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
        return  {
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
    }
}
</script>