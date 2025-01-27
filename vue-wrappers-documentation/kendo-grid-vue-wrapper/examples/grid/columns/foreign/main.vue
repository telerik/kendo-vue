<template>
   <kendo-grid :data-source="localDataSource"
                :editable="true"
                :toolbar="['create', 'save', 'cancel']">
        <kendo-grid-column :field="'ProductName'" :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'CategoryID'"
                           :title="'Category'"
                           :width="180"
                           :values="categories"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['destroy']"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
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
            categories: [
                { "value": 1, "text": "Beverages" },
                { "value": 2, "text": "Condiments" },
                { "value": 3, "text": "Confections" },
                { "value": 4, "text": "Dairy Products" },
                { "value": 5, "text": "Grains/Cereals" }
            ],
            localDataSource: {
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { editable: false, nullable: true },
                            ProductName: { validation: { required: true } },
                            UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                            CategoryID: { field: "CategoryID", type: "number", defaultValue: 1 },
                            Discontinued: { type: 'boolean', defaultValue: false }
                        }
                    }
                },
                data: [{
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "UnitsInStock": 39,
                    "Discontinued": false,
                    "CategoryID": 1
                },
                {
                    "ProductID": 4,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "UnitsInStock": 53,
                    "Discontinued": false,
                    "CategoryID": 2
                },
                {
                    "ProductID": 5,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "UnitsInStock": 0,
                    "Discontinued": true,
                    "CategoryID": 2
                },
                {
                    "ProductID": 6,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "UnitsInStock": 120,
                    "Discontinued": false,
                    "CategoryID": 3
                }]
            }
        }
    }
}
</script>