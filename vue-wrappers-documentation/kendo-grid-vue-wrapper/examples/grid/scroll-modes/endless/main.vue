<template>
  <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'"
                      :transport-read-data-type="'jsonp'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                      :transport-destroy-data-type="'jsonp'"
                      :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                      :transport-create-data-type="'jsonp'"
                      :transport-parameter-map="parameterMap"
                      :schema-model-id="'ProductID'"
                      :schema-model-fields="schemaModelFields"
                      :schema-data="schemaData"
                      :batch='true'
                      :page-size='20'
                      :server-paging="true"
                      :server-sorting="true">
    </kendo-datasource>

    <kendo-grid :height="550"
                :data-source-ref="'datasource1'"
                :sortable="true"
                :scrollable-endless="true"
                :pageable-numeric="false"
                :pageable-previous-next="false"
                :editable="'inline'"
                :toolbar="['create']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']"
                           :title="'&nbsp;'"
                           :width="200"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   data () {
        return {
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: { validation: { required: true } },
                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
            }
        }
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) }
            }
        },
        schemaData: function(response) {
            return response.d ? response.d.results: response;
        }
    }
}
</script>