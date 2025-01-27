<template>
  <kendo-multiselect :data-source="dataSourceArray"
                       :data-text-field="'text'"
                       :data-value-field="'value'"
                       :placeholder="'Select a country...'">
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
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        }
    }
}
</script>
