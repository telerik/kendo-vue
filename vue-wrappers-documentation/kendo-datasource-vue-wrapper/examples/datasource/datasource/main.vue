<template>
<div>
    <h4>Select product name</h4>
    <datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                      :transport-read-data-type="'jsonp'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                      :transport-destroy-data-type="'jsonp'"
                      :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                      :transport-create-data-type="'jsonp'"
                      :schema-model-id="'ProductID'"
                      :schema-model-fields="schemaModelFields"
                      :page-size='20'>
    </datasource>
    <div class="col-xs-12 col-sm-6 example-col">
        <autocomplete :data-source-ref="'datasource1'"
                            :auto-bind='false'
                            :data-text-field="'ProductName'"
                            :placeholder="'Choose a product...'">
        </autocomplete>
    </div>
    <grid :height="300"
                :auto-bind='true'
                :data-source-ref="'datasource1'"
                :pageable='true'
                :selectable='true'>
        <grid-column field="ProductName" :width="120"></grid-column>
        <grid-column field="UnitPrice" title="Unit Price" :width="100" :format="'{0:c}'"></grid-column>
        <grid-column field="UnitsInStock" title="Units In Stock" :width="100"></grid-column>
        <grid-column field="Discontinued" :width="100"></grid-column>
    </grid>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { AutoComplete } from '@progress/kendo-dropdowns-vue-wrapper';

export default {
	name: 'App',
	components: {
		'datasource': DataSource,
		'autocomplete': AutoComplete,
		'grid': Grid,
		'grid-column': GridColumn
    },
    data: function() {
        return {
            schemaModelFields: {
                ProductID: { editable: false, nullable: true },
                ProductName: { validation: { required: true } },
                UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                Discontinued: { type: 'boolean' },
                UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
            }
        }
    }
}
</script>
