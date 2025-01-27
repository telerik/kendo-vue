<template>
  <kendo-listbox :data-source=dataSourceArray
                   :data-text-field="'country'"
                   :data-value-field="'id'"
                   :selectable="'multiple'"
                   :draggable=true                 
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
                { country: "Germany", id: 1 },
                { country: "France", id: 2 },
                { country: "Italy", id: 3 },
                { country: "Spain", id: 4 },
                { country: "Hungary", id: 5 }
            ],

        }
    }
}
</script>
