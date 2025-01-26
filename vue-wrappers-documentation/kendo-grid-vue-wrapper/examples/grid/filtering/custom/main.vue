<template>
     <kendo-grid :data-source="localDataSource"
                :filterable-extra="false"
                :filterable-operators-string-eq="'Is equal to'"
		:filterable-operators-string-neq="'Not equal to'"
		:filterable-operators-string-startswith="'starts with'" >
        <kendo-grid-column :field="'ProductName'"
                           :filterable="false"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Category'"
                           :width="180"
                           :filterable-ui="categoryFilter"></kendo-grid-column>
        <kendo-grid-column :field="'DeliveryDate'"
                           :title="'Delivery Date'"
                           :format="'{0:MM/dd/yyyy}'"
                           :width="180"
                           :filterable-ui="'datepicker'"></kendo-grid-column>
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
                "Beverages",
                "Condiments",
                "Confections",
                "Dairy Products",
                "Grains/Cereals"
            ],
            localDataSource: {
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { editable: false, nullable: true },
                            ProductName: { type: 'string' },
                            UnitPrice: { type: 'number' },
                            Category: { type: "string" },
                            DeliveryDate: { type: 'date' }
                        }
                    }
                },
                data: [{
                    "ProductID": 1,
                    "ProductName": "Chai",
                    "UnitPrice": 18,
                    "Category": "Beverages",
                    "DeliveryDate": new Date(2018, 8, 24)
                },
                {
                    "ProductID": 2,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "Category": "Condiments",
                    "DeliveryDate": new Date(2018, 3, 4)
                },
                {
                    "ProductID": 3,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "Category": "Condiments",
                    "DeliveryDate": new Date(2018, 10, 11)
                },
                {
                    "ProductID": 4,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "Category": "Grains/Cereals",
                    "DeliveryDate": new Date(2018, 11, 10)
                }]
            }
        }
    },
    methods: {
        categoryFilter: function(element) {
            element.kendoDropDownList({
                dataSource: this.categories,
                optionLabel: "--Select Value--"
            });
        }
    }
}
</script>