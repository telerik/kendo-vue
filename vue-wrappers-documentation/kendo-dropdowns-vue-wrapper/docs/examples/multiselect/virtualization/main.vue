<template>
   <kendo-datasource ref="datasource"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'"
                      :schema-model-fileds="fields"
                      :server-filtering="true"
                      :server-paging="true"
                      :page-size="40">
    </kendo-datasource>
    <kendo-multiselect ref="multiselect"
                       :data-source-ref="'datasource'"
                       :data-text-field="'ShipName'"
                       :data-value-field="'OrderID'"
                       :placeholder="'Select orders...'"
                       :virtual-value-mapper="valueMapperFunction"
                       :virtual-item-height="26"
                       :height="260"
                       :item-template="itemTemplate">
    </kendo-multiselect>
</template>
<script>
import { MultiSelect } from '@progress/kendo-dropdowns-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';
export default {
  components: {
    'kendo-multiselect': MultiSelect,
    'kendo-datasource': KendoDataSource
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
            var that = this;

            $.ajax({
                url: 'https://demos.telerik.com/kendo-ui/service/Orders/ValueMapper',
                type: 'GET',
                dataType: 'jsonp',
                data: that.convertValues(options.value),
                success: function (data) {
                    options.success(data)
                }
            })
        },
    },
    data: function () {
        return {
            fields: {
                OrderID: { type: 'number' },
                Freight: { type: 'number' },
                ShipName: { type: 'string' },
                OrderDate: { type: 'date' },
                ShipCity: { type: 'string' }
            },
            itemTemplate: '<strong>#= OrderID #</strong> - #= ShipName #, #= ShipCountry #'
        };
    },
    mounted() {
        var multiselect = this.$refs.multiselect.kendoWidget()
        multiselect.value(10600)
    }
}
</script>
