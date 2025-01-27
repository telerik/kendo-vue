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
                     :column-header-template="columnHeaderTemplate"
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
            columnHeaderTemplate: this.generateColumnHeaderTemplate(),
            measures: ['[Measures].[Reseller Freight Cost]']
        }
    },
    methods: {
        generateColumnHeaderTemplate: function() {
            var template =
            '# if (!member.children.length) { #' +
                '<em>#: member.caption #</em>' +
            '# } else { #' +
                '#: member.caption #' +
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

