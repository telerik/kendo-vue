<template>
  <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>
    <kendo-multicolumncombobox :data-source-ref="'datasource'"
                               :data-text-field="'ProductName'"
                               :data-value-field="'ProductID'"
                               :placeholder="'Select product'"
                               style="width:300px">
        <kendo-multicolumncombobox-column :field="'ProductID'"
                                          :title="'ID'"
                                          :width="70">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'ProductName'"
                                          :title="'Product Name'"
                                          :width="200">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'QuantityPerUnit'"
                                          :title="'Quantity per Unit'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitPrice'"
                                          :title="'Unit Price'"
                                          :format="'{0:c}'"
                                          :width="100">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'UnitsInStock'"
                                          :title="'Units in Stock'"
                                          :width="120">
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
