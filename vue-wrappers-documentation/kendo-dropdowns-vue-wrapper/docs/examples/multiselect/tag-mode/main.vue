<template>
    <p>'Single' tag mode</p>
    <kendo-multiselect :data-source="dataSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :tag-mode="'single'">
    </kendo-multiselect>
    <br />
    <br />
    <p>'Multiple' tag mode</p>
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
            multiselectValue: "",
            dataSourceArray: [
                { text: 'Baseball', value: '1' },
                { text: 'Basketball', value: '2' },
                { text: 'Cricket', value: '3' },
                { text: 'Football', value: '4' },
                { text: 'Tennis', value: '5' },
                { text: 'Volleyball', value: '6' }
            ]
        }
    }
}
</script>
