<template>
<div>
    <spreadsheet ref="spreadsheet"
                       :excel-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'"
                       :pdf-proxy-URL="'https://demos.telerik.com/kendo-ui/service/export'">
        <spreadsheet-sheet :name="'Food Order'" :data-source="localdatasource">
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
    mounted: function () {
        var spreadsheet = this.$refs.spreadsheet.kendoWidget();
        spreadsheet.element.css('height', '400px');
        spreadsheet.element.css('width', '100%');
        spreadsheet.resize();
    },
    data: function() {
		return {
			localdatasource: [{
				"ProductID": 1,
				"ProductName": "Chai",
				"UnitPrice": 18,
				"UnitsInStock": 39,
				"Discontinued": false,
			},{
				"ProductID": 2,
				"ProductName": "Chang",
				"UnitPrice": 17,
				"UnitsInStock": 40,
				"Discontinued": false,
			},{
				"ProductID": 3,
				"ProductName": "Aniseed Syrup",
				"UnitPrice": 10,
				"UnitsInStock": 13,
				"Discontinued": false,
			},{
				"ProductID": 4,
				"ProductName": "Chef Anton",
				"UnitPrice": 22,
				"UnitsInStock": 53,
				"Discontinued": false,
			},{
				"ProductID": 5,
				"ProductName": "Chef Gumbo Mix",
				"UnitPrice": 21.35,
				"UnitsInStock": 0,
				"Discontinued": true,
			},{
				"ProductID": 6,
				"ProductName": "Boysenberry Spread",
				"UnitPrice": 25,
				"UnitsInStock": 120,
				"Discontinued": false,
			}]
		}
	}
}
</script>
