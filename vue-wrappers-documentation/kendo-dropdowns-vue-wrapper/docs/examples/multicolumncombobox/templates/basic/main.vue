<template>
  <kendo-multicolumncombobox :data-text-field="'ProductName'"
                               :data-value-field="'UnitsInStock'"
                               :data-source="dataSourceArray"
                               style="width:300px">
        <kendo-multicolumncombobox-column :field="'ProductName'"
                                          :title="'Product Name'"
                                          :template="nameColumnTemplate"
                                          :width="250">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'Discontinued'"
                                          :width="120">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitPrice'"
                                          :title="'Unit Price'"
                                          :format="'{0:c}'"
                                          :width="120">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitsInStock'"
                                          :title="'Units in Stock'"
                                          :width="120">
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
            nameColumnTemplate: "Name: <strong>#: ProductName #</strong>",
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
