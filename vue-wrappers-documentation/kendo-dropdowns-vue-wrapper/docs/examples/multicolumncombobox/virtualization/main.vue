<template>
    <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :server-filtering="true"
                      :server-paging="true"
                      :page-size="40"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :schema-model-fileds="fields">
    </kendo-datasource>
    <kendo-multicolumncombobox ref="cmb"
                               :template=itemTemplate
                               :data-text-field="'ShipName'"
                               :data-value-field="'OrderID'"
                               :virtual-item-height="26"
                               :virtual-value-mapper="valueMapperFunction"
                               :height="260"
                               :data-source-ref="'datasource1'"
                               style="width:200px">
        <kendo-multicolumncombobox-column :field="'ShipName'"
                                          :title="'Name'"
                                          :width="250">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'ShipCity'"
                                          :title="'Ship City'"
                                          :width="150">
        </kendo-multicolumncombobox-column>
        <kendo-multicolumncombobox-column :field="'OrderID'"
                                          :title="'ID'"
                                          :width="70">
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
    },
   mounted () {
        this.$refs.cmb.kendoWidget().value(10372)
    },
    methods: {
        convertValues (value) {
            var data = {}

            value = $.isArray(value) ? value : [value]

            for (var idx = 0; idx < value.length; idx++) {
                data['values[' + idx + ']'] = value[idx]
            }

            return data
        },
        valueMapperFunction: function (options) {
            var that = this

            $.ajax({
                url: 'https://demos.telerik.com/kendo-ui/service/Orders/ValueMapper',
                type: 'GET',
                dataType: 'jsonp',
                data: that.convertValues(options.value),
                success: function (data) {
                    options.success(data)
                }
            })
        }
    },
    data () {
        return {
            fields: {
                OrderID: { type: 'number' },
                Freight: { type: 'number' },
                ShipName: { type: 'string' },
                OrderDate: { type: 'date' },
                ShipCity: { type: 'string' }
            },
            itemTemplate: '<strong>#= OrderID #</strong> - #= ShipName #, #= ShipCountry #'
        }
    }
}
</script>
