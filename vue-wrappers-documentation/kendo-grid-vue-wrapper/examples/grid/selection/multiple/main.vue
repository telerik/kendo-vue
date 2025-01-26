<template>
 <kendo-grid :data-source="localDataSource"
                :selectable="'multiple'">
        <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Category'"
                           :title="'Category'"
                           :width="180"></kendo-grid-column>
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
     data () {
		return {
            localDataSource: {
                data: [{
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "UnitsInStock": 39,
                    "Discontinued": false,
                    "Category": "Beverages"
                },
                {
                    "ProductID": 4,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "UnitsInStock": 53,
                    "Discontinued": false,
                    "Category": "Beverages"
                },
                {
                    "ProductID": 5,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "UnitsInStock": 0,
                    "Discontinued": true,
                    "Category": "Dairy Products"
                },
                {
                    "ProductID": 6,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "UnitsInStock": 120,
                    "Discontinued": false,
                    "Category": "Condiments"
                }]
            }
        }
    }
}
</script>