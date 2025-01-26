<template>
<div>
    <datasource ref="remoteDataSource"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                      :transport-read-data-type="'jsonp'"
                      :transport-read-type="'GET'"
                      :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                      :transport-update-data-type="'jsonp'"
                      :transport-update-type="'GET'"
                      :schema-model-id="'ProductID'"
                      :schema-model-fields="schemaModelFields"
                      :page-size='20'>
    </datasource>

    <grid :height="600"
                :data-source-ref="'remoteDataSource'"
                :pageable='true'
                :editable="'inline'">
        <grid-column field="ProductName"></grid-column>
        <grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></grid-column>
        <grid-column field="UnitsInStock" title="Units In Stock" :width="120"></grid-column>
      <grid-column :command="['edit']" title="&nbsp;" width="250px"></grid-column>
    </grid>
</div>
</template>

<script>
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';

export default {
	name: 'App',
	components: {
		'grid': Grid,
		'grid-column': GridColumn,
		'datasource': DataSource
    },
    data: function() {
        return {
            dataSourceArray: [
                { text: 'Albania', value: '1' },
                { text: 'Andorra', value: '2' },
                { text: 'Armenia', value: '3' },
                { text: 'Austria', value: '4' },
                { text: 'Azerbaijan', value: '5' },
                { text: 'Belarus', value: '6' },
                { text: 'Belgium', value: '7' }
            ]
        }
    }
}
</script>
