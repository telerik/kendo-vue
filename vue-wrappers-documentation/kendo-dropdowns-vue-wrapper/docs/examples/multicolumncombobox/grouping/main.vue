<template>
     <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                      :group-field="'Country'">
    </kendo-datasource>
    <kendo-multicolumncombobox :data-source-ref="'datasource'"
                               :data-text-field="'ContactName'"
                               :data-value-field="'CustomerID'"
                               :height="260"
                               style="width:400px">
        <kendo-multicolumncombobox-column :field="'ContactName'"
                                          :title="'Name'">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'CustomerID'"
                                          :title="'ID'">
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
