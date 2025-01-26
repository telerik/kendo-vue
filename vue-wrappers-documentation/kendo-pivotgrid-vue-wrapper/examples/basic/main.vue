<template>
      <kendo-pivotdatasource ref="pivotdatasource"
                           :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
                           :type="'odata'"
                           :schema-cube="schemaCube"
                           :measures="measures">
        <kendo-pivot-column :name="'Country'" :expand="true"></kendo-pivot-column>
        <kendo-pivot-column :name="'CompanyName'"></kendo-pivot-column>
        <kendo-pivot-row :name="'ContactTitle'"></kendo-pivot-row>
    </kendo-pivotdatasource>

    <kendo-pivotconfigurator id="configurator"
                             class="hidden-on-narrow"
                             :data-source-ref="'pivotdatasource'"
                             :filterable="true"
                             :height="570">
    </kendo-pivotconfigurator>

   <kendo-pivotgrid id="pivotgrid"
                    class="hidden-on-narrow"
                    :data-source-ref="'pivotdatasource'"
                    :filterable="true"
                    :columnWidth="120"
                    :height="570">
    </kendo-pivotgrid>
</template>
<script>
import { PivotGrid, PivotConfigurator } from '@progress/kendo-pivotgrid-vue-wrapper';
import { PivotDataSource, PivotColumn, PivotRow } from '@progress/kendo-datasource-vue-wrapper';

export default {
  components: {
    'kendo-pivotgrid': PivotGrid,
    'kendo-pivotconfigurator': PivotConfigurator,
    'kendo-pivotdatasource': PivotDataSource,
    'kendo-pivot-column': PivotColumn,
    'kendo-pivot-row': PivotRow
  },
   data: function() {
        return {
            measures: ['Contacts Count'],
            schemaCube: {
                dimensions: {
                    ContactName: { caption: 'All Contacts' },
                    CompanyName: { caption: 'All Companies' },
                    Country: { caption: 'All Countries' },
                    ContactTitle: { caption: 'All Titles' }
                },
                measures: {
                    'Contacts Count': { field: 'CustomerID', aggregate: 'count' }
                }
            }
        }
    }
}
</script>
<style>
    .hidden-on-narrow {
        display: inline-block;
        vertical-align: top;
    }

    #pivotgrid {
        width: 58%;
    }

    #configurator {
        width: 41%;
        min-width: 41%;
    }
</style>

