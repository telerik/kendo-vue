<template>
  <kendo-listbox :data-source=dataSourceArray
                   :data-text-field="'name'"
                   :data-value-field="'id'"                
                   :toolbar-tools="['moveUp', 'moveDown', 'remove']">
    </kendo-listbox>
</template>
<script>
import { ListBox } from '@progress/kendo-listbox-vue-wrapper';
export default {
  components: {
    'kendo-listbox': ListBox
  },
   data: function() {
        return {
            dataSourceArray: [
                { name: "John", id: 1 },
                { name: "Jane", id: 2 },
                { name: "Jim", id: 3 },
                { name: "Tim", id: 4 },
                { name: "Mary", id: 5 }
            ]
        }
    }
}
</script>
