<template>
  <kendo-dropdownlist :data-source="dataSourceArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :footer-template="footerTemplate">
    </kendo-dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-dropdownlist': DropDownList
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
