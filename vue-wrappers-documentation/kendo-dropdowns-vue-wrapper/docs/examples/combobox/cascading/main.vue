<template>
    <kendo-datasource ref="datasource1"
                        :type="'odata'"
                        :server-filtering="true"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'">
    </kendo-datasource>
    <kendo-combobox id="categories"
                    :data-source-ref="'datasource1'"
                    :filter="'contains'"
                    :data-text-field="'CategoryName'"
                    :data-value-field="'CategoryID'">
    </kendo-combobox>
    <br/>
    <br/>
    <kendo-datasource ref="datasource2"
                        :type="'odata'"
                        :server-filtering="true"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-combobox disabled="disabled"
                    :data-source-ref="'datasource2'"
                    :auto-bind="false"
                    :cascade-from="'categories'"
                    :filter="'contains'"
                    :data-text-field="'ProductName'"
                    :data-value-field="'ProductID'">
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
