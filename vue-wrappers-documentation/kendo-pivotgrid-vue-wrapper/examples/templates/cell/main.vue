<template>
      <kendo-pivotdatasource ref="pivotdatasource1"
                           transport-read-url="https://demos.telerik.com/olap/msmdpump.dll"
                           transport-connection-catalog="Adventure Works DW 2008R2"
                           transport-connection-cube="Adventure Works"
                           type="xmla"
                           schema-type="xmla"
                           :measures="measures">
          <kendo-pivot-column :name="'[Date].[Calendar]'" :expand="true"></kendo-pivot-column>
          <kendo-pivot-row :name="'[Product].[Product Line]'" :expand="true"></kendo-pivot-row>
    </kendo-pivotdatasource>
    <kendo-pivotgrid id="pivotgrid1"
                     data-source-ref="pivotdatasource1"
                     :data-cell-template="dataCellTemplate"
                     :columnWidth="200"
                     :height="400" >
    </kendo-pivotgrid>
</template>
<script>
import { PivotGrid, PivotConfigurator } from '@progress/kendo-pivotgrid-vue-wrapper';
import { PivotDataSource, PivotColumn, PivotRow } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-pivotgrid': PivotGrid,
    'kendo-pivotconfigurator': PivotConfigurator,
    'kendo-pivotdatasource': PivotDataSource,
     'kendo-pivot-column': PivotColumn,
    'kendo-pivot-row': PivotRow
  },
  data () {
        return {
            dataCellTemplate: this.generateDataCellTemplate(),
            measures: ['[Measures].[Reseller Freight Cost]']
        }
    },
    methods: {
        generateDataCellTemplate: function() {
            var template =
            '# var columnMember = columnTuple ? columnTuple.members[0] : { children: [] }; #' +
            '# var rowMember = rowTuple ? rowTuple.members[0] : { children: [] }; #' +
            '# var value = kendo.toString(kendo.parseFloat(dataItem.value) || "N/A", "c2"); #' +
            '# if (columnMember.children.length || rowMember.children.length) { #' +
                '#: value #' +
            '# } else { #' +
                '<em  style="color: red">#: value # (total)</em>' +
            '# } #'

            return kendo.template(template)
        }
    }
}
</script>
<style>
    .hidden-on-narrow {
        display: inline-block;
        vertical-align: top;
    }
</style>

