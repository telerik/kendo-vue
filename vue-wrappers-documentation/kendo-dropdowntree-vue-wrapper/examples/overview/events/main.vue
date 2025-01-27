<template>
<div>
    <dropdowntree :data-source="localDataSource"
                      @dataBound="onDataBound"
                      @change="onChange"
                      @filtering="onFiltering"
                      @open="onOpen"
                      @close="onClose"
                      :placeholder="'Select ...'"
                      style="width: 300px;">
  </dropdowntree>
</div>
</template>
<script>
import { markRaw } from 'vue';
import { DropDownTree } from '@progress/kendo-dropdowntree-vue-wrapper';
export default {
name: 'App',
components: {
  'dropdowntree': DropDownTree
},
  data: function() {
      return {
          localDataSource: markRaw(new kendo.data.HierarchicalDataSource({
              data: [{
                  text: 'Furniture',
                  items: [
                      { text: 'Tables & Chairs' },
                      { text: 'Sofas' },
                      { text: 'Occasional Furniture' }
                  ]
              }, {
                  text: 'Decor',
                  items: [
                      { text: 'Bed Linen' },
                      { text: 'Curtains & Blinds' },
                      { text: 'Carpets' }
                  ]
              }]
          }))
      }
  },
  methods: {
        onDataBound: function (ev) {
            console.log("Event :: dataBound");
        },
        onChange: function (ev) {
            console.log("Event :: change");
        },
        onFiltering: function (ev) {
            console.log("Event :: filtering");
        },
        onOpen: function (ev) {
            console.log("Event :: open");
        },
        onClose: function (ev) {
            console.log("Event :: close");
        }
    }
}
</script>
