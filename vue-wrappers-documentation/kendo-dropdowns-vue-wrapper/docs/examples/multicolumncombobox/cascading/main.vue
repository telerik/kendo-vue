<template>
   <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :server-filtering="true"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories'">
    </kendo-datasource>
    <kendo-multicolumncombobox id="categories"
                               :filter="'contains'"
                               :data-text-field="'CategoryName'"
                               :data-value-field="'CategoryID'"
                               :data-source-ref="'datasource1'"
                               style="width:300px">
        <kendo-multicolumncombobox-column :field="'CategoryName'" :title="'Name'">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'CategoryID'" :title="'ID'" :width="70">
        </kendo-multicolumncombobox-column>
    </kendo-multicolumncombobox>
    <br/>
    <br/>
    <kendo-datasource ref="datasource2"
                      :type="'odata'"
                      :server-filtering="true"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-multicolumncombobox disabled="disabled"
                               :auto-bind="false"
                               :cascade-from="'categories'"
                               :filter="'contains'"
                               :data-text-field="'ProductName'"
                               :data-value-field="'ProductID'"
                               :data-source-ref="'datasource2'"
                               style="width:300px">
        <kendo-multicolumncombobox-column :field="'ProductName'" :title="'Name'">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'ProductID'" :title="'ID'" :width="70">
        </kendo-multicolumncombobox-column>
    </kendo-multicolumncombobox>
</template>
<script>
import { MultiColumnComboBox, MultiColumnComboBoxColumn } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
      'kendo-multicolumncombobox': MultiColumnComboBox,
      'kendo-multicolumncombobox-column': MultiColumnComboBoxColumn,
      'kendo-datasource': KendoDataSource
    }
}
</script>
