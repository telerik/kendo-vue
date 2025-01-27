<template>
     <kendo-pivotdatasource ref="pivotdatasource"
                           :data="data"
                           :schema-model="schemaModel"
                           :schema-cube="schemaCube"
                           :measures="measures">
            <kendo-pivot-column :name="'CategoryName'" :expand="true"></kendo-pivot-column>
            <kendo-pivot-column :name="'ProductName'"></kendo-pivot-column>
            <kendo-pivot-row :name="'Discontinued'" :expand="true"></kendo-pivot-row>
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
            data: [{
                ProductID: 1,
                ProductName: 'Chai',
                SupplierID: 1,
                CategoryID: 1,
                QuantityPerUnit: '10 boxes x 20 bags',
                UnitPrice: 18.0000,
                UnitsInStock: 39,
                UnitsOnOrder: 0,
                ReorderLevel: 10,
                Discontinued: false,
                Category: {
                    CategoryID: 1,
                    CategoryName: 'Beverages',
                    Description: 'Soft drinks, coffees, teas, beers, and ales'
                }
            }, {
                ProductID: 2,
                ProductName: 'Chang',
                SupplierID: 1,
                CategoryID: 1,
                QuantityPerUnit: '24 - 12 oz bottles',
                UnitPrice: 19.0000,
                UnitsInStock: 17,
                UnitsOnOrder: 40,
                ReorderLevel: 25,
                Discontinued: false,
                Category: {
                    CategoryID: 1,
                    CategoryName: 'Beverages',
                    Description: 'Soft drinks, coffees, teas, beers, and ales'
                }
            }, {
                ProductID: 3,
                ProductName: 'Aniseed Syrup',
                SupplierID: 1,
                CategoryID: 2,
                QuantityPerUnit: '12 - 550 ml bottles',
                UnitPrice: 10.0000,
                UnitsInStock: 13,
                UnitsOnOrder: 70,
                ReorderLevel: 25,
                Discontinued: false,
                Category: {
                    CategoryID: 2,
                    CategoryName: 'Condiments',
                    Description: 'Sweet and savory sauces, relishes, spreads, and seasonings'
                }
            }, {
                ProductID: 70,
                ProductName: 'Outback Lager',
                SupplierID: 7,
                CategoryID: 1,
                QuantityPerUnit: '24 - 355 ml bottles',
                UnitPrice: 15.0000,
                UnitsInStock: 15,
                UnitsOnOrder: 10,
                ReorderLevel: 30,
                Discontinued: false,
                Category: {
                    CategoryID: 1,
                    CategoryName: 'Beverages',
                    Description: 'Soft drinks, coffees, teas, beers, and ales'
                }
            }],
            schemaModel: {
                fields: {
                    ProductName: { type: 'string' },
                    UnitPrice: { type: 'number' },
                    UnitsInStock: { type: 'number' },
                    Discontinued: { type: 'boolean' },
                    CategoryName: { field: 'Category.CategoryName' }
                }
            },
            measures: ['Sum'],
            schemaCube: {
                dimensions: {
                    ProductName: { caption: 'All Products' },
                    CategoryName: { caption: 'All Categories' },
                    Discontinued: { caption: 'Discontinued' }
                },
                measures: {
                    'Sum': { field: 'UnitPrice', format: '{0:c}', aggregate: 'sum' },
                    'Average': { field: 'UnitPrice', format: '{0:c}', aggregate: 'average' }
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

