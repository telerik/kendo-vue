<template>
<div>
    <dropdowntree :data-source="localDataSource"                      
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
  } 
}
</script>
