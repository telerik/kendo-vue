<template>
  <kendo-dropdownlist :data-source="dataSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :options-label="'Select a country...'">
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
    }
}
</script>
