<template>
 <kendo-listbox :data-source="dataSourceArray"
                   :data-text-field="'name'"
                   :data-value-field="'id'"
                   :messages="messages"
                   :toolbar-tools="['moveUp', 'moveDown', 'remove', 'transferAllFrom', 'transferAllTo', 'transferFrom', 'transferTo']">
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
                { name: "Mary", id: 5 },
                { name: "Brian", id: 6 },
                { name: "Nicholas", id: 7 },
                { name: "Kevin", id: 8 }
            ],
            messages: {
                tools: {
                    moveUp: "Promote",
                    moveDown: "Demote",
                    remove: "Remove Employee",
                    transferTo: "Transfer To",
                    transferFrom: "Transfer From",
                    transferAllTo: "Transfer All To",
                    transferAllFrom: "Transfer All From"
                }
            }
        }
    }
}
</script>
