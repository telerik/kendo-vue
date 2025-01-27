<template>
     <kendo-grid :height="600"
                :data-source="localDataSource"
                :editable="true"
                :toolbar="['create', 'save', 'cancel']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'Category'"
                           :title="'Category'"
                           :editor="categoryDropDownEditor"
                           :template="'#=Category.CategoryName#'"
                           :width="180"></kendo-grid-column>
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
            localDataSource: {
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { editable: false, nullable: true },
                            ProductName: { validation: { required: true } },
                            UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                            Category: { defaultValue: { CategoryID: 1, CategoryName: "Beverages"} },
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
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 2,
                    "ProductName": "Chang",
                    "UnitPrice": 17,
                    "UnitsInStock": 40,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 3,
                    "ProductName": "Aniseed Syrup",
                    "UnitPrice": 10,
                    "UnitsInStock": 13,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 1,
                        CategoryName: "Beverages"
                    }
                },
                {
                    "ProductID": 4,
                    "ProductName": "Chef Anton",
                    "UnitPrice": 22,
                    "UnitsInStock": 53,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 2,
                        CategoryName: "Condiments"
                    }
                },
                {
                    "ProductID": 5,
                    "ProductName": "Chef Gumbo Mix",
                    "UnitPrice": 21.35,
                    "UnitsInStock": 0,
                    "Discontinued": true,
                    "Category": {
                        CategoryID: 2,
                        CategoryName: "Condiments"
                    }
                },
                {
                    "ProductID": 6,
                    "ProductName": "Boysenberry Spread",
                    "UnitPrice": 25,
                    "UnitsInStock": 120,
                    "Discontinued": false,
                    "Category": {
                        CategoryID: 3,
                        CategoryName: "Desserts, candies, and sweet breads"
                    }
                }]
            }
        }
    },
    methods: {
        categoryDropDownEditor: function(container, options) {
            $('<input required name="' + options.field + '"/>')
                .appendTo(container)
                .kendoDropDownList({
                    autoBind: false,
                    dataTextField: "CategoryName",
                    dataValueField: "CategoryID",
                    dataSource: {
                        type: "odata",
                        transport: {
                            read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
                        }
                    }
                });
        }
    }
}
</script>