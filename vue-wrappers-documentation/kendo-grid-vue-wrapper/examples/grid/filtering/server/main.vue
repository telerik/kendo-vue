<template>
     <kendo-datasource ref="datasource1"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'"
                      :type="'odata'"
                      :page-size='20'
                      :server-paging="true"
                      :server-sorting="true"
                      :server-filtering="true">
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource1'"
                :filterable="true"
                :pageable="true">
        <kendo-grid-column :field="'FirstName'"
                           :title="'First Name'"
                           :filterable-multi="true"
                           :filterable-data-source-transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees/Unique'"
                           :filterable-data-source-transport-read-data-type="'jsonp'"
                           :filterable-data-source-transport-read-data-field="'FirstName'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'LastName'"
                           :title="'Last Name'"
                           :filterable-multi="true"
                           :filterable-data-source-transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees/Unique'"
                           :filterable-data-source-transport-read-data-type="'jsonp'"
                           :filterable-data-source-transport-read-data-field="'LastName'"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'Country'"
                           :filterable-multi="true"
                           :filterable-data-source-transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees/Unique'"
                           :filterable-data-source-transport-read-data-type="'jsonp'"
                           :filterable-data-source-transport-read-data-field="'Country'"
                           :filterable-item-template="countryFilterTemplate"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'City'"
                           :filterable-multi="true"
                           :filterable-data-source="cityDataSource"
                           :filterable-check-all="false"
                           :width="180"></kendo-grid-column>
        <kendo-grid-column :field="'Title'"
                           :filterable-multi="true"
                           :filterable-data-source-transport-read-url="'https://demos.telerik.com/kendo-ui/service/Employees/Unique'"
                           :filterable-data-source-transport-read-data-type="'jsonp'"
                           :filterable-data-source-transport-read-data-field="'Title'"
                           :width="100"></kendo-grid-column>
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
   data () {
        return {
            cityDataSource: [
                { City: "Seattle" },
                { City: "Tacoma" },
                { City: "Kirkland" },
                { City: "Redmond" },
                { City: "London" }
            ]
        }
    },
    methods: {
        countryFilterTemplate: function(e) {
            if (e.field == "all") {
                //handle the check-all checkbox template
                return "<div><label><strong><input type='checkbox' />#= all#</strong></label></div>";
            } else {
                //handle the other checkboxes
                return "<span><label><input type='checkbox' name='" + e.field + "' value='#=Country#'/><span>#= Country #</span></label></span>"
            }
        }
    }
}
</script>