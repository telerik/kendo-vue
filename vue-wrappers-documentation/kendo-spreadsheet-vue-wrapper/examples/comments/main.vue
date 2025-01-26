<template>
<div>
    <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" @click="onClick">Click to add or remove the comment from the A2 cell.</button>
    <br />
    <br />
    <spreadsheet ref="spreadsheet">
        <spreadsheet-sheet :name="'Comments'"
                            :rows="firstRows"
                            :columns="firstColumns">
        </spreadsheet-sheet>
    </spreadsheet>
</div>
</template>

<script>
import { Spreadsheet, SpreadsheetSheet } from '@progress/kendo-spreadsheet-vue-wrapper';

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
            firstRows: [{
                cells: [{
                    value: "This cell has a comment.",
                    bold: true,
                    comment: "Comment set on the cell with the Spreadsheet initialization."
                }]
            }, {
                cells: [{
                    value: "This cell will get a comment on button click.",
                    bold: true
                }]
            }],
            firstColumns: [{
                width: 300
            }]
        }
    },
    methods: {
        onClick: function () {
            var spreadsheet = this.$refs.spreadsheet.kendoWidget();
            var range = spreadsheet.activeSheet().range("A2");
            var comment = range.comment();

            if (comment === null) {
                range.comment("Comment added using range API call");
            } else {
                range.comment(null);
            }
        }
    }
}
</script>
