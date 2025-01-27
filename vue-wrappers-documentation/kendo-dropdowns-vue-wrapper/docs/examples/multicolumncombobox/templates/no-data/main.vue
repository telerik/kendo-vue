<template>
  <kendo-multicolumncombobox :data-source="dataSourceArray"
                               :no-data-template="noDataTemplate">
    </kendo-multicolumncombobox>
</template>
<script>
import { MultiColumnComboBox } from '@progress/kendo-dropdowns-vue-wrapper';
export default {
  components: {
    'kendo-multicolumncombobox': MultiColumnComboBox
  },
     data () {
        return {
            noDataTemplate: "No Data!",
            dataSourceArray: []
        }
    }
}
</script>
