<template>
    <kendo-button @kendoclick="onClick" >Export</kendo-button>
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
                     ref="pivot1"
                     data-source-ref="pivotdatasource1"
                     :columnWidth="200"
                     :height="400"
                     :excel-file-name="'Kendo UI PivotGrid Export.xlsx'"
                     :excel-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'"
                     :excel-filterable="true">
    </kendo-pivotgrid>
</template>
<script>
import { PivotGrid, PivotConfigurator } from '@progress/kendo-pivotgrid-vue-wrapper';
import { Button } from '@progress/kendo-buttons-vue-wrapper';
import { PivotDataSource, PivotColumn, PivotRow } from '@progress/kendo-datasource-vue-wrapper';

window.JSZip = JSZip;

export default {
  components: {
    'kendo-button': Button,
    'kendo-pivotgrid': PivotGrid,
    'kendo-pivotconfigurator': PivotConfigurator,
    'kendo-pivotdatasource': PivotDataSource,
     'kendo-pivot-column': PivotColumn,
    'kendo-pivot-row': PivotRow
  },
   data () {
        return {
            measures: ['[Measures].[Reseller Freight Cost]']
        }
    },
    methods: {
      onClick: function (ev) {
        var pivot = this.$refs.pivot1.kendoWidget()
        pivot.saveAsExcel()
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

