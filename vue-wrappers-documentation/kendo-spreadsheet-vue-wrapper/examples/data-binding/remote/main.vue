<template>
<div>
    <spreadsheet ref="spreadsheet" :columns="20" :rows="100" :toolbar="false" :sheetsbar="false">
        <spreadsheet-sheet :name="'Products'"
							:data-source="datasource"
							:rows="rows"
							:columns="columns">
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
        // spreadsheet.sheetByIndex(0).setDataSource(this.datasource);
    },
    data: function () {
        return {
            rows: [{
                height: 40,
                cells: [{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                },{
                    bold: "true",
                    background: "#9c27b0",
                    textAlign: "center",
                    color: "white"
                }]
            }],
            columns: [
                { width: 100 },
                { width: 415 },
                { width: 145 },
                { width: 145 },
                { width: 145 }
            ],
            datasource: {
                transport: {
                    read: function (options) {
                        $.ajax({
                            url: "https://demos.telerik.com/kendo-ui/service/Products/",
                            dataType: "jsonp",
                            success: function (result) {
                                options.success(result);
                            },
                            error: function (result) {
                                options.error(result);
                            }
                        });
                    },
                    submit: function (options) {
                        $.ajax({
                            url: "https://demos.telerik.com/kendo-ui/service/Products/Submit",
                            data: { models: kendo.stringify(e.data) },
                            contentType: "application/json",
                            dataType: "jsonp",
                            success: function (result) {
                                e.success(result.Updated, "update");
                                e.success(result.Created, "create");
                                e.success(result.Destroyed, "destroy");
                            },
                            error: function (xhr, httpStatusMessage, customErrorMessage) {
                                alert(xhr.responseText);
                            }
                        });
                    }
                },
                batch: true,
                schema: {
                    model: {
                        id: "ProductID",
                        fields: {
                            ProductID: { type: "number" },
                            ProductName: { type: "string" },
                            UnitPrice: { type: "number" },
                            Discontinued: { type: "boolean" },
                            UnitsInStock: { type: "number" }
                        }
                    }
                }
            }
        };
    }
}
</script>
