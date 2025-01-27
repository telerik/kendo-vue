<template>
     <kendo-dropdownlist :data-source="dataSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :filter="'contains'"
                        :options-label="'Select country'"
                        @change="onChange"
                        @close="onClose"
                        @dataBound="onDataBound"
                        @filtering="onFiltering"
                        @open="onOpen"
                        @select="onSelect"
                        @cascade="onCascade">
    </kendo-dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
    components: {
        'kendo-dropdownlist': DropDownList
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
        },
        onCascade: function(e) {
            console.log("Event :: cascade")
        }
    }
}
</script>
