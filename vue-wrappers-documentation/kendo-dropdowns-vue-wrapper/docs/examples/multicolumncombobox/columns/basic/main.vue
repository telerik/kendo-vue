<template>
 <kendo-multicolumncombobox :data-text-field="'ProductName'"
                               :data-value-field="'ProductID'"
                               :data-source="dataSourceArray"
                               style="width:650px">
        <kendo-multicolumncombobox-column :field="'ProductID'"
                                          :title="'ID'"
                                          :width="70">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'ProductName'"
                                          :title="'Product Name'">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'Discontinued'">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitPrice'"
                                          :title="'Unit Price'"
                                          :format="'{0:c}'"
                                          :width="100">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitsInStock'"
                                          :title="'Units in Stock'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
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
