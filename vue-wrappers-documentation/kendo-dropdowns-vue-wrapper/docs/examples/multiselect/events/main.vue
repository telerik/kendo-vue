<template>
      <kendo-multiselect :data-source="dataSourceArray"
                       :data-text-field="'text'"
                       :data-value-field="'value'"
                       :filter="'contains'"
                       :placeholder="'Select sports...'"
                        @change="onChange"
                        @close="onClose"
                        @dataBound="onDataBound"
                        @filtering="onFiltering"
                        @open="onOpen"
                        @select="onSelect"
                        @deselect="onDeselect">
    </kendo-multiselect>
</template>
<script>
import { MultiSelect } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
    components: {
        'kendo-multiselect': MultiSelect
    },
  data: function() {
        return {
            dataSourceArray: [
                { text: 'Baseball', value: '1' },
                { text: 'Basketball', value: '2' },
                { text: 'Cricket', value: '3' },
                { text: 'Football', value: '4' },
                { text: 'Tennis', value: '5' },
                { text: 'Volleyball', value: '6' }
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
        },
        onDeselect: function(e) {
            console.log("Event :: deselect")
        }
    }
}
</script>
