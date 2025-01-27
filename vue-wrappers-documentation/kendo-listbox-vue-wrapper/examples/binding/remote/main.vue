<template>
  <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'">
    </kendo-datasource>
    <kendo-listbox :data-source-ref="'datasource'"
                        :data-text-field="'ContactName'"
                        :data-value-field="'CustomerID'"
                        :toolbar-tools="['moveUp', 'moveDown', 'remove']">
    </kendo-listbox>
</template>
<script>
import { ListBox } from '@progress/kendo-listbox-vue-wrapper';
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-listbox': ListBox,
    'kendo-datasource': DataSource
  }
}
</script>
