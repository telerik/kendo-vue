<template>
   <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'"
                      :server-filtering="true">
    </kendo-datasource>
    <kendo-dropdownlist :data-source-ref="'datasource'"
                        :data-text-field="'ProductName'"
                        :data-value-field="'ProductID'"
                        :filter="'contains'"
                        :options-label="'Select product'">
    </kendo-dropdownlist>
</template>
<script>
import { DropDownList } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-dropdownlist': DropDownList,
    'kendo-datasource': KendoDataSource
  }
}
</script>
