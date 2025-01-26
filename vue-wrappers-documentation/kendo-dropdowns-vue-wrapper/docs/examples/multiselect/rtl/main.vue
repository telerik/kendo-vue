<template>
   <div class="k-rtl">
        <kendo-multiselect :data-source="dataSourceArray"
                           :data-text-field="'text'"
                           :data-value-field="'value'">
        </kendo-multiselect>
    </div>
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
                { text: 'Black', value: '1' },
                { text: 'Orange', value: '2' },
                { text: 'Grey', value: '3' }
            ]
        }
    }
}
</script>
