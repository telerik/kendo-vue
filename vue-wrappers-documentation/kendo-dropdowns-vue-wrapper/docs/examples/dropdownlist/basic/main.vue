<template>
    DropDownList value: {{ dropdownlistValue }}
    <br />
    <br />
    <kendo-dropdownlist v-model="dropdownlistValue"
                        :data-source="dataSourceArray"
                        :data-text-field="'text'"
                        :data-value-field="'value'"
                        :filter="'contains'">
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
            dropdownlistValue: "",
            dataSourceArray: [
                { text: 'Small', value: '1' },
                { text: 'Medium', value: '2' },
                { text: 'Large', value: '3' },
                { text: 'X-Large', value: '4' },
                { text: '2X-Large', value: '5' }
            ]
        }
    }
}
</script>
