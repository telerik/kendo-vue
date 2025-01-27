<template>
<kendo-multicolumncombobox :data-text-field="'ProductName'"
                               :data-value-field="'ProductID'"
                               :data-source="dataSourceArray"
                               :columns="columns"
                               style="width:200px">
    </kendo-multicolumncombobox>
</template>
<script>
import { MultiColumnComboBox, MultiColumnComboBoxColumn } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
    components: {
        'kendo-multicolumncombobox': MultiColumnComboBox,
        'kendo-multicolumncombobox-column': MultiColumnComboBoxColumn
    },
    data () {
		return {
        columns: [
            { field: "ProductName", title: "Product Name", width: 180 },
            { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: 150 },
            { field: "UnitsInStock", title: "Units In Stock", width: 150 },
            { field: "Discontinued", width: 150 }
        ],
        dataSourceArray: [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18,
                "UnitsInStock": 39,
                "Discontinued": false
            },
            {
                "ProductID": 4,
                "ProductName": "Chef Anton",
                "UnitPrice": 22,
                "UnitsInStock": 53,
                "Discontinued": false
            },
            {
                "ProductID": 5,
                "ProductName": "Chef Gumbo Mix",
                "UnitPrice": 21.35,
                "UnitsInStock": 0,
                "Discontinued": true
            },
            {
                "ProductID": 6,
                "ProductName": "Boysenberry Spread",
                "UnitPrice": 25,
                "UnitsInStock": 120,
                "Discontinued": false
            }]
        }
    }
}
</script>
