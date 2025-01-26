<template>
      <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :group-field="'Country'">
    </kendo-datasource>
    <kendo-dropdownlist :data-source-ref="'datasource'"
                        :data-text-field="'ContactName'"
                        :data-value-field="'ContactID'"
                        style="width:300px;">
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
