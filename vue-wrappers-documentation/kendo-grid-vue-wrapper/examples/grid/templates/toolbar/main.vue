<template>
  <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products'">
    </kendo-datasource>

    <kendo-grid ref="grid"
                :height="550"
                :data-source-ref="'datasource1'"
                :sortable="true"
                :toolbar="toolbarTemplate">
        <kendo-grid-column :field="'ProductID'"
                           :title="'Product ID'"></kendo-grid-column>
        <kendo-grid-column :field="'ProductName'"
                           :title="'Product Name'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitPrice'"
                           :title="'Unit Price'"
                           :width="120"
                           :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column :field="'UnitsInStock'"
                           :title="'Units In Stock'"
                           :width="120"></kendo-grid-column>
        <kendo-grid-column :field="'Discontinued'" :width="120"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
 methods: {
        toolbarTemplate: function() {
            var templateHtml =
                '<span>' +
                    '<a class="k-pager-refresh k-link k-button" title="Refresh"><span class="k-icon k-i-reload"></span></a>' +
                '</span>' +
                '<span style="position:absolute; right:5px">' +
                    `<label class="category-label" for="category">Show products by category:</label>` +
                    '<input type="search" id="category" style="width: 150px"/>' +
                '</span>';

            return kendo.template(templateHtml);
        }
    },
    mounted: function() {
        var grid = this.$refs.grid.kendoWidget();
        var gridElement = grid.element;
        var dropDownElement = gridElement.find('#category');
        var toolbarElement = gridElement.find('.k-grid-toolbar');

        dropDownElement.kendoDropDownList({
            dataTextField: "CategoryName",
            dataValueField: "CategoryID",
            autoBind: false,
            optionLabel: "All",
            dataSource: {
                type: "odata",
                severFiltering: true,
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"
                }
            },
            change: function(e) {
                var value = e.sender.value();
                if (value) {
                    grid.dataSource.filter({ field: "CategoryID", operator: "eq", value: parseInt(value) });
                } else {
                    grid.dataSource.filter({});
                }
            }
        });

        toolbarElement.on("click", ".k-pager-refresh", function (e) {
            e.preventDefault();
            grid.dataSource.read();
        });
    }
}
</script>