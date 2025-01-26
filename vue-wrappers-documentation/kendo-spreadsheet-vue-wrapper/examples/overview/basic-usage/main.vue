<template>
<div>
    <spreadsheet ref="spreadsheet"
                :excel-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'"
                :pdf-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'">
        <spreadsheet-sheet :name="'Food Order'"
                            :merged-cells="mergedCells"
                            :rows="firstRows"
                            :columns="firstColumns">
        </spreadsheet-sheet>
    </spreadsheet>
</div>
</template>

<script>
import { Spreadsheet, SpreadsheetSheet } from '@progress/kendo-spreadsheet-vue-wrapper';

window.JSZip = JSZip;

export default {
  name: 'App',
  components: {
    'spreadsheet': Spreadsheet,
    'spreadsheet-sheet': SpreadsheetSheet
  },
	data: function (){
		return {
			mergedCells: ['A1:G1', 'C15:E15'],
	        firstRows: [{
				height: 70,
				cells: [{
					index: 0, value: 'Invoice #52 - 06/23/2015', fontSize: 32, background: 'rgb(96,181,255)', textAlign: 'center', color: 'white'
				}]
			},{
				height: 25,
				cells: [{
					value: 'ID', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					value: 'Product', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					value: 'Quantity', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					value: 'Price', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					value: 'Tax', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					value: 'Amount', background: 'rgb(167,214,255)', textAlign: 'center', color: 'rgb(0,62,117)'
				},{
					background: 'rgb(167,214,255)', color: 'rgb(0,62,117)'
				}]
			},{
				cells: [{
					value: 216321, textAlign: 'center', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					value: 'Calzone', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					value: 1, textAlign: 'center', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					value: 12.39, format: '$#,##0.00', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					formula: 'C3*D3*0.2', format: '$#,##0.00', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					formula: 'C3*D3+E3', format: '$#,##0.00', background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				},{
					background: 'rgb(255,255,255)', color: 'rgb(0,62,117)'
				}]
			},{
				cells: [{
					value: 546897, textAlign: 'center', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					value: 'Margarita', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					value: 2, textAlign: 'center', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					value: 8.79, format: '$#,##0.00', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					formula: 'C4*D4*0.2', format: '$#,##0.00', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					formula: 'C4*D4+E4', format: '$#,##0.00', background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				},{
					background: 'rgb(229,243,255)', color: 'rgb(0,62,117)'
				}]
			}],
	        firstColumns: [{
				width: 100
			},{
				width: 150
			},{
				width: 100
			},{
				width: 100
			},{
				width: 100
			},{
				width: 100
			}]
		}
	},
	mounted: function (){
		var spreadsheet = this.$refs.spreadsheet.kendoWidget();
		spreadsheet.element.css('height', '400px');
		spreadsheet.element.css('width', '100%');
		spreadsheet.resize();
	}
}
</script>
