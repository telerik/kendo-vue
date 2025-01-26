<template>
  <kendo-combobox :data-source="dataSourceArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :footer-template="footerTemplate">
    </kendo-combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-combobox': ComboBox
  },
  data: function () {
    return  {
        dataSourceArray: [
            { text: 'Black', value: '1' },
            { text: 'Orange', value: '2' },
            { text: 'Grey', value: '3' }
        ],
        footerTemplate: '<strong>Footer template</strong>'
    };
  }
}
</script>
