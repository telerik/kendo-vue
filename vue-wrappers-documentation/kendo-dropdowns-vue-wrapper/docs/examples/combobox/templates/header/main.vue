<template>
  <kendo-combobox :data-source="dataSourceArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :header-template="headerTemplate">
    </kendo-combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-combobox': ComboBox
  },
   data: function () {
     return {
        dataSourceArray: [
            { text: 'Black', value: '1' },
            { text: 'Orange', value: '2' },
            { text: 'Grey', value: '3' }
        ],
        headerTemplate: '<strong>Header template</strong>'
    };
   }
}
</script>
