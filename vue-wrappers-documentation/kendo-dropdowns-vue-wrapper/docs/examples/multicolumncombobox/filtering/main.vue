<template>
   <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :server-filtering="true"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-multicolumncombobox :data-source-ref="'datasource1'"
                               :placeholder="'Select product'"
                               :data-text-field="'ProductName'"
                               :data-value-field="'ProductID'"
                               :filter="'contains'"
                               :auto-bind="false"
                               :min-length="3"
                               style="width:200px">
        <kendo-multicolumncombobox-column :field="'ProductID'"
                                          :title="'ID'"
                                          :width="70">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'ProductName'"
                                          :title="'Product Name'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'QuantityPerUnit'"
                                          :title="'Quantity per Unit'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitPrice'"
                                          :title="'Unit Price'"
                                          :format="'{0:c}'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitsInStock'"
                                          :title="'Units in Stock'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
    </kendo-multicolumncombobox>
    <br/>
    <em>Demo hint: Type 'cha'</em>
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
