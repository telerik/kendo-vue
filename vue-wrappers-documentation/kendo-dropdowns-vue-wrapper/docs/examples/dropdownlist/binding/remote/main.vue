<template>
    <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-dropdownlist :data-source-ref="'datasource'"
                        :data-text-field="'ProductName'"
                        :data-value-field="'ProductID'"
                        :placeholder="'Select product'">
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
