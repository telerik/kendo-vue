<template>
    <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :group-field="'Country'">
    </kendo-datasource>
    <kendo-combobox :data-source-ref="'datasource'"
                    :data-text-field="'ContactName'"
                    :data-value-field="'ContactID'"
                    :filter="'contains'"
                    :placeholder="'Choose a contact...'"
                    style="width:300px;">
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
