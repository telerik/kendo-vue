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
                :filterable="true"
                :pageable="true"
                :editable="true"
                :toolbar="['create', 'save', 'cancel']">
        <kendo-grid-column :field="'ProductName'"
                           :filterable-multi="true"
                           :filterable-search="true"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"
                           :filterable-multi="true"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"
                           :filterable-multi="true"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'"
                           :width="120"
                           :filterable-multi="true"
                           :filterable-data-source="discontinuedDs"></kendo-grid-column>
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
     data () {
        return {
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: { validation: { required: true } },
                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
            },
            discontinuedDs: [
                { Discontinued: true },
                { Discontinued: false }
            ]
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