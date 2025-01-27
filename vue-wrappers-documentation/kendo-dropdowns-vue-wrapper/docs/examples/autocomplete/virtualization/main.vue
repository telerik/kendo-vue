<template>
 <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :schema-model-fileds="fields"
                      :server-filtering="true"
                      :server-paging="true"
                      :page-size="40">
    </kendo-datasource>
    <kendo-autocomplete :data-source-ref="'datasource'"
                        :data-text-field="'ShipName'"
                        :virtual-item-height="26"
                        :template="itemTemplate"
                        :height="260"
                        style="width:400px;">
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
