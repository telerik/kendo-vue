<template>
   <kendo-multiselect :data-source="dataSourceArray"
                       :data-text-field="'text'"
                       :data-value-field="'value'">
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
                { text: 'Albania', value: 1 },
                { text: 'Armenia', value: 2 },
                { text: 'Austria', value: 3 },
                { text: 'Azerbaijan', value: 4 },
                { text: 'Belarus', value: 5 },
                { text: 'Belgium', value: 6 },
                { text: 'Bosnia & Herzegovina', value: 7 },
                { text: 'Croatia', value: 8 },
                { text: 'Cyprus', value: 9 },
                { text: 'Czech Republic', value: 10 },
                { text: 'Denmark', value: 11 },
                { text: 'Estonia', value: 12 },
                { text: 'Finland', value: 13 },
                { text: 'France', value: 14 },
                { text: 'Georgia', value: 15 },
                { text: 'Germany', value: 16 },
                { text: 'Greece', value: 17 }
            ]
        }
    }
}
</script>
