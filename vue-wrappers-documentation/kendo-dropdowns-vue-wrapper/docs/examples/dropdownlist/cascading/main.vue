<template>
   <kendo-datasource ref="datasource1"
                        :type="'odata'"
                        :server-filtering="true"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'">
    </kendo-datasource>
    <kendo-dropdownlist id="categories"
                        :data-source-ref="'datasource1'"
                        :data-text-field="'CategoryName'"
                        :data-value-field="'CategoryID'"
                        :option-label="'Select category...'">
    </kendo-dropdownlist>
    <br/>
    <br/>
    <kendo-datasource ref="datasource2"
                        :type="'odata'"
                        :server-filtering="true"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-dropdownlist disabled="disabled"
                        :data-source-ref="'datasource2'"
                        :auto-bind="false"
                        :cascade-from="'categories'"
                        :data-text-field="'ProductName'"
                        :data-value-field="'ProductID'"
                        :option-label="'Select product...'">
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
