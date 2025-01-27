<template>
     <kendo-multicolumncombobox ref="combo"
                               :data-text-field="'text'"
                               :data-value-field="'value'"
                               :data-source="dataSourceArray"
                               @change="onChange"
                               @close="onClose"
                               @dataBound="onDataBound"
                               @filtering="onFiltering"
                               @open="onOpen"
                               @select="onSelect"
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
            dataSourceArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        }
    },
    methods: {
        onChange: function(e) {
            console.log("Event :: change");
        },
        onClose: function(e) {
            console.log("Event :: close");
        },
        onDataBound: function(e) {
            console.log("Event :: dataBound");
        },
        onFiltering: function(e) {
            console.log("Event :: filtering");
        },
        onOpen: function(e) {
            console.log("Event :: open");
        },
        onSelect: function(e) {
            console.log("Event :: select");
        }
    }
}
</script>
