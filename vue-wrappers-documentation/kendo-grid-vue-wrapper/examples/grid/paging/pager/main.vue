<template>
   <kendo-datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
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
                      :batch='true'
                      :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :navigatable="true"
                :editable="true"
                :filterable="true"
                :pageable-always-visible="false"
                :pageable-page-sizes="[5, 10, 20, 100]"
                :toolbar="['create', 'save', 'cancel']">
        <kendo-grid-column :field="'ProductName'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="150"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="150"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="150"></kendo-grid-column>
        <kendo-grid-column :command="['destroy']"
                           :title="'&nbsp;'"
                           :width="100"></kendo-grid-column>
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
     data: function () {
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
        }
    }
}
</script>