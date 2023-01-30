<template>
    <Grid
      ref="grid"
      :style="{ height: '550px' }"
      :columns="columns"
      :data-items="categories"
      :detail="cellTemplate"
      @expandchange="expandChange"
      :expand-field="'expanded'"
    >
      <grid-toolbar>
        <KButton
          class="k-button k-primary"
          :title="'Export PDF'"
          @click="exportExcel"
        >
          Export to Excel
        </KButton>
      </grid-toolbar>
      <template v-slot:myTemplate="{ props }">
        <custom :data-item="props.dataItem" />
      </template>
    </Grid>
  </template>
  <script>
  import { Button } from '@progress/kendo-vue-buttons';
  import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
  import { products } from './products';
  import DetailComponent from './DetailComponent';
  import { workbookOptions, toDataURL } from '@progress/kendo-vue-excel-export';
  import { saveAs } from '@progress/kendo-file-saver';
  
  export default {
    components: {
      Grid: Grid,
      KButton: Button,
      custom: DetailComponent,
      'grid-toolbar': GridToolbar,
    },
    data: function () {
      return {
        cellTemplate: 'myTemplate',
        products: products,
        expandedItems: [],
        columns: [
          { field: 'CategoryID', filterable: false, title: 'ID', width: '50px' },
          { field: 'CategoryName', title: 'Category Name' },
          { field: 'Descriptions', title: 'Descriptions' },
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
      };
    },
    methods: {
      expandChange: function (event) {
        event.dataItem[event.target.$props.expandField] = event.value;
      },
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
        const rows = options.sheets[0].rows;
        const headerOptions = rows[0].cells[0];
  
        let altIdx = 0;
        let currentCategoryProducts;
        let currentRowIndex = null;
        this.categories.forEach((category) => {
          currentCategoryProducts = this.products.filter(
            (item) => item.CategoryID === category.CategoryID
          );
          rows.find((el, index) => {
            if (el.cells[0].value === currentCategoryProducts[0].CategoryID) {
              currentRowIndex = index;
            }
          });
  
          // Add the Detail tables' data
          for (
            let productIdx = currentCategoryProducts.length - 1;
            productIdx >= 0;
            productIdx--
          ) {
            const product = currentCategoryProducts[productIdx];
            rows.splice(currentRowIndex + 1, 0, {
              cells: [
                {},
                { value: product.ProductID },
                { value: product.ProductName },
                { value: product.UnitPrice },
                { value: product.UnitsInStock },
              ],
            }); // Add all products of the current category
          }
  
          // Apply color to the headers of the Detail tables
          rows.splice(currentRowIndex + 1, 0, {
            cells: [
              {},
              Object.assign({}, headerOptions, { value: 'Product ID' }),
              Object.assign({}, headerOptions, { value: 'Product Name' }),
              Object.assign({}, headerOptions, { value: 'Unit Price' }),
              Object.assign({}, headerOptions, { value: 'Units In Stock' }),
            ],
          });
        });
  
        toDataURL(options).then(saveFn);
      },
    },
  };
  </script>
  