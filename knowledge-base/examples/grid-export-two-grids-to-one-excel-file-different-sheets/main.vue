<template>
  <KButton
    class="k-button k-primary"
    :title="'Export PDF'"
    @click="exportExcel"
  >
    Export the two Grids to Excel and save the data to two different sheets
  </KButton>
  <br />
  <br />
  <Grid ref="grid1" :columns="columns" :data-items="categories"> </Grid>
  <br />
  <br />
  <Grid ref="grid2" :columns="columnsGrid2" :data-items="grid2Data"> </Grid>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons';
import { Grid } from '@progress/kendo-vue-grid';
import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
import { saveAs } from '@progress/kendo-file-saver';

export default {
  components: {
    Grid: Grid,
    KButton: Button,
  },
  data: function () {
    return {
      expandedItems: [],
      columns: [
        { field: 'CategoryID', filterable: false, title: 'ID', width: '50px' },
        { field: 'CategoryName', title: 'Category Name' },
        { field: 'Descriptions', title: 'Descriptions' },
      ],
      columnsGrid2: [
        { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
        { field: 'ProductName', title: 'Name' },
        {
          field: 'FirstOrderedOn',
          editor: 'date',
          title: 'First Ordered',
          format: '{0:d}',
        },
        {
          field: 'UnitsInStock',
          title: 'Units',
          width: '150px',
          editor: 'numeric',
        },
        { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
      ],
      categories: [
        {
          CategoryID: 1,
          CategoryName: 'Beverages',
          Descriptions: 'Soft drinks, coffees, teas, beers, and ales',
        },
        {
          CategoryID: 2,
          CategoryName: 'Condiments',
          Descriptions:
            'Sweet and savory sauces, relishes, spreads, and seasonings',
        },
        {
          CategoryID: 3,
          CategoryName: 'Confections',
          Descriptions: 'Desserts, candies, and sweet breads',
        },
        {
          CategoryID: 4,
          CategoryName: 'Dairy Products',
          Descriptions: 'Cheeses',
        },
        {
          CategoryID: 5,
          CategoryName: 'Grains/Cereals',
          Descriptions: 'Breads, crackers, pasta, and cereal',
        },
        {
          CategoryID: 6,
          CategoryName: 'Meat/Poultry',
          Descriptions: 'Prepared meats',
        },
        {
          CategoryID: 7,
          CategoryName: 'Produce',
          Descriptions: 'Dried fruit and bean curd',
        },
        {
          CategoryID: 8,
          CategoryName: 'Seafood',
          Descriptions: 'Seaweed and fish',
        },
      ],
      grid2Data: [
        {
          ProductID: 1,
          ProductName: 'Chai',
          UnitsInStock: 39,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 20),
        },
        {
          ProductID: 2,
          ProductName: 'Chang',
          UnitsInStock: 17,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 7, 12),
        },
        {
          ProductID: 3,
          ProductName: 'Aniseed Syrup',
          UnitsInStock: 13,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 8, 26),
        },
        {
          ProductID: 4,
          ProductName: 'Cajun Seasoning',
          UnitsInStock: 53,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 5,
          ProductName: 'Orange',
          UnitsInStock: 51,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 6,
          ProductName: 'Banana',
          UnitsInStock: 22,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 7,
          ProductName: 'Apple',
          UnitsInStock: 16,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
        {
          ProductID: 8,
          ProductName: 'Peach',
          UnitsInStock: 10,
          Discontinued: false,
          FirstOrderedOn: new Date(1996, 9, 19),
        },
      ],
    };
  },
  methods: {
    exportExcel() {
      this.customSaveExcel({
        data: this.categories,
        fileName: 'myFile',
        columns: this.columns,
      });
    },
    customSaveExcel: function (exportOptions) {
      const saveFn = (dataURL) => {
        saveAs(dataURL, exportOptions.fileName);
      };

      const options = workbookOptions(exportOptions);
      const headerOptions = options.sheets[0].rows[0].cells[0];
      options.sheets.push({ rows: [] });
      const rows = options.sheets[1].rows;

      rows.push({
        cells: [
          Object.assign({}, headerOptions, { value: 'ID' }),
          Object.assign({}, headerOptions, { value: 'Name' }),
          Object.assign({}, headerOptions, { value: 'First Ordered' }),
          Object.assign({}, headerOptions, { value: 'Units' }),
          Object.assign({}, headerOptions, { value: 'Discontinued' }),
        ],
      });
      this.grid2Data.forEach((category) => {
        rows.push({
          cells: [
            { value: category.ProductID },
            { value: category.ProductName },
            { value: category.FirstOrderedOn },
            { value: category.UnitsInStock },
            { value: category.Discontinued },
          ],
        });
      });

      toDataURL(options).then(saveFn);
    },
  },
};
</script>
