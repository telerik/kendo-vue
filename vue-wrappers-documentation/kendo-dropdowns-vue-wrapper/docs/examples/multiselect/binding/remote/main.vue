<template>
    <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-multiselect :data-source-ref="'datasource'"
                       :data-text-field="'ProductName'"
                       :data-value-field="'ProductID'"
                       :placeholder="'Select product'">
    </kendo-multiselect>
</template>
<script>
import { MultiSelect } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-multiselect': MultiSelect,
    'kendo-datasource': KendoDataSource
  }
}
</script>
