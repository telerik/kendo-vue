<template>
    <kendo-autocomplete :data-source="dataSourceArray"
                        :filter="'contains'"
                        :placeholder="'Choose a sport...'"
                        @change="onChange"
                        @close="onClose"
                        @dataBound="onDataBound"
                        @filtering="onFiltering"
                        @open="onOpen"
                        @select="onSelect">
    </kendo-autocomplete>
</template>
<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-autocomplete': AutoComplete
  },
  data: function() {
        return {
            dataSourceArray: [
                'Football',
                'Tennis',
                'Basketball',
                'Baseball',
                'Cricket',
                'Field Hockey',
                'Volleyball'
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
