<template>
    <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-combobox :data-source-ref="'datasource'"
                    :data-text-field="'ProductName'"
                    :data-value-field="'ProductID'"
                    :placeholder="'Select product'">
    </kendo-combobox>
</template>
<script>
import { ComboBox } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-combobox': ComboBox,
    'kendo-datasource': KendoDataSource
  }
}
</script>
