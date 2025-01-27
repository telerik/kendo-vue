<template>
   <kendo-datasource ref="datasource1"
                      :type="'odata'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'">
    </kendo-datasource>

    <kendo-grid ref="grid"
                :height="550"
                :data-source-ref="'datasource1'"
                :row-template="rowTemplate"
                :alt-row-template="altRowTemplate">
        <kendo-grid-column title="Details" :width="110"></kendo-grid-column>
        <kendo-grid-column title="Country" :width="110"></kendo-grid-column>
        <kendo-grid-column title="ID" :width="110"></kendo-grid-column>
    </kendo-grid>
</template>
<script>
import './styles.css';
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
            rowTemplate: this.generateRowTemplate(),
            altRowTemplate: this.generateAltRowTemplate()
        }
    },
    methods: {
        generateRowTemplate: function() {
            var template =
                '<tr data-uid="#: uid #">' +
                    '<td class="details">' +
                        '<span class="name">#: FirstName# #: LastName# </span>' +
                        '<span class="title">Title: #: Title #</span>' +
                    '</td>' +
                    '<td class="country">' +
                        '#: Country #' +
                    '</td>' +
                    '<td class="employeeID">' +
                        '#: EmployeeID #' +
                    '</td>' +
                '</tr>'

            return kendo.template(template);
        },
        generateAltRowTemplate: function() {
            var template =
                '<tr class="k-alt" data-uid="#: uid #">' +
                    '<td class="details">' +
                        '<span class="name">#: FirstName# #: LastName# </span>' +
                        '<span class="title">Title: #: Title #</span>' +
                    '</td>' +
                    '<td class="country">' +
                        '#: Country #' +
                    '</td>' +
                    '<td class="employeeID">' +
                        '#: EmployeeID #' +
                    '</td>' +
                '</tr>'

            return kendo.template(template);
        }
    }
}
</script>