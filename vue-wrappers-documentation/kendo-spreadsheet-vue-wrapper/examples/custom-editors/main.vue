<template>
<div>
    <spreadsheet ref="spreadsheet" :columns="5" :rows="10" :sheetsbar="false">
        <spreadsheet-sheet :columns="columns" :rows="rows">
        </spreadsheet-sheet>
    </spreadsheet>
</div>
</template>

<script>
import { Spreadsheet, SpreadsheetSheet } from '@progress/kendo-spreadsheet-vue-wrapper';

window['$'] = window['jQuery'] = $;

kendo.spreadsheet.registerEditor("color", function(){

var context, dlg, colorpicker, model;
    function create() {
        if (!dlg) {
            model = kendo.observable({
                value: "#000000",
                ok: function() {
                    context.callback(model.value);
                    dlg.close();
                },
                cancel: function() {
                    dlg.close();
                }
            });
            var el = $("<div data-visible='true' data-role='window' data-modal='true' data-resizable='false' data-title='Select color'>" +
                      "  <div data-role='flatcolorpicker' data-bind='value: value'></div>" +
                      "  <div style='margin-top: 1em; text-align: right'>" +
                      "    <button style='width: 6em' class='k-button' data-bind='click: ok'>OK</button>" +
                      "    <button style='width: 6em' class='k-button' data-bind='click: cancel'>Cancel</button>" +
                      "  </div>" +
                      "</div>");
            kendo.bind(el, model);
            dlg = el.getKendoWindow();
        }
    }
    function open() {
        create();
        dlg.open();
        dlg.center();
        var value = context.range.value();
        if (value != null) {
            model.set("value", value);
        }
    }
    return {
        edit: function(options) {
            context = options;
            open();
        },
        icon: "k-i-background"
    }
});

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
            columns: [{
                width: 100
            },{
                width: 100
            }],
            rows: [{
                cells: [
                    { value: "Select date:", bold: true },
                    { format: "MMMM d, yyyy",
                    background: "#fef0cd",
                    validation: {
                        dataType: "date",
                        showButton: true,
                        comparerType: "between",
                        from: 'DATEVALUE("1/1/1900")',
                        to: 'DATEVALUE("1/1/2100")',
                        allowNulls: true,
                        type: "reject",
                        titleTemplate: "Selected Date validation error",
                        messageTemplate: "Selected Date should be between year 1900 and 2100."
                    } }
                ]
            }, {
                cells: [
                    { value: "Select item:", bold: true },
                    { background: "#fef0cd",
                    validation: {
                        dataType: "list",
                        showButton: true,
                        comparerType: "list",
                        from: '{ "Foo item 1", "Bar item 2", "Baz item 3" }',
                        allowNulls: true,
                        type: "reject"
                    } }
                ]
            }, {
                cells: [
                    { value: "Select color:", bold: true },
                    { background: "#fef0cd",
                    editor: "color" }
                ]
            }]
        }
    }
}
</script>
