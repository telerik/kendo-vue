<template>
  <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :page-size="80">
    </kendo-datasource>
    <kendo-autocomplete :data-source-ref="'datasource'"
                        :data-text-field="'ShipName'"
                        :placeholder="'Choose a ship...'">
    </kendo-autocomplete>
</template>
<script>
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-autocomplete': AutoComplete,
    'kendo-datasource': KendoDataSource
  }
}
</script>
