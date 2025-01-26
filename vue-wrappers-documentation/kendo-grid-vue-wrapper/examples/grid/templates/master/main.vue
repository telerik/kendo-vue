<template>
  <kendo-datasource ref="datasource"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees'"
                        :type="'odata'"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
                :data-source-ref="'datasource'"
                :pageable='true'
                :editable="'inline'"
                v-on:detailinit="detailInit"
                v-on:databound="dataBound">
          <kendo-grid-column field="FirstName" title="First Name" :width="110"></kendo-grid-column>
          <kendo-grid-column field="LastName" title="Last Name" :width="110"></kendo-grid-column>
          <kendo-grid-column field="Country" :width="110"></kendo-grid-column>
          <kendo-grid-column field="City" :width="300"></kendo-grid-column>
          <kendo-grid-column field="Title"></kendo-grid-column>
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
        detailInit: function (e) {
            $('<div />').appendTo(e.detailCell).kendoGrid({
                dataSource: {
                    type: 'odata',
                    transport: {
                        read: 'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders'
                    },
                    serverPaging: true,
                    serverSorting: true,
                    serverFiltering: true,
                    pageSize: 10,
                    filter: {
                        field: 'EmployeeID',
                        operator: 'eq',
                        value: e.data.EmployeeID
                    }
                },
                scrollable: false,
                sortable: true,
                pageable: true,
                columns: [{
                    field: 'OrderID',
                    width: '110px'
                    },
                    {
                    field: 'ShipCountry',
                    title: 'Ship Country',
                    width: '110px'
                    },
                    {
                    field: 'ShipAddress',
                    title: 'Ship Address'
                    },
                    {
                    field: 'ShipName',
                    title: 'Ship Name',
                    width: '300px'
                }]
            })
        },
        dataBound: function (ev) {
          ev.sender.expandRow(ev.sender.tbody.find('tr.k-master-row').first())
        }
    }
}
</script>