<template>
    MultiColumnComboBox value: {{ dropdownlistValue }}
    <br />
    <br />
    <kendo-multicolumncombobox ref="combo"
                               v-model="comboboxValue"
                               :data-text-field="'text'"
                               :data-value-field="'value'"
                               :data-source="dataSourceArray"
                               :filter="'contains'"
                               style="width:200px">
        <kendo-multicolumncombobox-column :field="'text'"></kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'value'" :width="70"></kendo-multicolumncombobox-column>
    </kendo-multicolumncombobox>
</template>
<script>
import { MultiColumnComboBox, MultiColumnComboBoxColumn } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
    components: {
        'kendo-multicolumncombobox': MultiColumnComboBox,
        'kendo-multicolumncombobox-column': MultiColumnComboBoxColumn
    },
    data: function() {
        return {
            comboboxValue: '',
            dataSourceArray: [
                { text: 'Cotton', value: '1' },
                { text: 'Polyester', value: '2' },
                { text: 'Cotton/Polyester', value: '3' },
                { text: 'Rib Knit', value: '4' }
            ]
        }
    }
}
</script>
