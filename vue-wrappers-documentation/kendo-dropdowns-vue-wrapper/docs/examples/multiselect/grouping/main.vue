<template>
      <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :group-field="'Country'">
    </kendo-datasource>
    <kendo-multiselect :data-source-ref="'datasource'"
                       :data-text-field="'ContactName'"
                       :data-value-field="'ContactID'"
                       :filter="'contains'">
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
